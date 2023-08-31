/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-page': 'calc(100% - 96px)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

