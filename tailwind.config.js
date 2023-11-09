/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'cappucino' : "url('./src/assets/img/cappuccino.jpg')",
      },
      colors: {
        'black_pearl' : '#1B1D1F',
        'almost_black' : '#111315',
        'almost_grey' : '#6F757C',
        'almost_green' : '#BEE3CC',
        'almost_white' : '#FEF7EE',
        'yellow' : '#F6C768',
        'almost_red' : '#ED735D',
      },
    },
  },
  plugins: [],
}