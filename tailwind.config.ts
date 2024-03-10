import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yelbutton': '#F9DC5C',
        'bgblue': '#4285F440',
        'bgyellow': '#FBBC0440',
        'bgred': '#EA433540'
      },
      screens: {
        'ipod': {'max': '500px'},
        'more': {'min': '501px'},
      
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'serif'],

      },
  
    },
  },
  plugins: [],
}
export default config
