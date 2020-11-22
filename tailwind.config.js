module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translatex(2%)" },
          "100%": { transform: "translatex(-40.415%)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(270deg)" },
        },
        colors: {
          "0%": { stroke: "#805ad5" },
          "25%": { stroke: "#b794f4" },
          "50%": { stroke: "#e9d8fd" },
          "75%": { stroke: "#b794f4" },
          "100%": { stroke: "#805ad5" },
        },
        dash: {
          "0%": {strokeDashoffset: "187" },
          "50%": {strokeDashoffset: "46.75",
            transform:"rotate(135deg)"},
          "100%": {strokeDashoffset: "187",
          transform:"rotate(450deg)"},
        }
      },
      animation: {
        scroll: "scroll 120s infinite linear normal",
        spin: "spin 1.3s linear infinite",
        colors: "colors 4s ease-in-out infinite",
        dash: "dash 1.3s ease-in-out infinite",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    // allows for hover effects
    visibility: ["group-hover"],
  },
  plugins: [],
};
