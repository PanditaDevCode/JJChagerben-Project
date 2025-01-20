/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      safelist: [
        "hidden", "block", "absolute", "top-full", "left-0", "text-white",
        "backdrop-blur-[5px]", "bg-RGBA1", "menu", "navbar", "menu-icon"
      ],

      screens: {
        'xxs': '320px',
        'xx': '390px',
        'xs': '420px',
        'sx': '500px',
        's': '540px',
        'x': '850px',
        'mx': '920px',
        'm': '1200px',
      },

      backgroundImage: {
        'BGHeader': "url('/src/assets/images/background.webp')",
        'BGRedes': "url('/src/assets/images/background-redes.webp')",
      },

      spacing: {
        '110vh': '110vh',
      },

      zIndex: {
        '2': '2',
        '90': '90',
        '999': '999',
        '1000': '1000',
        '9999': '9999',
        '10000': '10000',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      margin: {
        '-90px': '-90px',
      },

      boxShadow: {
        'BX1': '0 0 30px rgba(190, 190, 190, 0.8), 0 0 40px rgba(131, 131, 131, 0.6), 0 0 50px rgba(102, 102, 102, 0.4), 0 0 60px rgba(94, 94, 94, 0.4)',
      },

      colors: {
        'RGBA1': 'rgba(0, 0, 0, 0.8)',
      }

    },
  },
  plugins: [],
}