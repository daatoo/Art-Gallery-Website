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
      colors: {
        'DarkGrey': '#444444',
        'Gold': '#D5966C',
        'AlmostBlack': '#151515'
      },
    },

  },
  plugins: [],
}
