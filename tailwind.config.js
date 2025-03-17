/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,jsx,ts,tsx}', // Убедитесь, что пути к вашим файлам указаны правильно
    ],
    theme: {
      extend: {
        colors: {
          // Добавляем свои цвета
          'primary': '#3490dc', // Синий
          'secondary': '#ffed4a', // Жёлтый
          'danger': '#e3342f', // Красный
          'custom-gray': '#f5f5f5', // Серый
        },
      },
    },
    plugins: [],
  };