/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        abc: ["Plus Jakarta Sans", "sans-serif"]
      }, 
      colors: {
        primary: "#01498C",
        accent: "#FC6008", 
        primaryText: "#2E73B2"
      }
    },
  },
  plugins: [],
  darkMode: "class",
}