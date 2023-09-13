/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../image/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../image/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../image/yosemite.jpg')",
        'LA': "url('../image/LA.jpg')",
        'seattle': "url('../image/seattle.jpg')",
        'new_york': "url('../image/new_york.jpg')",
        'norway': "url('../image/image/norway.jpg')",
        'sydney': "url('../image/sydney.jpg')",
        'miami': "url('../image/miami.jpg')",
        'switzerland': "url('../image/switzerland.jpg')",
        'bali': "url('../image/bali.jpg')",
        'norway': "url('../image/norway.jpg')",
        'chicago': "url('../image/chicago.jpg')",
        'europe': "url('../image/europe.jpg')",
        'iceland': "url('../image/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Monserrat:['Monserrat', 'sans-serif']
      }
    },
  },
  vairants: {},
  plugins: [],
}

