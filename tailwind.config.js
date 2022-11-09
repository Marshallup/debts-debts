/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey-100': '#9e9e9e',
      },
    },
  },
  plugins: [require('daisyui')],
}
