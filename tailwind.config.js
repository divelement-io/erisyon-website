/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1440px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
        'pt-mono': ['PT Mono, monoscape'],
      },
      colors: {
        'e-black': '#000',
        'e-vivid-orange': '#FF4B36',
        'e-mid-orange': '#FF6836',
        'e-orange': '#FF8437',
        'e-pale-orange': '#FCB684',
        'e-nav-black': 'rgba(0,0,0, 0.5)',
        'e-nav-white': 'rgba(255,255,255, 0.5)',
        'e-dark-grey': '#706168',
        'e-light-grey': '#CCCCCC',
      },
      dropShadow: {
        '3xl': '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
