/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
        ubuntu: ["Ubuntu Condensed", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
}