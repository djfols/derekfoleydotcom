/** @type {import('tailwindcss').Config} */
export const purge = [
  './src/**/*.html',
  './src/**/*.tsx',
];
export const theme = {
  extend: {
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark': '#262225',
      'blue': '#29354B',
      'teal': '#4C8891',
      'light-green': '#A0C8C3',
      'light': '#ECEBE9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Consolas', 'serif'],
      jetBrains: ['Jetbrains Mono', 'monospace']
    }
  }
};

