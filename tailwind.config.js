/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: "Unbounded",
        garamond: "EB Garamond",
        poppins: "Poppins"
      },
      colors: {
        background: "#fff",
        primary: "#000",
        secondary: "#005731"
      }
    },
  },
  plugins: [],
}
