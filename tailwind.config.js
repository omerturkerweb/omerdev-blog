/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header_main_light: "#ffffff",
        light_theme_background: "#f3f4f6",
      },
      colors: {
        transparent_black: "rgba(0,0,0,0.1)",
      },
      fontFamily: {
        heading_font_family: "'Montserrat', sans-serif;",
      },
    },
  },
  plugins: [],
};
