const products = [
  {
    id: 1,
    name: "JORDAN 3 RETRO CARDINAL",
    price: "",
    images: [
      "./productos/z1-1.jpg",
      "./productos/z1-2.jpg",
      "./productos/z1-3.jpg",
    ],
    description:
      "Donde el estilo se encuentra con la comodidad, empieza tu camino.",
  },
  {
    id: 2,
    name: "AIR JORDAN 4 RETRO OG SP",
    price: "",
    images: [
      "./productos/z2-1.jpg",
      "./productos/z2-2.jpg",
      "./productos/z2-3.jpg",
    ],
    description: "Tus pasos dicen mucho… haz que hablen bien de ti.",
  },

  {
    id: 3,
    name: "JORDAN 1 RETRO HIGH OG",
    price: "",
    images: [
      "./productos/z3-1.jpg",
      "./productos/z3-2.jpg",
      "./productos/z3-3.jpg",
    ],
    description: "Diseñados para destacar, hechos para durar.",
  },

  {
    id: 4,
    name: "JORDAN 1 RETRO LOW OG SP TRAVIS SCOTT PHANTOM",
    price: "",
    images: [
      "./productos/z4-1.jpg",
      "./productos/z4-2.jpg",
      "./productos/z4-3.jpg",
    ],
    description: "Camina con confianza, luce con actitud.",
  },

  {
    id: 5,
    name: "ADIDAS YEEZY SLIDE EN GRANITO",
    price: "",
    images: ["./productos/z5-2.jpeg", "./productos/z5-1.jpeg"],
    description: "Más que zapatos, una experiencia para tus pies.",
  },

  {
    id: 6,
    name: "ADIDAS CAMPUS 00S CORE",
    price: "",
    images: [
      "./productos/z6-1.jpeg",
      "./productos/z6-2.jpeg",
      "./productos/z6-3.jpeg",
    ],
    description: "Paso firme, estilo único.",
  },

  {
    id: 7,
    name: "DIOR B22 ROSA - MALLA ROSA PLATEADO",
    price: "",
    images: [
      "./productos/z7-1.jpeg",
      "./productos/z7-2.jpeg",
      "./productos/z7-3.jpeg",
    ],
    description: "Comodidad que se nota, estilo que resalta.",
  },

  {
    id: 8,
    name: "ADIDAS RESPONSE CL BAD BUNNY",
    price: "",
    images: [
      "./productos/z8-1.jpeg",
      "./productos/z8-2.jpeg",
      "./productos/z8-3.jpeg",
    ],
    description: "Para cada paso, el zapato perfecto.",
  },

  {
    id: 9,
    name: "NIKE DUNK LOW RETRO",
    price: "",
    images: [
      "./productos/z9-1.jpeg",
      "./productos/z9-2.jpeg",
      "./productos/z9-3.jpeg",
    ],
    description: "Vístete desde los pies con clase y confort.",
  },

  {
    id: 10,
    name: "ADIDAS YEEZY 500",
    price: "",
    images: [
      "./productos/z10-1.jpeg",
      "./productos/z10-2.jpeg",
      "./productos/z10-3.jpeg",
    ],
    description: "Cada paso cuenta. Hazlo con estilo.",
  },

  {
    id: 11,
    name: "NIKE DUNK LOW RETRO",
    price: "",
    images: [
      "./productos/z11-1.jpeg",
      "./productos/z11-2.jpeg",
      "./productos/z11-3.jpeg",
    ],
    description: "Porque tus pies también merecen lujo.",
  },

  {
    id: 12,
    name: "JORDAN 1 RETRO LOW OG SP",
    price: "",
    images: [
      "./productos/z12-1.jpeg",
      "./productos/z12-2.jpeg",
      "./productos/z12-3.jpeg",
    ],
    description: "Tu look empieza desde el suelo.",
  },

  {
    id: 13,
    name: "DIOR B22",
    price: "",
    images: [
      "./productos/z13-1.jpeg",
      "./productos/z13-2.jpeg",
      "./productos/z13-3.jpeg",
    ],
    description: "Elegancia que camina contigo.",
  },

  {
    id: 14,
    name: "ADIDAS YEEZY BOOST 700 WAVE RUNNER",
    price: "",
    images: [
      "./productos/z14-1.jpeg",
      "./productos/z14-2.jpeg",
      "./productos/z14-3.jpeg",
    ],
    description: "Diseño que pisa fuerte.",
  },

  {
    id: 15,
    name: "ADIDAS  YEEZY BOOST 700 ANALOG",
    price: "",
    images: [
      "./productos/z15-1.jpeg",
      "./productos/z15-2.jpeg",
      "./productos/z15-3.jpeg",
    ],
    description: "Camina cómodo, camina con clase.",
  },

  {
    id: 16,
    name: "DIOR B27 LOW WORLD TOUR",
    price: "",
    images: [
      "./productos/z16-1.jpeg",
      "./productos/z16-2.jpeg",
      "./productos/z16-3.jpeg",
    ],
    description: "Para quienes dejan huella con estilo.",
  },

  {
    id: 17,
    name: "DIOR B30",
    price: "",
    images: [
      "./productos/z17-1.jpeg",
      "./productos/z17-2.jpeg",
      "./productos/z17-3.jpeg",
    ],
    description: "Donde va tu paso, va tu personalidad.",
  },

  {
    id: 18,
    name: "ADIDAS YEEZY SLIDE",
    price: "",
    images: ["./productos/z18-1.jpeg", "./productos/z18-2.jpeg"],
    description: "La comodidad nunca se vio tan bien.",
  },

  {
    id: 19,
    name: "JORDAN 1 RETRO LOW OG SP TRAVIS SCOTT REVERSE",
    price: "",
    images: [
      "./productos/z19-1.jpeg",
      "./productos/z19-2.jpeg",
      "./productos/z19-3.jpeg",
    ],
    description: "Zapatos que combinan contigo, no solo con tu outfit.",
  },

  {
    id: 20,
    name: "JORDAN 3 RETRO OG",
    price: "",
    images: [
      "./productos/z20-1.jpeg",
      "./productos/z20-2.jpeg",
      "./productos/z20-3.jpeg",
    ],
    description: "Deja que tus pies hablen por ti.",
  },

  {
    id: 21,
    name: "NIKE SB DUNK LOW",
    price: "",
    images: [
      "./productos/z21-1.jpeg",
      "./productos/z21-2.jpeg",
      "./productos/z21-3.jpeg",
    ],
    description: "No son solo zapatos, es tu actitud en movimiento.",
  },

  {
    id: 22,
    name: "JORDAN 1 RETRO LOW OG SP TRAVIS SCOTT",
    price: "",
    images: [
      "./productos/z22-1.jpeg",
      "./productos/z22-2.jpeg",
      "./productos/z22-3.jpeg",
    ],
    description: "Estilo que camina contigo todos los días.",
  },

  {
    id: 23,
    name: "JORDAN 1 RETRO HIGH OG UNC TOE",
    price: "",
    images: [
      "./productos/z23-1.jpeg",
      "./productos/z23-2.jpeg",
      "./productos/z23-3.jpeg",
    ],
    description:
      "Donde el estilo se encuentra con la comodidad, empieza tu camino.",
  },

  {
    id: 24,
    name: "JORDAN 11 RETRO",
    price: "",
    images: [
      "./productos/z24-1.jpeg",
      "./productos/z24-2.jpeg",
      "./productos/z24-3.jpeg",
    ],
    description: "Tus pasos dicen mucho… haz que hablen bien de ti.",
  },

  {
    id: 25,
    name: "JORDAN 4 RETRO SHIMMER",
    price: "",
    images: [
      "./productos/z25-1.jpeg",
      "./productos/z25-2.jpeg",
      "./productos/z25-3.jpeg",
    ],
    description: "Diseñados para destacar, hechos para durar.",
  },

  {
    id: 26,
    name: "ASICS GEL-1130",
    price: "",
    images: [
      "./productos/z26-1.jpeg",
      "./productos/z26-2.jpeg",
      "./productos/z26-3.jpeg",
    ],
    description: "Camina con confianza, luce con actitud.",
  },

  {
    id: 27,
    name: "JORDAN 1 RETRO HIGH OG SP",
    price: "",
    images: [
      "./productos/z27-1.jpeg",
      "./productos/z27-2.jpeg",
      "./productos/z27-3.jpeg",
    ],
    description: "Más que zapatos, una experiencia para tus pies.",
  },

  {
    id: 28,
    name: "JORDAN 1 RETRO HIGH OG",
    price: "",
    images: [
      "./productos/z28-1.jpeg",
      "./productos/z28-2.jpeg",
      "./productos/z28-3.jpeg",
    ],
    description: "Paso firme, estilo único.",
  },

  {
    id: 29,
    name: "JORDAN 4 RETRO",
    price: "",
    images: [
      "./productos/z29-1.jpeg",
      "./productos/z29-2.jpeg",
      "./productos/z29-3.jpeg",
    ],
    description: "Comodidad que se nota, estilo que resalta.",
  },

  {
    id: 30,
    name: "JORDAN 4 RETRO",
    price: "",
    images: [
      "./productos/z30-1.jpeg",
      "./productos/z30-2.jpeg",
      "./productos/z30-3.jpeg",
    ],
    description: "Para cada paso, el zapato perfecto.",
  },

  {
    id: 31,
    name: "JORDAN 3 RETRO",
    price: "",
    images: ["./productos/z31-1.jpeg", "./productos/z31-2.jpeg"],
    description: "Vístete desde los pies con clase y confort.",
  },

  {
    id: 32,
    name: "JORDAN 4 RETRO",
    price: "",
    images: [
      "./productos/z32-1.jpeg",
      "./productos/z32-2.jpeg",
      "./productos/z32-3.jpeg",
    ],
    description: "Cada paso cuenta. Hazlo con estilo.",
  },

  {
    id: 33,
    name: "NIKE AIR FORCE 1 LOW SUPREME",
    price: "",
    images: [
      "./productos/z33-1.jpeg",
      "./productos/z33-2.jpeg",
      "./productos/z33-3.jpeg",
    ],
    description: "Porque tus pies también merecen lujo.",
  },

  {
    id: 34,
    name: "ASICS GEL-KAYANO 14",
    price: "",
    images: [
      "./productos/z34-1.jpeg",
      "./productos/z34-2.jpeg",
      "./productos/z34-3.jpeg",
    ],
    description: "Tu look empieza desde el suelo.",
  },

  {
    id: 35,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: [
      "./productos/z35-1.jpeg",
      "./productos/z35-2.jpeg",
      "./productos/z35-3.jpeg",
    ],
    description: "Elegancia que camina contigo.",
  },

  {
    id: 36,
    name: "JORDAN 1 RETRO HIGH OG",
    price: "",
    images: [
      "./productos/z36-1.jpeg",
      "./productos/z36-2.jpeg",
      "./productos/z36-3.jpeg",
    ],
    description: "Diseño que pisa fuerte.",
  },

  {
    id: 37,
    name: "ADIDAS CAMPUS 00S WONDER QUARTZ",
    price: "",
    images: [
      "./productos/z37-1.jpeg",
      "./productos/z37-2.jpeg",
      "./productos/z37-3.jpeg",
    ],
    description: "Camina cómodo, camina con clase.",
  },

  {
    id: 38,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: [
      "./productos/z38-1.jpeg",
      "./productos/z38-2.jpeg",
      "./productos/z38-3.jpeg",
    ],
    description: "Para quienes dejan huella con estilo.",
  },

  {
    id: 39,
    name: "JORDAN 5 RETRO",
    price: "",
    images: [
      "./productos/z39-1.jpeg",
      "./productos/z39-2.jpeg",
      "./productos/z39-3.jpeg",
    ],
    description: "Donde va tu paso, va tu personalidad.",
  },

  {
    id: 40,
    name: "LOUIS VUITTON LV TRAINER MONOGRAM EN DENIUM",
    price: "",
    images: [
      "./productos/z40-1.jpeg",
      "./productos/z40-2.jpeg",
      "./productos/z40-3.jpeg",
    ],
    description: "La comodidad nunca se vio tan bien.",
  },

  {
    id: 41,
    name: "ADIDAS CAMPUS OOS CRYSTAL CORE",
    price: "",
    images: [
      "./productos/z41-1.jpeg",
      "./productos/z41-2.jpeg",
      "./productos/z41-3.jpeg",
    ],
    description: "Zapatos que combinan contigo, no solo con tu outfit.",
  },

  {
    id: 42,
    name: "ASICS GEL-NYC",
    price: "",
    images: [
      "./productos/z42-1.jpeg",
      "./productos/z42-2.jpeg",
      "./productos/z42-3.jpeg",
    ],
    description: "Deja que tus pies hablen por ti.",
  },

  {
    id: 43,
    name: "JORDAN 1 RETRO HIGH OG",
    price: "",
    images: [
      "./productos/z43-1.jpeg",
      "./productos/z43-2.jpeg",
      "./productos/z43-3.jpeg",
    ],
    description: "No son solo zapatos, es tu actitud en movimiento.",
  },

  {
    id: 44,
    name: "JORDAN 4 RETRO THUNDER",
    price: "",
    images: [
      "./productos/z44-1.jpeg",
      "./productos/z44-2.jpeg",
      "./productos/z44-3.jpeg",
    ],
    description: "Estilo que camina contigo todos los días",
  },

  {
    id: 45,
    name: "ASICS GEL-1130",
    price: "",
    images: [
      "./productos/z45-1.jpeg",
      "./productos/z45-2.jpeg",
      "./productos/z45-3.jpeg",
    ],
    description:
      "Donde el estilo se encuentra con la comodidad, empieza tu camino.",
  },

  {
    id: 46,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: [
      "./productos/z46-1.jpeg",
      "./productos/z46-2.jpeg",
      "./productos/z46-3.jpeg",
    ],
    description: "Tus pasos dicen mucho… haz que hablen bien de ti.",
  },

  {
    id: 47,
    name: "ADIDAS CAMPUS 00S",
    price: "",
    images: [
      "./productos/z47-1.jpeg",
      "./productos/z47-2.jpeg",
      "./productos/z47-3.jpeg",
    ],
    description: "Diseñados para destacar, hechos para durar.",
  },

  {
    id: 48,
    name: "ASICS GEL-NYC",
    price: "",
    images: [
      "./productos/z48-1.jpeg",
      "./productos/z48-2.jpeg",
      "./productos/z48-3.jpeg",
    ],
    description: "Camina con confianza, luce con actitud.",
  },

  {
    id: 49,
    name: "LOUIS VUITTON LV TRAINER AZUL DAMIER 3D",
    price: "",
    images: [
      "./productos/z49-1.jpeg",
      "./productos/z49-2.jpeg",
      "./productos/z49-3.jpeg",
    ],
    description: "Más que zapatos, una experiencia para tus pies.",
  },

  {
    id: 50,
    name: "ASICS GEL-1130",
    price: "",
    images: [
      "./productos/z50-1.jpeg",
      "./productos/z50-2.jpeg",
      "./productos/z50-3.jpeg",
    ],
    description: "Paso firme, estilo único.",
  },

  {
    id: 51,
    name: "JORDAN 4 RETRO",
    price: "",
    images: ["./productos/z51-1.jpeg", "./productos/z51-2.jpeg"],
    description: "Comodidad que se nota, estilo que resalta.",
  },

  {
    id: 52,
    name: "DIOR MOCASSIN NEGRO CD DIAMOND",
    price: "",
    images: ["./productos/z52.jpeg"],
    description: "Para cada paso, el zapato perfecto.",
  },

  {
    id: 53,
    name: "DIOR PIEL DE BECERRO LISA GRANVILLE MOCASSIN NEGRO",
    price: "",
    images: ["./productos/z53.jpeg"],
    description: "Vístete desde los pies con clase y confort.",
  },

  {
    id: 54,
    name: "DIOR B44 BLADE",
    price: "",
    images: ["./productos/z54.jpeg"],
    description: "Cada paso cuenta. Hazlo con estilo.",
  },

  {
    id: 55,
    name: "DIOR ONE SNEAKER",
    price: "",
    images: ["./productos/z55.jpeg"],
    description: "Porque tus pies también merecen lujo.",
  },

  {
    id: 56,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: ["./productos/z56.jpeg"],
    description: "Tu look empieza desde el suelo.",
  },
  {
    id: 57,
    name: "DIOR SANDALO DIORACT",
    price: "",
    images: ["./productos/z57.jpeg"],
    description: "Elegancia que camina contigo.",
  },

  {
    id: 58,
    name: "LOUIS VUITTON X TAKASHI MURAKAMI LV TRAINER SNEAKER",
    price: "",
    images: ["./productos/z58.jpeg"],
    description: "Diseño que pisa fuerte.",
  },

  {
    id: 59,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: ["./productos/z59.jpeg"],
    description: "Camina cómodo, camina con clase.",
  },

  {
    id: 60,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: ["./productos/z60.jpeg"],
    description: "Para quienes dejan huella con estilo.",
  },

  {
    id: 61,
    name: "LOUIS VUITTON LV TRAINER",
    price: "",
    images: ["./productos/z61.jpeg"],
    description: "Donde va tu paso, va tu personalidad.",
  },

  {
    id: 62,
    name: "LOUIS VUITTON GREEN WHITE LOUIS",
    price: "",
    images: ["./productos/z62.jpeg"],
    description: "La comodidad nunca se vio tan bien.",
  },

  {
    id: 63,
    name: "BOLSO DE MANO LOUIS VUITTON LOOP MONOGRAM MARRON",
    price: "",
    images: ["./productos/b1-1.jpeg", "./productos/b1-2.jpeg"],
    description: "El bolso perfecto, para cada versión de ti.",
  },

  {
    id: 64,
    name: "LOUIS VUITTON BOND STREET HANDBAG",
    price: "",
    images: ["./productos/b2-1.jpeg", "./productos/b2-2.jpeg"],
    description: "Bolsos que guardan más que cosas: guardan actitud",
  },

  {
    id: 65,
    name: "BOLSA DE MANO Y BANDOLERA JACQUEMUS LE GRAND BAMBINO",
    price: "",
    images: ["./productos/b3-1.jpeg", "./productos/b3-2.jpeg"],
    description: "Tu look no está completo sin el bolso ideal.",
  },

  {
    id: 66,
    name: "LOUIS VUITTON LOOP BOLSO DE MANO BAGUETTE DENIM JACQUARD",
    price: "",
    images: ["./productos/b4-1.jpeg", "./productos/b4-2.jpeg"],
    description: "Diseño, funcionalidad y estilo… todo en un solo bolso.",
  },

  {
    id: 67,
    name: "LOUIS VUITTON X TAKASHI MURAKAMI MANO SPEEDY",
    price: "",
    images: ["./productos/b5-1.jpeg", "./productos/b5-2.jpeg"],
    description: "Bolsos que te acompañan a donde tus sueños te lleven.",
  },

  {
    id: 68,
    name: "BOLSO DIOR X ERL LINGOT 50",
    price: "",
    images: ["./productos/b6-1.jpeg", "./productos/b6-2.jpeg"],
    description: "Más que un bolso, una declaración de estilo.",
  },

  {
    id: 69,
    name: "LOUIS VUITTON DISTRICT PM MONOGRAM ECLIPSE",
    price: "",
    images: ["./productos/b7-1.jpeg", "./productos/b7-2.jpeg"],
    description: "Bolsos con espacio para todo, menos para lo ordinario",
  },

  {
    id: 70,
    name: "BOLSA LOUIS VUITTON SLOUCHY",
    price: "",
    images: ["./productos/b8-2.jpeg", "./productos/b8-1.jpeg"],
    description: "Elegancia que se lleva del brazo.",
  },

  {
    id: 71,
    name: "BOLSO DE MANO LOUIS VUITTON DIANE MONOGRAM MARRON",
    price: "",
    images: ["./productos/b9-1.jpeg", "./productos/b9-2.jpeg"],
    description:
      "Bolsos diseñados para destacar, no para pasar desapercibidos.",
  },

  {
    id: 72,
    name: "LOUIS VUITTON  ALMA",
    price: "",
    images: ["./productos/b10.jpeg"],
    description: "Lleva contigo estilo, confianza y organización",
  },

  {
    id: 73,
    name: "LOUIS VUITTON BOLSO DE MANO COUSSIN MM MONOGRAM KAKI EN RELIEVE",
    price: "",
    images: ["./productos/b11-1.jpeg", "./productos/b11-2.jpeg"],
    description: "Bolsos que entienden tu ritmo y tu personalidad.",
  },

  // ... más productos
];

export default products;
