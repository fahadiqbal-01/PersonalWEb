/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1700px",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "monospace"],
        secondary: ["Anton", "sans-serif"],
      },
      colors: {
        primary: "#FFFFFF",
        orange: "#DB4444",
        yellow: "#e0c75f",
        green:"#275344",
      },
    },
  },
  plugins: [],
};
