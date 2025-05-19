import { useState } from 'react';
import './App.css';
import ProductGallery from "./components/ProductGallery";
import ProductVariants from "./components/ProductVariants";
import DeliveryChecker from "./components/DeliveryChecker";
import { productData } from "./data/productsData";
import Divider from "./components/common/Divider";

function App() {
  const [selectedColorId, setSelectedColorId] = useState(productData.colors[0].id);

  const handleColorChange = (colorId) => {
    setSelectedColorId(colorId);
  };

  const handleSizeChange = (sizeId) => {
    console.log("Tamanho selecionado:", sizeId);
  };

  const selectedColor = productData.colors.find(color => color.id === selectedColorId);

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ProductGallery images={selectedColor?.images || []} />
        </div>

        <div className="space-y-6 text-left text-black">
          <h1 className="text-2xl font-bold">{productData.name}</h1>
          <p className="text-xl font-semibold">R$ {productData.price.toFixed(2)}</p>
          <p className="text-gray-600 text-sm">{productData.description}</p>
          <Divider></Divider>

          <ProductVariants
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
          />

          <DeliveryChecker />
        </div>
      </div>
    </main>
  );
}

export default App;
