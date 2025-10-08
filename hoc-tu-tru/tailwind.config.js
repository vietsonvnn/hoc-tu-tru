/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kim: {
          light: '#f5f5f5',
          DEFAULT: '#d1d1d1',
          dark: '#9e9e9e',
        },
        moc: {
          light: '#81c784',
          DEFAULT: '#4caf50',
          dark: '#388e3c',
        },
        thuy: {
          light: '#4fc3f7',
          DEFAULT: '#03a9f4',
          dark: '#0277bd',
        },
        hoa: {
          light: '#ff7043',
          DEFAULT: '#f44336',
          dark: '#d32f2f',
        },
        tho: {
          light: '#ffb74d',
          DEFAULT: '#ff9800',
          dark: '#f57c00',
        },
      },
    },
  },
  plugins: [],
}
