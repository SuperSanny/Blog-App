/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#132d46",
        secondary: "#01c38d",
        dark: {
          hard: "#191E29",
          soft: "#696e79",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "'sans-serif'"],
        roboto: ["'Roboto'", "'sans-serif'"],
      },
    },
  },
  plugins: [],
};