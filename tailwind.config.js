/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

