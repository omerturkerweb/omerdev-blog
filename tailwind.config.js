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
        transparent_black: "rgba(0,0,0,0.3)",
        post_description_bg: "#404040",
        important_bg_blue: "rgba(135, 207, 235, 0.178);",
      },
      fontFamily: {
        heading_font_family: "'Montserrat', sans-serif",
        post_description_ff: `-apple-system, BlinkMacSystemFont`,
      },
    },
  },
  plugins: [],
};
