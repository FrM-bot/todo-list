/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Barlow', ...defaultTheme.fontFamily.sans]
      // },
      colors: {
        primary: 'rgba(var(--primary) / <alpha-value>)',
        'text-color': 'rgba(var(--text-color) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
        tertiary: 'rgba(var(--tertiary) / <alpha-value>)',
        'custom-pink': 'rgba(var(--custom-pink) / <alpha-value>)',
        'custom-cyan': 'rgba(var(--custom-cyan) / <alpha-value>)',
        gold: 'rgba(var(--gold) / <alpha-value>)',
        'bg-color': 'rgba(var(--bg-color) / <alpha-value>)'

      }
    }
  },
  plugins: [],
}