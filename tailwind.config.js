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
  },
  variants: {
    // allows for hover effects
    visibility: ["group-hover"],
  },
  plugins: [],
};
