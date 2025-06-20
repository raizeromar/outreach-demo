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
      // Define as the default sans-serif font
      sans: [
        'Product Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      // Optionally create specific font stacks if needed
      'product-sans': ['Product Sans', 'sans-serif'],
    },
      colors: {
        // Custom color palette
        slate: {
          dark: '#141413',
          medium: '#3d3d3a',
          light: '#5e5d59'
        },
        cloud: {
          dark: '#87867f',
          medium: '#b0aea5',
          light: '#d1cfc5'
        },
        ivory: {
          dark: '#e8e6dc',
          medium: '#f0eee6',
          light: '#faf9f5'
        },
        book: {
          cloth: '#cc785c',
          clothLight: '#d2886f'
        },
        kraft: {
          DEFAULT: '#d4a27f',
          light: '#daaf91'
        },
        clay: '#d97757',
        lilac: '#8989de',
        lilypad: '#7ebf8e',
        manilla: {
          DEFAULT: '#ebdbbc',
          light: '#f1e6d0'
        },
        eggshell: '#f6f1eb',
        focus: '#61aaf2',
        error: '#bf4d43',
        dark: '#0f0f0e',
        light: '#fff'
      },
      screens: {
        'xs': '0px',
        's': '700px',
        'm': '1250px',
        'l': '1920px',
        'xl': '2160px'
      }
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
          "primary": "#d97757", // clay
          "primary-focus": "#cc785c", // book-cloth
          "primary-content": "#faf9f5", // ivory-light
          "secondary": "#7ebf8e", // lilypad
          "secondary-focus": "#5e5d59", // slate-light
          "secondary-content": "#faf9f5", // ivory-light
          "accent": "#8989de", // lilac
          "accent-focus": "#5e5d59", // slate-light
          "accent-content": "#faf9f5", // ivory-light
          "neutral": "#3d3d3a", // slate-medium
          "neutral-focus": "#141413", // slate-dark
          "neutral-content": "#f0eee6", // ivory-medium
          "base-100": "#faf9f5", // ivory-light
          "base-200": "#f0eee6", // ivory-medium
          "base-300": "#e8e6dc", // ivory-dark
          "base-content": "#141413", // slate-dark
          "info": "#61aaf2", // focus
          "success": "#7ebf8e", // lilypad
          "warning": "#d4a27f", // kraft
          "error": "#bf4d43", // error
          
          // Custom variables
          "--book-cloth": "#cc785c",
          "--kraft": "#d4a27f",
          "--manilla": "#ebdbbc",
          
          // Border radius
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "1rem",
        },
      },
    ],
    darkTheme: "custom-dark", // Optional dark variant
  },
}