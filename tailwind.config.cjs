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
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
        },
      },
      spacing: {
        contentH: "calc(100vh - var(--header-h))",
      },
    },
    fontFamily: {
      sans: ["Arial", [...defaultTheme.fontFamily.sans]],
      serif: ["Georgia", [...defaultTheme.fontFamily.serif]],
    },
  },
  plugins: [],
};
