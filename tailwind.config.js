import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cunia: ["Cunia", "sans-serif"],
        "comic-neue": ["Comic Neue", "cursive"],
        'raleway':['raleway', 'italic'],
      },
      colors: {
        fondo: "#00204a",
        fondoDetail: "#002550",
        celeste: "#00bbf0",
        claro: "#d9faff",
      },
    },
    flex: {
      custom25: "1 1 calc(25% - 1rem)",
    },
  },
  plugins: [nextui()],
};
