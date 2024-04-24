/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'Title':["Inconsolata"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

