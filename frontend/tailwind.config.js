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
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        business: {
          "primary": "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",
          "secondary": "#f1f5f9",
          "secondary-focus": "#e2e8f0",
          "secondary-content": "#1e293b",
          "accent": "#10b981",
          "accent-focus": "#059669",
          "accent-content": "#ffffff",
          "neutral": "#64748b",
          "neutral-focus": "#475569",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "base-content": "#1e293b",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
}