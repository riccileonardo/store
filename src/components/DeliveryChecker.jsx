import { useState, useEffect } from "react";
import { fetchAddressByCep } from "../helpers/cepService";
import { persistState, restoreState } from "../helpers/localStorage";
import SectionTitle from "./common/SectionTitle";

const DeliveryChecker = () => {
  const [cep, setCep] = useState(() =>
    restoreState("deliveryCep", "")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState(() =>
    restoreState("deliveryAddress", null)
  );

  useEffect(() => {
    persistState("deliveryCep", cep);
  }, [cep]);

  useEffect(() => {
    if (address) {
      persistState("deliveryAddress", address);
    }
  }, [address]);

  const formatCep = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 5) {
      return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`;
    }
    return cleaned;
  };

  const handleCepChange = (e) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
  };

  const checkDelivery = async () => {
    if (cep.replace(/\D/g, '').length !== 8) {
      alert("Por favor, digite um CEP válido com 8 dígitos.");
      return;
    }

    setIsLoading(true);
    try {
      const addressData = await fetchAddressByCep(cep);
      if (addressData.erro) {
        alert("CEP não encontrado.");
        setAddress(null);
        persistState("deliveryAddress", null);
      } else {
        setAddress(addressData);
      }
    } catch (error) {
      alert("Erro ao buscar o CEP. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <SectionTitle>Verifique a entrega</SectionTitle>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={handleCepChange}
          maxLength={9}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm text-black text-left"
        />
        <button
          onClick={checkDelivery}
          disabled={isLoading}
          className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-black disabled:opacity-50"
        >
          {isLoading ? "Verificando..." : "Calcular"}
        </button>
      </div>

      {address && (
        <div className="mt-3 text-sm space-y-1 text-black text-left">
          <p className="font-medium">Endereço de entrega:</p>
          <p>{address.logradouro} {address.bairro}</p>
          <p>{address.localidade} - {address.uf}, {address.cep}</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryChecker;
