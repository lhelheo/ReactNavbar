/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '969px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max': '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max': '1536px'},
      // => @media (min-width: 1536px) { ... }
      'custom-sm': '970px',
      'custom-lg': '1123px',
    },
    extend: {},
  },
  plugins: [],
}

