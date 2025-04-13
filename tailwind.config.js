/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "1rem", // Optional padding
      },
      maxWidth: {
        "fasco-container": "1280px", // Custom container width
      },
    },
  },
  plugins: [],
};
