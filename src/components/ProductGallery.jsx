import { useEffect, useState } from "react";

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  if (!images || images.length === 0) {
    return <p className="text-sm text-red-500">Imagens do produto não disponíveis.</p>;
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={mainImage.url} 
          alt={mainImage.alt} 
          className="w-full h-auto object-cover aspect-square"
        />
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image) => (
          <button
            key={image.id}
            className={`relative min-w-[4rem] h-16 rounded border-2 overflow-hidden ${
              mainImage.id === image.id ? "border-black" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
