import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'gray-custom': '0px 0px 8px 1px rgba(153,153,153,0.1)',
        'card-custom': '0px 0px 12px -6px rgba(0,0,0,0.4)',
        'red-custom': '0px 0px 10px 2px rgb(248,113,113,0.3)',
        'blue-custom': '0px 0px 10px 2px rgba(13,157,234,0.4)'
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(-90deg, rgba(13,157,234,1) 0%, rgba(13,90,132,1) 100%)',
        'gradient-blue-light': 'linear-gradient(-90deg, rgba(240,248,255,1) 0%, rgba(200,222,241,1) 100%)',
        'gradient-red': 'linear-gradient(90deg, #a90f0f 0%, rgb(128, 11, 0) 100%)',
        'gradient-red-light': 'linear-gradient(45deg, rgb(250, 250, 250, 0) 0%, #fbbdbd 100%)',
        'gradient-blue-transparent': 'linear-gradient(45deg, rgba(0,13,22,0.25) 0%, rgba(3,37,61,1) 100%)',
        'gradient-green': 'linear-gradient(-90deg, rgba(132,229,113,1) 0%, rgba(132,229,113,0.4) 100%)',
        'gradient-yellow': 'linear-gradient(90deg, rgba(252,255,130,0.1) 0%, rgba(254,255,183,1) 100%)',
        'gradient-principal': 'radial-gradient(circle, rgba(203,202,255,0.5) 0%, rgba(250,250,250,1) 35%)',
        'gradient-gray': 'linear-gradient(180deg, rgba(32,32,32,0.85) 0%, rgba(0,212,255,0) 100%)'
      },
      colors: {
        'placeholder-gray': '#676767',
        'principal-white': 'rgba(250,250,250,1)',
        'gray-custom': '#E2E2E2',
        'white-custom': '#FFFFFF',
        'text-gray': '#505050',
        'cards-dark': '#011624',
        'dodger-blue-600': '#0079D2',
        'dodger-blue-800': '#00518C',
        'dodger-blue-900': '#074473',
        'dodger-blue-950': '#000D16',
        'bright-red-50': '#FFF1F1',
        'bright-red-800': '#A90F0F',
        'malachite-300': '#84E571',
        'malachite-900': '#1E4D1A',
        'malachite-950': '#0A2A09',
        'ripe-lemon-200': '#F9F58F',
        'ripe-lemon-400': '#F1D922',
        'ripe-lemon-500': '#E1C011',
        'ripe-lemon-950': '#402508',
        'mercury-50': '#F7F7F7',
        'mercury-100': '#EDEDED',
        'mercury-200': '#E2E2E2',
        'mercury-300': '#C8C8C8',
        'mercury-800': '#676767',
        'mercury-900': '#545454',
        'mercury-950': '#363636',
        Lochmara: {
          50: '#f0f8ff',
          100: '#e0f1fe',
          200: '#bae3fd',
          300: '#7ccefd',
          400: '#37b6f9',
          500: '#0d9dea',
          600: '#0179c2',
          700: '#0263a2',
          800: '#065486',
          900: '#0c466e',
          950: '#082d49'
        }
      }
    }
  },
  plugins: []
}
export default config
