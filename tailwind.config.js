/** @type {import('tailwindcss').Config} */
const screens = {
  'xs': '320px',
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1400px',
  'xxl': '1920px',
}
const spacing = {
  '120px': '120px',
  '80px': '80px',
  '60px': '60px',
  '40px': '40px',
  '20px': '20px',
}
const colors = {
  'g-1': '#cad2c5',
  'g-2': '#84a98c',
  'g-3': '#52796f',
  'g-4': '#354f52',
  'g-5': '#2f3e46',
  'b-1': '#323031',
  'b-2': '#161b33',
}
module.exports = {
  content: ['./src/**/*.{js,vue}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
        lg: '60px',
        xl: '120px'
      },
      screens,
    },
    extend: {
      spacing: spacing,
      colors:colors,
    },
  },
  plugins: [],
}

