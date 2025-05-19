export const fetchAddressByCep = async (cep) => {
  const cleanCep = cep.replace(/\D/g, '');
  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  return await response.json();
};
