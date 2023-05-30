/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
};
