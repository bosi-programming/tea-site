/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      green: '#1e2d2f',
      emerald: '#0d9263',
      pink: '#e791bf',
      peach: '#f7dba7',
      thulian: '#df6da9',
    },
    extend: {
      screens: {
        sm: '400px',
      },
    },
  },
  plugins: [],
};
