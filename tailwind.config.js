/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mars: {
          red: '#a71e28',
          darkred: '#7e131b',
          crimson: '#9b1822',
          lightred: '#c82835',
          accent: '#ff4d5a',
          hover: '#bf222d',
        },
        space: {
          darkest: '#090e10',
          dark: '#111b1e',
          surface: '#162327',
          card: '#1b2c31',
          cardHover: '#22373d',
          border: 'rgba(255, 255, 255, 0.1)',
          borderMuted: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['"TildaSans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'mars-radial': 'radial-gradient(circle at center, #a71e28 0%, #7e131b 60%, #111b1e 100%)',
        'space-gradient': 'linear-gradient(180deg, #111b1e 0%, #0d1618 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
