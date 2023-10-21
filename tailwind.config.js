/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#F1F1F6",
          dark: "#d1d1ba",
        },
        onPrimary: {
          main: "#1F2937",
          light: "#d9e7f7",
        },
        secondary: {
          main: "#FDE047",
          dark: "#BF8600",
        },
      },
      screens: {
        "6xl": "1150px",
      },
    },
  },
  plugins: [],
};
