/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      chewy: ["Chewy", "system-ui"],
    },
    extend: {
      colors: {
        "primary-dark": "#2E7057",
        "primary-medium": "#04D200",
        "primary-light": "#B0FFAE",
        "neutral-light": "#FDFFFA",
        "neutral-light-gray": "#F2F2F2",
        "neutral-medium-gray": "#E3E3E3",
        "neutral-light-pink": "#FAD4D4",
        "neutral-dark-gray": "#BBBBBB",
        "accent-red-medium": "#B80303",
        "accent-red-dark": "#5B0404",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
