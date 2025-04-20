/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    extend: {
     colors:{
      back:'#02042A',
      navy:'#181C2E'
     },
    },
  },
  plugins: [],
};
