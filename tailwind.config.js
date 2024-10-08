


const withMT = require("@material-tailwind/react/utils/withMT");  

module.exports = withMT({  
  content: [  
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
 theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],  // Replace 'Roboto' with your preferred font
      },
    },
  },
  plugins: [], 
});  
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

