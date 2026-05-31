/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'void': '#050810',
        'deep': '#0b0f1a',
        'panel': '#0f1424',
        'card': '#131929',
        'neon-blue': '#00d4ff',
        'neon-green': '#00ff88',
        'neon-red': '#ff2d55',
        'neon-purple': '#b44fff',
        'glow-blue': '#0090cc',
      },
      fontFamily: {
        'display': ['"Orbitron"', 'monospace'],
        'body': ['"Rajdhani"', 'sans-serif'],
        'mono': ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'typewriter': 'typewriter 3s steps(30) forwards',
        'glitch': 'glitch 0.5s infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'matrix-rain': 'matrixRain 1.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #00d4ff44, 0 0 20px #00d4ff22' },
          '50%': { boxShadow: '0 0 30px #00d4ff88, 0 0 60px #00d4ff44' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        borderSpin: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '400% 50%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(2px, 2px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0,144,204,0.25), transparent)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
}
