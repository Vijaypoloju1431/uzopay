

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  safelist: ['custom-border-animation'],
  theme: {
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgb(132 53 186 / 55%)",
        cyanBigShadow: "10px 10px 1000px 500px rgb(132 53 186 / 0.3)",
        cyanMediumShadow: "10px 10px 300px 150px rgb(120 53 186 / 0.5)",
        cyanSmallShadow: "65 75px 100px 20px rgba(138, 161, 233, 0.7)",
        voiletMediumShadow: "10px 10px 300px 150px rgb(120 53 186 / 0.5)",
        customboxshadow: '0px 4px 5px 0px rgba(0,0,0,0.75)',
        glow: "0 0 20px rgba(93, 95, 255, 0.5)",
      },
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
}

