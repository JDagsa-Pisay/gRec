/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'plex': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

