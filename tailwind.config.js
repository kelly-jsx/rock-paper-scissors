/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1366px'
      },
      textColor: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)'
      },
      colors: {
        headerOutline: 'hsl(217, 16%, 45%)'
      }
    }
  },
  plugins: []
}
