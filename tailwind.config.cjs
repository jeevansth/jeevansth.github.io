module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C5CE7'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#6C5CE7 0%, #00B4D8 100%)'
      }
    }
  },
  plugins: []
}
