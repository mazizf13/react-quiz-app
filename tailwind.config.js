// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         urbanist: ["Urbanist", "sans-serif"],
//         alfa: ["Alfa Slab One", "sans-serif"],
//       },
//     },
//   },
//   variants: {
//     fill: ["hover", "focus"],
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#14b8a6",
      secondary: "#0b3f5e",
      dark: "#0f172a",
    },
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
