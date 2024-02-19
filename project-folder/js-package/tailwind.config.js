import { fileURLToPath } from 'url';
import tailwindForms from '@tailwindcss/forms';
// let componentsDir = fileURLToPath(new URL('./components', import.meta.url));

export default {
  content: [`./components/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif'],
        serif: ['Roboto Serif', 'serif'],
        display: ['Yeseva One', 'serif'],
      },
    },
  },
  plugins: [tailwindForms],
};
