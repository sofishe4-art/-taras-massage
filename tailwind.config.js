/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F4EE",
        sand: "#EDE5D8",
        beige: "#E3D7C6",
        taupe: "#B7A48C",
        clay: "#C29C7C",
        walnut: "#3A332C",
        charcoal: "#2A2622",
        ink: "#1F1B17",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest2: "-0.02em",
      },
      maxWidth: {
        page: "1400px",
      },
      borderRadius: {
        xl2: "24px",
        xl3: "32px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(42, 38, 34, 0.18)",
        card: "0 12px 32px -12px rgba(42, 38, 34, 0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.035)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        breathe: "breathe 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
