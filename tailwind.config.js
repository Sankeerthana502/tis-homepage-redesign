/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          crimson: '#B90124',
          'crimson-dark': '#8A0019',
          'crimson-light': '#D41E42',
          gold: '#C09D59',
          'gold-light': '#DFBE7C',
          'gold-dark': '#9A7A38',
          teal: '#60BAB1',
          'teal-dark': '#007A83',
          'teal-light': '#90CCD0',
          dark: '#0e1318',
          'dark-card': '#161c24',
          'dark-border': '#222b36',
          charcoal: '#1C1C1C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px rgba(185, 1, 36, 0.35)',
        'glow-gold': '0 0 25px rgba(192, 157, 89, 0.35)',
        'glow-teal': '0 0 25px rgba(96, 186, 177, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
