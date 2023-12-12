/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '1280px'
    },
    extend: {
      container: {
        // Set the maximum width of the container for different breakpoints
        screens: {
          '2xl': '1280px',
          '4xl': '1280px', // Override 4xl to also have a max-width of 1280px
        },
      },
      screens: {
        '2xl': '1280px',
        '4xl': '2500px',
      },
      colors: {
        primary: colors.neutral[900],
        secondary: colors.yellow[600]
      },
      fontFamily: {
        aeonik: ['var(--font-aeonik)']
      },
    }
  },
  plugins: [],
}