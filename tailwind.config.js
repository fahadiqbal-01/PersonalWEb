/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "monospace"],
        secondary: ["Anton", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        orange: "#DB4444",
        yellow: "#FFAD33",
        lightBlue: "#b0e0ff",
      },
    },
  },
  plugins: [],
};
