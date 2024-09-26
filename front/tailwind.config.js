const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-40": {
      transform: "rotateX(40deg)",
    },
  });
});

const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    ".perspective-1000": {
      perspective: "1000px",
    },
  });
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [perspective, rotateX],
}