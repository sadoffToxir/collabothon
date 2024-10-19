module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC72C',       // Yellow - used for highlights and buttons
        'primary-dark': '#002f3f', // Dark Blue - used for navbar and other key elements
        'primary-light': '#FFFFFF', // White - general background color
        'text-primary': '#002C40',  // Dark grey/black for primary text
        'text-secondary': '#52616A', // Grey for secondary text
        'text-light': '#FFFFFF',     // White text (e.g., on buttons)
        'bg-primary': '#eaf5eb',    // Light grey for general background'
        'bg-secondary': '#E9ECEF',  // Lighter grey for card backgrounds
        'bg-hover': '#D6D8DA',      // Hover state for cards or buttons
        'border-color': '#D3D6DA',  // Light grey for borders
        'accent-success': '#00B41E', // Green for success indicators
        'accent-danger': '#D9534F',  // Red for error/danger indicators
        'accent-warning': '#FFBC00', // Orange/yellow for warning indicators
        'shadow-color': 'rgba(0, 0, 0, 0.1)', // Shadow for cards
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Custom shadow for cards
      },
    },
  },
  plugins: [],
};
