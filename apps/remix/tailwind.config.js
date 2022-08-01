const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      gray: colors.zinc,
      accent: colors.blue,
      success: colors.emerald,
      info: colors.cyan,
      warning: colors.amber,
      danger: colors.red,
    },
    extend: {},
  },
  plugins: [],
};
