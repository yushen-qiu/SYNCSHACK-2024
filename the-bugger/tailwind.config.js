/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'rose-taupe': '#9d5c63',
        'wenge': '#584b53',
        'lavender': '#d6e3f8',
        'seashell': '#fef5ef',
        'desert-sand': '#e4bb97',
      },
    },
  },
  plugins: [],
}