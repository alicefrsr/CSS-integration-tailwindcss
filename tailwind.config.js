/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // './src/**/*.{html,js}'
  theme: {
    container: {
      center: 'true',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    extend: {
      colors: {
        brightRed: '#ff582e',
        brightRedLight: '#ff8161',
        brightRedSupLight: '#fdece7',
        darkBlue: '#242d52',
        darkGrayishBlue: '#9095a7',
        veryDarkBlue: '#1d1e25',
        veryPaleRed: '#ffefeb',
        veryLightGray: '#fafafa',
      },
    },
  },
  plugins: [],
};
