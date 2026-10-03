/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        lasa: {
          50: '#F5F9FD',
          100: '#E8F2FA',
          200: '#C9DCEF',
          300: '#9BB8D9',
          400: '#5B8FC4',
          500: '#3A6FA8',
          600: '#2867A4',
          700: '#153A62',
          gold: '#C9A24A',
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
