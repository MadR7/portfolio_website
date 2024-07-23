/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'dark-intro': "#0b1125",
        'dark-about': "#183059",
        'dark-projects': "#0f1c42",
        'dark-skills': "#183059",
        'dark-contact': "#0b1125",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
  