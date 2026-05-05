/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pearl — light premium base
        pearl: {
          DEFAULT: "#F7F4EE",
          50: "#FCFAF6",
          100: "#F7F4EE",
          200: "#EFE9DD",
          300: "#E2DAC8",
          400: "#CFC4AC",
        },
        // Petrol — deep, serious, executive
        petrol: {
          DEFAULT: "#0A2540",
          50: "#E8EEF4",
          100: "#C5D2E0",
          200: "#8FA5BD",
          300: "#5A7894",
          400: "#2D4A6A",
          500: "#0A2540",
          600: "#081E36",
          700: "#06182A",
          800: "#04111E",
          900: "#020910",
        },
        // Cyan — electric, modern energy
        cyan: {
          DEFAULT: "#00D4D8",
          400: "#33DDE0",
          500: "#00D4D8",
          600: "#00ADB0",
          700: "#008788",
        },
        // Copper — warm, premium accent
        copper: {
          DEFAULT: "#C97B47",
          400: "#D7956A",
          500: "#C97B47",
          600: "#A86434",
        },
        // Slate — neutral text grays  
        slate: {
          50: "#F4F2EE",
          100: "#E5E2DC",
          200: "#CCC8BF",
          300: "#9E9A91",
          400: "#6B675F",
          500: "#4A4842",
          600: "#2E2D29",
          700: "#1A1917",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Geist"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "tightest": "-0.04em",
        "tighter-2": "-0.025em",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
