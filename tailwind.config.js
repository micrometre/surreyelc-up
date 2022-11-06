/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    ],
    darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require("flowbite/plugin"),

    require('@tailwindcss/aspect-ratio')
  ],
}
