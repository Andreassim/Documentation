/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/**/*{html,js}",
    "./public/*{html,js}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
