import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        tallow: {
          '50': '#f7f7f5',
          '100': '#edede7',
          '200': '#dad9ce',
          '300': '#c2c1af',
          '400': '#a6a38c',
          '500': '#979278',
          '600': '#8a836c',
          '700': '#736c5b',
          '800': '#5f594d',
          '900': '#4e4a40',
          '950': '#292621',
        },
        cocoa: {
          '50': '#f5f4f1',
          '100': '#e6e3db',
          '200': '#cec8ba',
          '300': '#b2a792',
          '400': '#9c8c73',
          '500': '#8d7c65',
          '600': '#786756',
          '700': '#625146',
          '800': '#54463f',
          '900': '#4a3e39',
          '950': '#2f2623',
        },
      },
      animation: {
        'text-slide-3':
          'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes: {
        // Text sliding up animation
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
        // Marquee Animation
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
