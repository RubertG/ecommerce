import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(-90deg, rgba(13,157,234,1) 0%, rgba(13,90,132,1) 100%)',
        'gradient-blue-light': 'linear-gradient(-90deg, rgba(240,248,255,1) 0%, rgba(200,222,241,1) 100%)',
        'gradient-red': 'linear-gradient(45deg, rgba(255,246,246,0) 0%, rgba(255,0,0,0.28) 100%)',
        'gradient-blue-transparent': 'linear-gradient(45deg, rgba(0,13,22,0.25) 0%, rgba(3,37,61,1) 100%)',
        'gradient-green': 'linear-gradient(-90deg, rgba(132,229,113,1) 0%, rgba(132,229,113,0.4) 100%)',
        'gradient-yellow': 'linear-gradient(90deg, rgba(252,255,130,0.1) 0%, rgba(254,255,183,1) 100%)',
        'gradient-principal': 'radial-gradient(circle, rgba(203,202,255,1) 0%, rgba(250,250,250,1) 35%)'
      },
      colors: {
        'placeholder-gray': '#676767',
        grey: '#E2E2E2',
        white: '#FFFFFF',
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
          50: {
            $type: 'color',
            $value: '#f0f8ff'
          },
          100: {
            $type: 'color',
            $value: '#e0f1fe'
          },
          200: {
            $type: 'color',
            $value: '#bae3fd'
          },
          300: {
            $type: 'color',
            $value: '#7ccefd'
          },
          400: {
            $type: 'color',
            $value: '#37b6f9'
          },
          500: {
            $type: 'color',
            $value: '#0d9dea'
          },
          600: {
            $type: 'color',
            $value: '#0179c2'
          },
          700: {
            $type: 'color',
            $value: '#0263a2'
          },
          800: {
            $type: 'color',
            $value: '#065486'
          },
          900: {
            $type: 'color',
            $value: '#0c466e'
          },
          950: {
            $type: 'color',
            $value: '#082d49'
          }
        }
      }
    }
  },
  plugins: []
}
export default config
