/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', "cursive"], // añade esta línea
      },
    },
  },
  plugins: [],
};
