import React, { useState, useEffect } from "react";

const ProductCard = ({ product, onClick }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animación de imágenes
  useEffect(() => {
    if (hovering && !isMobile) {
      // Solo animar en desktop
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % product.images.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hovering, product.images.length, isMobile]);

  // Manejar touch para móviles
  const handleTouch = () => {
    if (isMobile) {
      setCurrentImg((prev) => (prev + 1) % product.images.length);
    }
  };

  return (
    <div
      className="cursor-pointer text-center p-2 transition-all duration-300 hover:shadow-lg rounded-lg"
      onMouseEnter={() => !isMobile && setHovering(true)}
      onMouseLeave={() => {
        !isMobile && setHovering(false);
        setCurrentImg(0);
      }}
      onTouchEnd={handleTouch}
      onClick={() => onClick(product)}
    >
      <div className="relative pb-[100%]">
        {" "}
        {/* Mantener relación de aspecto 1:1 */}
        <img
          src={product.images[currentImg]}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
          loading="lazy" // Optimización de carga
        />
      </div>

      <div className="mt-3 px-2">
        <h3 className="font-medium text-sm sm:text-base line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
