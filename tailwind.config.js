/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", //
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        newColor: '#f2f3f3',
        'custom-gray': '#A8A8A8', 
        'custom-gray-transparent': 'rgba(168, 168, 168, 0.2)',
        'line-custom-gray-transparent': 'rgba(168, 168, 168, 0.45)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(86.98deg, #676767 -15.18%, #E7530B 107.44%)',
        'custom-gradient': 'linear-gradient(to bottom, #fdc830, #f37335)',
        'footer-custom' : 'linear-gradient(266.69deg, #E9CDA0 1.87%, #E9B8A0 76.7%)',

      },
      fontFamily: {
        lalezar: ['Lalezar', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'],
      },
         },
  },
  plugins: [],
}