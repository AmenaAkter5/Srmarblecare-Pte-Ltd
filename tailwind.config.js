const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT(
  {
    content: ["./src/**/*.{html,js}"],
    theme: {
      boxShadow: {
        none: "0 0 rgb(0, 0 / 0, 0)",
      },
      extend: {},
    },
    plugins: [],
  }
);
