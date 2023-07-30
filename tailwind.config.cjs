const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--text-color)",
        inverted: "var(--bg-color)",
        secondary: "var(--bg-color)",
      },
    },
    fontFamily: {
      sans: ["Arial", [...defaultTheme.fontFamily.sans]],
      serif: ["Georgia", [...defaultTheme.fontFamily.serif]],
    },
  },
  plugins: [],
};
