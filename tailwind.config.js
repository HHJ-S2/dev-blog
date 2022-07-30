/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        xl: '1024px',
      },
      padding: '2rem',
    },
  },
  plugins: [],
}
