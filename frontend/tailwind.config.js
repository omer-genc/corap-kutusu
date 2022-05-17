module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      pink: '#fb2e86',
      'navy-blue': '#151875',
      'off-navy-blue': '#4376af',
      purple: '#7e33e0',
      'off-purple': '#a065b4',
      red: '#fa2546',
      blue: '#2f1ac4',
      'off-blue': '#151875',
      'sky-blue': '#f1f0ff',
      'pantone-purple': '#e0cbf5',
      white: '#ffffff',
      green: '#1ef90e',
      gray: '#8c8c8c',
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Lato', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
