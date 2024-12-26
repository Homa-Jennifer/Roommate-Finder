/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#5BC3EB",
        secondary: "#212225",
        white: "#F1F1F1",
        grey: "#333333",
        mainBlack: "#070707",
      }
    },
  },
  plugins: [],
}