import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chai-brown": "var(--chai-brown)",
        cream: "var(--cream)",
        terracotta: "var(--terracotta)",
        "muted-gold": "var(--muted-gold)",
        charcoal: "var(--charcoal)",
        "warm-white": "var(--warm-white)",
      },
      fontFamily: {
        brand: ["var(--font-brand)"],
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-up-slow": "fadeUp 0.9s ease forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
