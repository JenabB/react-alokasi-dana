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
      disabled: "#868686",

      //category
      pribadi: "#F46339",
      umum: "#8E8E8E",
      keluarga: "#F1D8B9",
      tabungan: "#53D772",
      hiburan: "#D1434F",
      asmara: "#DC4C7A",
      pendidikan: "#F2D534",
      kesehatan: "#D1362F",
      pembangunan: "#753D15",
      makanan: "#F6AC37",
      ibadah: "#19493B",
      //need
      estetika: "#DCAAD6",
      cicilan: "#E97825",
      tagihan: "#7EB160",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
