import { useEffect, useState } from "react";
import { productData } from "../data/productsData";
import { persistState, restoreState } from "../helpers/localStorage";
import Divider from "./common/Divider";
import SectionTitle from "./common/SectionTitle";

const ProductVariants = ({ onColorChange, onSizeChange }) => {
  const { colors, sizes } = productData;

  const [selectedColor, setSelectedColor] = useState(() =>
    restoreState("selectedColor", colors[0]?.id)
  );
  const [selectedSize, setSelectedSize] = useState(() =>
    restoreState("selectedSize", null)
  );

  useEffect(() => {
    if (selectedColor) {
      persistState("selectedColor", selectedColor);
      onColorChange(selectedColor);
    }
  }, [selectedColor, onColorChange]);

  useEffect(() => {
    if (selectedSize) {
      persistState("selectedSize", selectedSize);
      onSizeChange(selectedSize);
    }
  }, [selectedSize, onSizeChange]);

  const handleColorSelect = (colorId) => {
    setSelectedColor(colorId);
  };

  const handleSizeSelect = (sizeId) => {
    setSelectedSize(sizeId);
  };

  return (
    <div className="space-y-6">
      <div>
        <SectionTitle>Cor</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`relative w-10 h-10 rounded-full border ${
                selectedColor === color.id
                  ? "ring-2 ring-offset-2 ring-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.code }}
              onClick={() => handleColorSelect(color.id)}
              title={color.name}
            >
              <span className="sr-only">{color.name}</span>
            </button>
          ))}
        </div>
        <Divider />
      </div>
      <div>
        <div className="flex justify-between">
          <SectionTitle>Tamanho</SectionTitle>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-2 sm:grid-cols-8">
          {sizes.map((size) => (
            <button
              key={size.id}
              className={`flex items-center justify-center px-3 py-2 text-sm rounded-md
                ${
                  !size.available
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : selectedSize === size.id
                    ? "bg-white border border-gray-300 text-black ring-1 ring-black"
                    : "bg-white border border-gray-300 text-black hover:bg-gray-50"
                }`}
              onClick={() => size.available && handleSizeSelect(size.id)}
              disabled={!size.available}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ProductVariants;
