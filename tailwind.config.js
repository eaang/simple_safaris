module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    colors: {
      black: '#1a1915',
      brown: {
        lighter: '#aea88e',
        default: '#9c9780',
        dark: '#646152',
      },
      gray: {
        default: '#807f7d',
        dark: '#575446',
      },
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      display: ['proxima-nova'],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
