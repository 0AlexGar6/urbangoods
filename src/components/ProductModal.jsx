import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  const [mainImg, setMainImg] = useState(product.images[0]);
  const modalRef = useRef(null);
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

  // Cerrar al presionar Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Cerrar al hacer clic fuera del contenido
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Manejar swipe para móviles
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      // Swipe izquierda
      const currentIndex = product.images.indexOf(mainImg);
      const nextIndex = (currentIndex + 1) % product.images.length;
      setMainImg(product.images[nextIndex]);
    } else if (distance < -50) {
      // Swipe derecha
      const currentIndex = product.images.indexOf(mainImg);
      const prevIndex =
        (currentIndex - 1 + product.images.length) % product.images.length;
      setMainImg(product.images[prevIndex]);
    }
  };

  return (
    <AnimatePresence>
      {/* Fondo con animación de opacidad */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        {/* Contenido con animación de escala - responsive */}
        <motion.div
          key="modal-content"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          ref={modalRef}
          className="bg-white rounded-lg relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Botón cerrar - mejorado para móviles */}
          <motion.button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-2 shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes className="text-gray-700 text-xl" />
          </motion.button>

          {/* Contenedor principal responsive */}
          <div className="p-4 md:p-6">
            {/* Imagen principal con soporte para swipe en móviles */}
            <motion.div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative"
            >
              <motion.img
                src={mainImg}
                alt={product.name}
                className="w-full h-auto max-h-[50vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Indicadores de swipe para móviles */}
              {isMobile && (
                <div className="flex justify-center mt-2 space-x-2">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 w-2 rounded-full ${
                        product.images[idx] === mainImg
                          ? "bg-gray-700"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Miniaturas - ocultas en móvil */}
            {!isMobile && (
              <motion.div className="flex justify-center gap-4 my-6 overflow-x-auto py-2">
                {product.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`vista-${idx}`}
                    className={`h-16 w-16 min-w-[64px] object-contain border cursor-pointer rounded-lg ${
                      img === mainImg
                        ? "border-2 border-black"
                        : "border border-gray-300"
                    }`}
                    onClick={() => setMainImg(img)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </motion.div>
            )}

            {/* Info del producto responsive */}
            <div className="px-2 md:px-4">
              <motion.h2
                className="text-xl md:text-2xl font-semibold text-center mt-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {product.name}
              </motion.h2>

              <motion.p
                className="text-gray-600 text-center mt-2 text-sm md:text-base"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.description}
              </motion.p>

              <motion.p
                className="text-center font-bold text-lg mt-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.price}
              </motion.p>
            </div>

            {/* Botón de WhatsApp responsive */}
            <motion.div
              className="mt-6 mb-4 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={`https://wa.me/593979801271?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(
                  product.name
                )}`}
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="mr-2 text-lg" />
                Contactar por WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
