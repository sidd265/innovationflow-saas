module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Blue
        secondary: '#64748B', // Gray
        accent: '#F59E0B', // Amber
        background: '#F3F4F6', // Light Gray
        text: '#111827', // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}; 