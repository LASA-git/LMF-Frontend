/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        lasa: {
          50: '#F8F5EC',
          100: '#F0EAD8',
          200: '#E2D4A8',
          300: '#C9B36A',
          400: '#3A64B0',
          500: '#1A4A8C',
          600: '#0D3578',
          700: '#00246C',
          gold: '#C89614',
          heart: '#C41E3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"DM Serif Display"', 'serif'],
        logo: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
