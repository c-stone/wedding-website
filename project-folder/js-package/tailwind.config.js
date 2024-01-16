import { fileURLToPath } from 'url';
// componentsDir = fileURLToPath(new URL('./components', import.meta.url));
let componentsDir = './components';

export default {
  content: [`${componentsDir}/**/*.{js,ts,jsx,tsx}`, `./components/`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
        display: ['Yeseva One', 'serif'],
      },
    },
  },
  plugins: [],
};
