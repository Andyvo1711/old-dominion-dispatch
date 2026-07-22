import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16264B",
          50: "#EEF1F7",
          100: "#D6DCEA",
          400: "#33487A",
          600: "#223868",
          700: "#16264B",
          800: "#101B37",
          900: "#0A1223",
        },
        brick: {
          DEFAULT: "#7C2836",
          50: "#F7E9EA",
          100: "#EACBCD",
          400: "#9B3A48",
          600: "#7C2836",
          700: "#611F2A",
          900: "#3B131A",
        },
        brass: {
          DEFAULT: "#B08D57",
          100: "#EFE3CC",
          300: "#D3B683",
          500: "#B08D57",
          700: "#8A6C3F",
        },
        cream: {
          DEFAULT: "#F6F0E4",
          50: "#FBF8F1",
          100: "#F6F0E4",
          200: "#EDE3CE",
        },
        ink: "#251F1A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        utility: ["var(--font-utility)", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "ledger-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(176,141,87,0.18) 44px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(37,31,26,0.06), 0 8px 24px -12px rgba(37,31,26,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
