module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: '#824F8E',
            back: '#EEE9E9'
          },
          yellow: {
            light: '#E0A82E',
            dark: '#9E4545'
          }
        }
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.125rem',
      }
    },
    screens: {
      xs: "400px",
      tiny: "500px",
      sm: "648px",
      md: "764px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1680px"
    }
  },
  plugins: [],
}
