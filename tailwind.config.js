/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Vazir: "Vazir",
        VazirLight: "Vazir Light",
        VazirMedium: "Vazir Medium",
        VazirBold: "Vazir Bold",
      },
      colors: {
        bgWhite: "#0e132d",
        colorSecondary: "#cbcdd8",
        colorText: "#9498ac",
        backgroundColor: "#e9ecef",
        backgroundColorItem: "#0e132d",
        borderColor: "#242a48",
        blueColor: "#556fff",
        greenText: "#00C9A7",
        greenBg: "#00C9A71A",
        redText: "#ED4C78",
        redBg: "#ED4C781A",
        borderColorSecondary: "#0a0f27",
      }
    },
  },
  plugins: [],
}

