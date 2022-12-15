/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      screens: {
        'des': '1440px',
      },
      fontFamily: {
        'BigShoulders': ['Big Shoulders Display'],
        'Outfit': ['Outfit'],
      },
    },

  },
  plugins: [],
}
