/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cascadia: ["Cascadia Code", "monospace"],
        warpen: ['"Warpen"', "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 50s linear infinite",
        "loop-scroll2": "loop-scroll2 7s linear infinite",
        "loop-scroll-reverse2": "loop-scroll-reverse2 7s linear infinite",
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "loop-scroll2": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "loop-scroll-reverse2": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#FC874A rgba(255, 255, 255, 0.2)",
        },
        ".scrollbar-thin-light": {
          scrollbarWidth: "thin",
          scrollbarColor: "#FC874A rgba(255, 255, 255, 0.2)",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.2)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "20px", // This line defines border-radius
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
