/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    theme: {
      colors: {
        // Configure your color palette here
        gray: '#ff4d4d ',
        blue: '#66b7f8',
        red: '#ff4d4d',
        pink: '#ff4d4d',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

