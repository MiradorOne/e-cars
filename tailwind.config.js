module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        gray: {
          mainDark: "#2C2926",
        },
      },
    },
    boxShadow: {
      "3xl":
        "0px 12px 32px 0px rgba(28, 30, 34, 0.08), 0px 1px 2px 0px rgba(28, 30, 34, 0.04)",
    },
  },
  plugins: [],
};
