module.exports = {
  content: [
    "./*.php",
    "./templates/**/*.php",
    "./src/**/*.{js,jsx}",
    "./inc/**/*.php"
  ],
  plugins: [require("@tailwindcss/typography")]
}
