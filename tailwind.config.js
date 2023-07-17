/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Pirata One', 'cursive']
    },
    extend: {
      animation: {
        'anime': 'animate 8s linear infinite',
      },
      keyframes: {
        animate: {
          '0%, 10%, 100%': { width: '0%' },
          '60%, 80%': { width: '100%' },
        }
      },
      colors: {
        'reddish': '#FF0000',
        'grayish': '#222'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
