/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    fontFamily: {
      sans: ['Inter', 'Graphik', 'sans-serif'],
      serif: ['Inter', 'Merriweather', 'serif'],
    },
    extend: {},
  },

  plugins: [],
};
