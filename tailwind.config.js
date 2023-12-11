/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme
        dark1: "#222831",
        dark2: "#393E46",
        primary: "#00ADB5",
        white: "#EEEEEE",

        // Light Theme
        light1: "#FFFFFF",
        light2: "#F2F2F2",

        darkText: "#333333",
      },
    },
    fontFamily:{
      oswald:['Oswald', "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
};
