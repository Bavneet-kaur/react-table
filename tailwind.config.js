/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  spacing: {
    1: "8px",
    2: "12px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "48px",
  },
  plugins: [],
};
