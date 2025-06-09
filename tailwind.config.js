/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'shooting-star': 'shooting-star linear infinite', // Make sure this line is here
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        'shooting-star': { // Make sure this keyframe is here
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)', opacity: '0', filter: 'brightness(0.5)' },
          '10%': { opacity: '1', filter: 'brightness(1.5)' },
          '100%': { transform: 'translateX(300px) translateY(300px) rotate(45deg)', opacity: '0', filter: 'brightness(0.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}