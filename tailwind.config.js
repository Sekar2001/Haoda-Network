// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra-petch': ['Chakra Petch', 'sans-serif'], 
        'inter': ['Inter', 'sans-serif'], // Define the font family
      },
    },
  },
  plugins: [],
}