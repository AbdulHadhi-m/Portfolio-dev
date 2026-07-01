/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        'ink-light': 'var(--color-ink-light)',
        border: 'var(--color-border)',
        yellow: '#ffd93d',
        cyan: '#66d9ef',
        green: '#a8e6cf',
        pink: '#ff6b9d',
        purple: '#c084fc',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        'brutal': '5px 5px 0px var(--color-ink)',
        'brutal-lg': '8px 8px 0px var(--color-ink)',
        'brutal-sm': '3px 3px 0px var(--color-ink)',
      },
    },
  },
  plugins: [],
}
