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
        orange:{
          mainOrange: "#E49A49",
        }
      },
      padding:{
        '108px':"108px"
      },
      gridTemplateColumns:{
        "blog": "minmax(320px, 704px) minmax(320px, 392px)",
        "details": "minmax(320px, 808px) minmax(320px, 392px)"
      },
      gridTemplateRows:{
        "featuredBlog": ""
      },
      maxWidth:{
        "article": "808px"
      }
    },
    boxShadow: {
      "21l":
          "0px 8px 16px 0px rgba(28, 30, 34, 0.08), 0px 1px 2px 0px rgba(28, 30, 34, 0.08);",
      "3xl":
          "0px 12px 32px 0px rgba(28, 30, 34, 0.08), 0px 1px 2px 0px rgba(28, 30, 34, 0.04)",
    },
  },
  plugins: [],
};
