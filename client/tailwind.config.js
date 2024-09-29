/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.7)' },
          '50%': { textShadow: '0 0 15px rgba(255, 255, 255, 1)' },
          '100%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.7)' },
        },
      },
      animation: {
        maple: 'maple 0.8s ease-out',
        fadeIn: 'fadeIn 1s ease-in-out',
        glow: 'glow 2.5s infinite alternate',
      },
      keyframes: {
        fillText: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        maple: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      }      
    },
  },
  plugins: [],
}
