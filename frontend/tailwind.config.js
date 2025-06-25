/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Product Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 
          'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
        ],
        'product-sans': ['Product Sans', 'sans-serif'],
      },
      colors: {
        slate: { dark: '#141413', medium: '#3d3d3a', light: '#5e5d59' },
        cloud: { dark: '#87867f', medium: '#b0aea5', light: '#d1cfc5' },
        ivory: { dark: '#e8e6dc', medium: '#f0eee6', light: '#faf9f5' },
        book: { cloth: '#cc785c', clothLight: '#d2886f' },
        kraft: { DEFAULT: '#d4a27f', light: '#daaf91' },
        clay: '#d97757',
        lilac: '#8989de',
        lilypad: '#7ebf8e',
        manilla: { DEFAULT: '#ebdbbc', light: '#f1e6d0' },
        eggshell: '#f6f1eb',
        focus: '#61aaf2',
        error: '#bf4d43',
        dark: '#0f0f0e',
        light: '#fff'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#d97757",
          "primary-focus": "#cc785c",
          "primary-content": "#faf9f5",
          "secondary": "#7ebf8e",
          "secondary-focus": "#5e5d59",
          "secondary-content": "#faf9f5",
          "accent": "#8989de",
          "accent-focus": "#5e5d59",
          "accent-content": "#faf9f5",
          "neutral": "#3d3d3a",
          "neutral-focus": "#141413",
          "neutral-content": "#f0eee6",
          "base-100": "#faf9f5",
          "base-200": "#f0eee6",
          "base-300": "#e8e6dc",
          "base-content": "#141413",
          "info": "#61aaf2",
          "success": "#7ebf8e",
          "warning": "#d4a27f",
          "error": "#bf4d43",
          "book-cloth": "#cc785c",
          "kraft": "#d4a27f",
          "manilla": "#ebdbbc",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "1rem",
        },
      },
    ],
  },
}