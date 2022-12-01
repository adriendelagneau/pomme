/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#E7ECEE',
        'custom-black': '#18181B'
      },
      fontFamily: {
        body: ["Poppins, sans-serif"]
      }
    },
  },
  plugins: [],
}
