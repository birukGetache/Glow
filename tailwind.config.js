/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '100vh': '100vh',
      },
      fontFamily: {
        Playfair: ['Playfair', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
