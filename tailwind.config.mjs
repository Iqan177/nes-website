/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pearl: { DEFAULT: "#F7F4EE", 50: "#FCFAF6", 100: "#F8F5EC", 200: "#F4F0E6", 300: "#ECE6D5" },
        petrol: { DEFAULT: "#0A2540", 50: "#E8EEF4", 200: "#8FA5BD", 400: "#2D4A6A", 500: "#0A2540", 600: "#081E36", 700: "#06182A", 800: "#04111E" },
        cyan: { DEFAULT: "#00D4D8", 400: "#33DDE0", 500: "#00D4D8", 600: "#00ADB0", 700: "#008788" },
        copper: { DEFAULT: "#C97B47", 500: "#C97B47" },
        slate: { 300: "#9E9A91", 400: "#6B675F", 500: "#4A4842", 700: "#1A1917" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Geist"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.04em", "tighter-2": "-0.025em" },
      animation: { "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
    },
  },
  plugins: [],
};
