/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          cream: '#FFF7E6',
          aqua: '#AEE8E2',
          orange: '#F28C38',
          mustard: '#F2C849',
          teal: '#007C88',
          coral: '#F25D50',
          charcoal: '#2F2F2F',
          gold: '#D4A24C',
        },
      },
      fontFamily: {
        retroScript: ['var(--font-pacifico)', 'cursive'],
        retroSans: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'retro-pop': '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'radial-burst': 'radial-gradient(circle at top left, #F2C849, #F28C38)',
        'halftone-dots': "url('/images/halftone-dots.svg')",
        'orbital-path': 'linear-gradient(to right, #AEE8E2, #007C88)',
        'cosmic-glow': 'linear-gradient(45deg, #F25D50, #F28C38)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate: {
        tilt: '3deg',
        'tilt-reverse': '-3deg',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(10px) rotate(-360deg)',
          },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        comet: {
          '0%': { transform: 'translateX(-150%) translateY(-50%)', opacity: 0 },
          '30%': { opacity: 1 },
          '70%': { transform: 'translateX(150%) translateY(-80%)', opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        orbit: 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        comet: 'comet 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
