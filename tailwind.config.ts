import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#E5E5E5",
        muted: "#8A8A8A",
        border: "rgba(255,255,255,0.08)",
        surface: "#111111",
        secondary: "#0A0A0A",
        orange: {
          DEFAULT: "#F8B233",
          light: "#FFC14D",
          glow: "rgba(248,178,51,0.25)",
        },
        silver: {
          DEFAULT: "#C8C8C8",
          light: "#E5E5E5",
          dark: "#8A8A8A",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "SF Pro Display",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      boxShadow: {
        "orange-glow": "0 0 30px rgba(248,178,51,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
