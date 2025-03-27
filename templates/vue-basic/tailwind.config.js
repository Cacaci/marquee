/** @type {import('tailwindcss').Config} */
import toemPlugin from 'toem-tailwind-plugin'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.vue'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        sans: [
          'Barlow Condensed',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'Roboto Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#181617',
          foreground: '#000000',
          background: '#ffffff',
        },
        secondary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
          background: '#000000',
        },
        background: '#0344dc',
        foreground: '#fafafa',
        muted: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [
    toemPlugin({
      /* Optional */
      defaultBase: 16 /* Default value is: 16 */,
      autoBase: true,
    }),
  ],
}
