/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
            brand: {
              50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 500: '#3b82f6',
              600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a'
            },
            accent: {
              400: '#fbbf24', 500: '#f59e0b', 600: '#d97706'
            },
            teal: '#0799b2',
            tealDark: '#087d91',
            leaf: '#83bf35',
            ink: '#173f4a',
            mist: '#f3faf9'
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif', 'Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
