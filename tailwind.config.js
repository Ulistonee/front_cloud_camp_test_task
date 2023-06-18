/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansInterface': ["SB Sans Interface", 'sans-serif'],
      },
      colors: {
        primary: '#5558FA',
        buttonBlue: '#5558FA',
        blueLight: '#D5E4F7',
        folderGrey: '#CCCCCC',
        contactColor: '#5558FA',
        borderLightGrey: '#00000014',
        bgForSteps: '#00000014',
        bgForCircleSteps: '#A6A6A6',
        buttonBorderBlue: '#5558FA'
      }
    },
  },
  plugins: [],
}

