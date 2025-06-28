/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#255AF7", // 파란색 계열
        secondary: "#96E82C", // 연두색 계열
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        h0: ["3.75rem", "4.125rem"],
        h1: ["3rem", "3.25rem"],
        h2: ["2.25rem", "2.75rem"],
        h3: ["1.75rem", "2.125rem"],
        subtitle1: ["1.5rem", "1.875rem"],
        subtitle2: ["1.25rem", "1.5rem"],
        body1: ["1rem", "1.5rem"],
        body2: ["0.875rem", "1.25rem"],
        caption1: ["0.75rem", "0.875rem"],
      },
    },
  },
  plugins: [],
};
