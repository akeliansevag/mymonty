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
      screens: {
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
        '6xl': '2688px',
        '7xl': '3072px',
        '8xl': '3584px',
        '9xl': '4096px',
        'fhd': '1920px',
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