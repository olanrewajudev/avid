/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blake":"#232629"
      },
      backgroundImage: {
        "number": "url('/src/assets/images/numbers-background.jpg')"
      }
    },
  },
  plugins: [],
}