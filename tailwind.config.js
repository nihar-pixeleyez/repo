// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cerebri: ["Cerebri Sans", "sans-serif"],
      },
      colors: {
        transperent: "transperent",
        current: "currentColor",
        muted: "#94989a",
        white: "#ffffff",
        light: "#e2e6eb",
        black: "#323a46",
        purple: "#6a69f5",
        success: "#50cd89",
        danger: "#f1416c",
        warning: "#ffc700",
        info: "#009ef7",
        dark: "#151515",
        darklight: "#1F1F1F",
        darkborder: "#343331",
        darkmuted: "#767273",
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}