/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansInterface': ["SB Sans Interface", 'sans-serif'],
      },
      colors: {
        buttonBlue: '#5558FA',
        blueLight: '#D5E4F7',
        folderGrey: '#CCCCCC',
        contactColor: '#5558FA',
        borderLightGrey: '#00000014'
      }
    },
  },
  plugins: [],
}

