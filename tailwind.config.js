/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          primary: '#DC2626', // Professional Red
          dark: '#0F172A',    // Deep Slate
          accent: '#334155',  // Medium Slate
          light: '#F8FAFC'    // Off-white
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}