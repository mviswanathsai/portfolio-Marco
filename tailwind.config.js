/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "v-light-brown": "#E5E5CB",
        lbrown: "#D5CEA3",
        brown: "#3C2A21",
        "dark-brown": "#1A120B",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
        monts: ["Montserrat", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('/public/assets/person-1.png')", 
        person2: "url('/public/assets/person-2.png')",
        person3: "url('/public/assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};