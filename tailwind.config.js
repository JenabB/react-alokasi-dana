module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#0E4993",
      primaryLight: "#1BB2CB",
      formLabel: "#64758A",
      white: "#FFFFFF",
      input: "#F2F6F9",
      red: "#E23B34",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
