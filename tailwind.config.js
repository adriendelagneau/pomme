/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%':  { transform: 'translateY(0px)' },
          '1%': { transform: 'translateY(-0px)' },
          '4%': { transform: 'translateY(-40px)' },
          '7%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave2: {
          '0%':  { transform: 'translateY(0px)' },
          '2%': { transform: 'translateY(-0px)' },
          '5%': { transform: 'translateY(-40px)' },
          '8%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave3: {
          '0%':  { transform: 'translateY(0px)' },
          '3%': { transform: 'translateY(-0px)' },
          '6%': { transform: 'translateY(-40px)' },
          '9%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave4: {
          '0%':  { transform: 'translateY(0px)' },
          '4%': { transform: 'translateY(-0px)' },
          '7%': { transform: 'translateY(-40px)' },
          '10%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave5: {
          '0%':  { transform: 'translateY(0px)' },
          '5%': { transform: 'translateY(-0px)' },
          '8%': { transform: 'translateY(-40px)' },
          '11%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave6: {
          '0%':  { transform: 'translateY(0px)' },
          '6%': { transform: 'translateY(-0px)' },
          '9%': { transform: 'translateY(-40px)' },
          '12%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
        wave7: {
          '0%':  { transform: 'translateY(0px)' },
          '7%': { transform: 'translateY(-0px)' },
          '10%': { transform: 'translateY(-40px)' },
          '13%': { transform: 'translateY(-0px)' },
          '100%':  { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'wave': 'wave 7s linear infinite',
        'wave2': 'wave2 7s linear infinite',
        'wave3': 'wave3 7s linear infinite',
        'wave4': 'wave4 7s linear infinite',
        'wave5': 'wave5 7s linear infinite',
        'wave6': 'wave6 7s linear infinite',
        'wave7': 'wave7 7s linear infinite',
      },
      colors: {
        'custom-white': '#E7ECEE',
        'custom-black': '#18181B'
      },
      fontFamily: {
        body: ["Poppins, sans-serif"]
      },
     
    },
  },
  plugins: [],
}
