/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: ["night", "winter", "luxury"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "night",
  },
};
