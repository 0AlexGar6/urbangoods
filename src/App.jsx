import React, { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import logoImg from "./assets/logo.png";
import portadaImg from "./assets/portada-bg.jpg";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* 🔝 PORTADA MEJORADA */}
      <section className="relative min-h-screen">
        {/* Fondo con imagen - versión mejorada */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${portadaImg})`,
            filter: "brightness(0.8)",
          }}
        ></div>

        {/* Capa de gradiente en lugar de opacidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

        {/* Contenido centrado mejorado */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.img
            src={logoImg}
            alt="Logo tienda"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-cover mb-6 rounded-full border-4 border-white/30 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Tienda de Calzado Deportivo
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-xl mb-6 font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Nayón, Ecuador
          </motion.p>

          {/* Redes sociales con iconos y efectos */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              {
                icon: <FaWhatsapp />,
                color: "text-green-400",
                label: "WhatsApp",
                href: "https://wa.me/593979801271",
              },
              {
                icon: <FaTiktok />,
                color: "text-pink-400",
                label: "TikTok",
                href: "https://www.tiktok.com/@urban.goods.shoes",
              },
              {
                icon: <FaInstagram />,
                color: "text-red-400",
                label: "Instagram",
                href: "https://www.instagram.com/_urbangoods?igsh=MW5sZTJnc3Rrd3YzNw==",
              },
              {
                icon: <FaMapMarkerAlt />,
                color: "text-blue-400",
                label: "Ubicación",
                href: "https://www.google.com/maps?q=-0.15849319100379944,-78.43917083740234&z=17&hl=es",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} hover:text-white text-2xl font-semibold flex items-center gap-2 transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Flecha animada mejorada */}
          <motion.a
            href="#catalogo"
            className="mt-20 md:mt-40 text-white"
            animate={{
              y: [0, 10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <FaChevronDown className="h-10 w-10 mx-auto" />
          </motion.a>
        </div>
      </section>

      {/* 🔍 Buscador mejorado */}
      <div
        id="catalogo"
        className={`sticky top-0 z-20 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-md mx-auto px-4">
          <input
            type="text"
            placeholder="🔍 Buscar zapatillas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-white/80 text-gray-800 placeholder:text-gray-500 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-lg transition-all duration-300 hover:shadow-xl"
          />
        </div>
      </div>

      {/* 🖼️ Galería mejorada */}
      {/* 🖼️ Galería responsive - 2 columnas en móvil */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 mt-4"
            >
              Mostrar todos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal de producto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
