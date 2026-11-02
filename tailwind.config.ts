import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#0A0E17",
          900: "#101827",
          850: "#131C2E",
          800: "#17191F",
          700: "#1E2533",
          600: "#26364F",
        },
        electric: {
          DEFAULT: "#477DFF",
          light: "#9AB8FF",
          dark: "#2A5BD7",
          glow: "rgba(71, 125, 255, 0.25)",
        },
        editorial: {
          ivory: "#F1EDE4",
          cream: "#FAF8F5",
          warmBeige: "#D9D0C2",
          mutedBeige: "#E4DCD3",
          charcoal: "#272727",
          mutedBrown: "#9C8870",
          border: "#E2DACF",
        },
        city: {
          media: "#0EA5E9",
          bank: "#10B981",
          agri: "#84CC16",
          market: "#F97316",
          care: "#EC4899",
          events: "#A855F7",
          school: "#6366F1",
          niq: "#2563EB",
          uni: "#0284C7",
          fame: "#F59E0B",
          connect: "#14B8A6",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "electric-sm": "0 0 15px rgba(71, 125, 255, 0.15)",
        "electric-md": "0 0 25px rgba(71, 125, 255, 0.25)",
        "electric-lg": "0 0 45px rgba(71, 125, 255, 0.35)",
        "editorial-card": "0 4px 20px -2px rgba(39, 39, 39, 0.05)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "car-move-1": "carMove1 12s linear infinite",
        "car-move-2": "carMove2 16s linear infinite",
        "beacon-ping": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
