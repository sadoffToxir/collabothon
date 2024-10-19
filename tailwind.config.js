module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      generalsans: ['General Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-background': '#1c1c1c',
        'accent-color': '#2a2a2a',
        'primary-accent': '#f1c40f',
        highlight: '#ffd700',
        'subtle-accent': '#e0e0e0',
        'primary-text': '#ffffff',
        'secondary-text': '#d1d1d1',
        'emphasis-text': '#f1c40f',
      },
    },
  },
  plugins: [],
};
