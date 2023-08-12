/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1Color: "#A3CEF1",
        blue2Color: "#6096BA",
        blue3Color: "#274C77",
        greyColor: "#8B8C89",
        whiteColor: "#E7ECEF",
        textColor: "#333",
      },
    },
  },
  plugins: [],
};
