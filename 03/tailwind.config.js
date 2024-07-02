/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDEDED",
        secondary: "#FFFFFF",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ["responsive", "hover", "focus"],
  //   },
  // },
  plugins: [],
};
