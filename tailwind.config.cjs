/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css.scss}',
  ],
  theme: {
    extend: {
      width: {
        'full-screen': '100vw',
      },
      height: {
        'full-screen': '100vw',
      },
    },
  },
  plugins: [],
};
