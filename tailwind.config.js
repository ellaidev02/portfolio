/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#111111', // Replace with your primary color
        secondary: '#1A1A1A', // Replace with your secondary color
        textPrimary:'#FFFFFF',
        textSecondary:"#999999",
        themeColor:'#FFD700',
        glassEffect:'#0F0F0F', //60%
        radius:'2xl'
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     borderColor: (theme) => ({
//       ...theme("colors"),
//       DEFAULT: theme("colors.gray.900", "currentColor"),
//     }),
//     extend: {
//       boxShadow: {
//         custom:
//           "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)",
//       },
//     },
//     container: {
//       center: true,
//       screens: {
//         sm: "600px",
//         md: "728px",
//         lg: "984px",
//         xl: "1000px",
//         "2xl": "1000px",
//       },
//     },
//   },
//   plugins: [],
// };
