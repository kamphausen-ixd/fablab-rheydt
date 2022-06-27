module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mgred: '#E42321',
        // mgblue: '#008FDA',
        // mgyellow: '#FBDC4F',
        primary: '#FBDC4F',
        secondary: '#252526',
        tertiary: '#E42321',
        quartary: '#008FDA'

      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [],
}
