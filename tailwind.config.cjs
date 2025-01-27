module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "sm-phone": { min: "585px", max: "641px" },
        "sm-small": { min: "550px", max: "585px" },
        "sm-smaller": { min: "500px", max: "550px" },
        "sm-medium": { min: "450px", max: "500px" },
        "sm-tablet": { min: "500px", max: "641px" },
        "md-tablet": { min: "641px", max: "1024px" },
        "md-desktop": { min: "1024px", max: "1280px" },
        "lg-desktop": { min: "1280px", max: "2000x" },
        "xl-desktop": { min: "1516px", max: "2000px" },
      },
      spacing: {
        "0.85%": "0.85%",
        "0.9%": "0.9%",
        "2%": "2%",
        "3%": "3%",
        "5%": "5%",
        "8%": "8%",
        "7.2%": "7.2%",
        "10%": "10%",
        "14%": "14%",
        "1%": "1%",
        "28%": "28%",
        "22%": "22%",
        "18%": "18%",
        "16%": "16%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "26%": "26%",
        "27%": "27%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "70%": "70%",
        "90%": "90%",
      },
      height: {
        600: "37.5rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
