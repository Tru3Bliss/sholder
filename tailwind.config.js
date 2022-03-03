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
          },
          black: {
            DEFAULT: '#1C2940'
          }
        }
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.125rem',
      },
      borderRadius: {
        "normal": "50px",
        "large": "140px"
      },
      maxWidth: {
        "container": "1440px"
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        7.5: '30px',
        8: '2rem',
        8.5: '34px',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        12.5: '55px',
        13: '50px',
        14: '3.5rem',
        15: '62px',
        16: '4rem',
        17: '4.375rem',
        18: '78px',
        20: '5rem',
        22: '90px',
        24: '6rem',
        25: '104px',
        28: '7rem',
        29: '7.5rem',
        32: '8rem',
        33: '130px',
        36: '9rem',
        37: '155px',
        40: '10rem',
        44: '11rem',
        45: '11.25rem',
        46: '11.875rem',
        48: '12rem',
        50: '200px',
        52: '13rem',
        53: '210px',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        73: '290px',
        80: '20rem',
        81: '347px',
        96: '24rem',
        720: '45rem',
        1040: '65rem'
      },
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
