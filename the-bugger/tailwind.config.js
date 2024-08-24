/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wenge': '#584b53',
        'rose-taupe': '#9d5c63',
        'lavender': '#d6e3f8',
        'seashell': '#fef5ef',
        'dessert-sand': '#e4bb97',
      },
    },
  },
  plugins: [],
}