/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./index.html"],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
  plugins: [],
}
}
