/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Professional Navy Blue (from Adonay logo)
        primary: {
          50: '#f0f4f9',
          100: '#e1e9f3',
          200: '#c3d3e8',
          300: '#a5bddc',
          400: '#2B5A9D',
          500: '#2B5A9D',
          600: '#254a7e',
          700: '#1f3a5f',
          800: '#192a40',
          900: '#131d2a',
        },
        // Secondary: Vibrant Mint/Cyan (from Adonay branding)
        secondary: {
          50: '#e8fbf7',
          100: '#d1f7f0',
          200: '#a3efe1',
          300: '#75e7d1',
          400: '#00BFA5',
          500: '#00BFA5',
          600: '#009584',
          700: '#006b63',
          800: '#004d42',
          900: '#003322',
        },
        // Accent: Professional Navy to Light variations
        accent: {
          50: '#FAFBFF',
          100: '#F0F4F8',
          200: '#E8F7F5',
          300: '#D1F7F0',
          400: '#5A6A80',
          500: '#0E1C2F',
          600: '#09111F',
          700: '#060A14',
          800: '#030508',
          900: '#000000',
        },
      },
      fontFamily: {
        // Serif for elegant headings
        serif: ['Playfair Display', 'Garamond', 'Georgia', 'serif'],
        // Sans-serif for body text (clean, modern)
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}
