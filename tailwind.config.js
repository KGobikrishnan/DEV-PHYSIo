/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A1C4B',
          yellow: '#FFD700',
          blue: '#4A89A7',
          lightblue: '#EEF6F9',
          darkblue: '#204B61',
          text: '#334155',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Poppins"', 'sans-serif'],
        logo: ['"Times New Roman"', 'serif']
      }
    },
  },
  plugins: [],
}