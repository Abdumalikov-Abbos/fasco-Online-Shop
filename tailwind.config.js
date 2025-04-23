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
      colors: {
        midNight: "#484848",
        black: "#000000",
        white: "#FFFFFF",
        beige: "#EBE6DB",
        lightGray: "#E0E0E0",
        Gray: "#8A8A8A",
        powderGray: "#B1C5D4",
        lightWhite: "#F2F2F2",
        CoolBlue: "#8DB4D2",
        red: "#FF4646",
        midGray: "#DADADA",
        yellow: "#FFFF00",
        pinkRed: "#FF6C6C",
        pastelPink: "#FFD1DC",
        orange: "#FF7629",
        lemon: "#FFF06C",
        lettuce: "#9BFF6C",
        lightLettuce: "#6CFF9E",
        teaGreen: "#C1E1C1",
        sky: "#6CFFDC",
        blue: "#6CB9FF",
        lightBlue: "#6CF6FF",
        nightBlue: "#6CA7FF",
        navyBlue: "#063E66",
        ligthSky: "#5B86E5",
        nightPurple: "#6C7BFF",
        purple: "#8A6CFF",
        nightPink: "#B66CFF",
        pink: "#FC6CFF",
        coralPink: "#FF706B",
        pastelPink: "#FDEFEE",
        softPastelPink: "#F8CCCC",
        lavander: "#C6AEC7",
        coffee: "#836953",
        softCyan: "#BEDCE3",
      },
    },
  },
  plugins: [],
};
