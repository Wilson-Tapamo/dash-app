export default {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.{vue,js}',
      './pages/**/*.{vue,js}',
      './app.vue',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0ea5e9',
          secondary: '#facc15',
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#1e293b',
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }
  