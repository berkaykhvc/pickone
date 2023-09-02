/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: '479px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        'navcolor': '#090b13',
        'regal-blue': 'rgb(10, 11, 12)',
      },
    },
  },
  plugins: [],
}

