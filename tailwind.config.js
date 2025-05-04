/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7E6',
        aqua: '#AEE8E2',
        orange: '#F28C38',
        mustard: '#F2C849',
        teal: '#007C88',
        coral: '#F25D50',
        charcoal: '#2F2F2F',
        gold: '#D4A24C',
      },
      fontFamily: {
        retroScript: ['Pacifico', 'cursive'],
        retroSans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'retro-pop': '4px 4px 0px rgba(0, 0, 0, 0.8)',
        'button-shadow': '0 6px 0 #00656F',
        'card-shadow': '8px 8px 0px rgba(0, 0, 0, 0.15)',
      },
      rotate: {
        'tilt-left': '-3deg',
        'tilt-right': '3deg',
      },
      borderRadius: {
        'bean': '40% 60% 60% 40% / 60% 30% 70% 40%',
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shooting-star': 'shooting-star 4s ease-out infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateX(100vw) translateY(100vh) rotate(25deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
