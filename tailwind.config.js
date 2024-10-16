/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontFamily: {
        sansita: ["Sansita", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
      },
    },
  },
  plugins: [],
};
