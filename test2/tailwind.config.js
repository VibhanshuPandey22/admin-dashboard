/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#242424",
        bodyBlue: "#F8FAFC",
        // bodyBlue: "#E9EEF2",
        searchGreen: "#4E8353",
      },

      fontFamily: {
       poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}