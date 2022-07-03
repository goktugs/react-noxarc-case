module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/src/assets/bgAll.png')",
        'bg-bgPodc1': "url('/src/assets/bgPodc1.png')",
        'bg-bgPodc2': "url('/src/assets/bgPodc2.png')",
      },
      fontFamily: {
        roboto: ['"Roboto", "sans-serif";'],
      },
      boxShadow: {
        'button-shadow': '0px 5px 50px rgba(51, 105, 255, 0.7)',
      },
    },
  },
  plugins: [],
};
