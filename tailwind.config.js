/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sm1: "500px",
        md: "667px",
        md1: "768px",
        lg: "960px",
        lg1: "1024px",
        x1: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif", "#ffffff"],
      },
      boxShadow:{
        navbarShadow: "0 10px 30px -10px rgba(0,0,0,0.7)"
        //navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#1C2128",
        //bodyColor: "#121212",
        //bodyColor: "#2E3440",
        textTeal: "#8FBCBB",
        textLight: "#ECEFF4",
        textDark: "#D8DEE9",
        hoverColor: "rgba(143, 188, 187)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
 