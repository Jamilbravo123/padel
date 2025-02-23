/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        signature: ['Great Vibes', 'cursive'],
      },
      colors: {
        gold: {
          '50': '#FDFAF3',
          '100': '#FBEFCC',
          '200': '#F7E092',
          '300': '#F2CA54',
          '400': '#E9B52C',
          '500': '#D79918',
          '600': '#BC7712',
          '700': '#9C5813',
          '800': '#814516',
          '900': '#6C3A17',
          '950': '#3E1D0B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(to right, #d79918, #f2ca54, #d79918)',
      },
    },
  },
  plugins: [],
}