/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    fontFamily : {
        'vazir' : 'vazir',
        'lalezar' : 'lalezar',
        'poppins' : 'poppins'
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {   
        colors: {
            'first-card' : '#9274EE',
            'secend-card' : '#FFAA12',
            'third-card' : '#FF8489',
        },
        boxShadow: {
            'news': '0 4px 20px 0 rgba(0, 0, 0, 0.200)',
          }
    },
  },
  plugins: [],
};
