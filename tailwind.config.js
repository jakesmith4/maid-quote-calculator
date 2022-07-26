/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['Poppins', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [],
};
