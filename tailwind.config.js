const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Combines .ts and .tsx from the first config with .js and .jsx from the second
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",  // Uses 'class' which is common in both configs
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "accounting-white": "#f8f9fa",
        'accounting-gray': '#d1d5db',  // Un gris doux
        'accounting-blue': '#dbeafe',  // Un bleu clair, calme et professionnel
        'accounting-green': '#d1fae5',
        'skyblue': '#87ceeb', // Un vert doux pour la sécurité financière
        'lightblue': '#b3d8ff',
        'deepblue': '#1e81b0'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "sky-gradient": "linear-gradient(to bottom, #b3d8ff, #1e81b0)",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%",
          },
        },
      },
    },
  },
  plugins: [nextui(), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // Utilisation de backticks
  );

  addBase({
    ":root": newVars,
  });
}
