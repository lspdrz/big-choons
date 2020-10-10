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
      },
      animation: {
        scroll: "scroll 120s infinite linear normal",
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
