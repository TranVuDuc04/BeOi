/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Winzer"', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
        brand: {
          blue: '#0000fe',
          gray: '#9f9e9c',
          yellow: '#ffff00',
          soft: '#fdf669',
          lime: '#cffc05',
        },
      },
    },
  },
  plugins: [],
}

