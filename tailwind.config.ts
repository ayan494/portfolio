import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05070C",
          50: "#F4F6FA",
          100: "#E3E8F1",
          200: "#C3CCDE",
          300: "#8D9AB8",
          400: "#5C6A8A",
          500: "#3A455E",
          600: "#242B3D",
          700: "#161B28",
          800: "#0D111C",
          900: "#080B12",
          950: "#05070C",
        },
        signal: {
          DEFAULT: "#3E7BFA",
          50: "#EEF3FF",
          100: "#DCE7FF",
          200: "#B3CAFF",
          300: "#82A9FF",
          400: "#5C8DFF",
          500: "#3E7BFA",
          600: "#2A5FE0",
          700: "#1E48B3",
          800: "#173886",
          900: "#122A61",
        },
        ion: "#8B7CFF",
        frost: "#EAF0FB",
        mist: "#94A3BC",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(62,123,250,0.16) 0%, rgba(62,123,250,0) 65%)",
        "navy-gradient":
          "linear-gradient(180deg, #05070C 0%, #0A0F1E 45%, #0D1526 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(62,123,250,0.35)",
        "glow-sm": "0 0 20px rgba(62,123,250,0.25)",
        "glow-lg": "0 0 90px rgba(62,123,250,0.30)",
        glass: "0 8px 32px rgba(0,0,0,0.45)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 8s ease-in-out infinite 1.5s",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
