/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: '2rem',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['Poppins', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    screens: {
      xss: '359px',
      xs: '368px',
      xmd: '454px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
