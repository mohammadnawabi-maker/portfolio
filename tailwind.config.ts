import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ultra-dark minimalist palette
        night: {
          950: "#060a12",
          900: "#090d16", // primary background
          800: "#0F172A", // surface / slate-900-ish
          700: "#1e293b",
          600: "#334155",
        },
        accent: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          indigo: "#818cf8",
          violet: "#a78bfa",
          purple: "#c084fc",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(129,140,248,0.15), transparent 60%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(34,211,238,0.35)",
        "glow-indigo": "0 0 32px rgba(129,140,248,0.4)",
        card: "0 8px 40px rgba(2,6,23,0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
