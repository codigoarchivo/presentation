import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2f92b7',
        secondary: '#0f1035',
        tertiary: '#efedee',
      },
      boxShadow: {
        custom1: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        custom2: '2px 2px 1px -1px rgba(0, 0, 0, 0.2), 1px 0px 1px 0px rgba(0, 0, 0, 0.14), 3px 0px 3px 0px rgba(0, 0, 0, 0.12)',
        custom3: '0px -2px 1px -1px rgba(0, 0, 0, 0.2), 0px -1px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
