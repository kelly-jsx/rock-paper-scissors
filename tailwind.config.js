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
        headerOutline: 'hsl(217, 16%, 45%)',
        paper: {
          primary: 'hsl(230, 89%, 62%)',
          secondary: 'hsl(230, 89%, 65%)'
        },
        scissors: {
          primary: 'hsl(39, 89%, 49%)',
          secondary: 'hsl(40, 84%, 53%)'
        },
        rock: {
          primary: 'hsl(349, 71%, 52%)',
          secondary: 'hsl(349, 70%, 56%)'
        }
      }
    }
  },
  plugins: []
}
