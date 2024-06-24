import {nextui} from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'cunia': ['Cunia', 'sans-serif'],
        'comic-neue': ['Comic Neue', 'cursive'],
      }
    },
    flex:{
      'custom25': '1 1 calc(25% - 1rem)',
    },
  },
  plugins: [nextui()],
}