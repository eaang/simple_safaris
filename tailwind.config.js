module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        black: '#1a1915',
        beige: '#e4ddbb',
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
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      display: ['proxima-nova'],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    layers: ['components', 'utilities'],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    whitelist: [
      'asia-icon-up',
      'asia-icon-down',
      'asia-dropdown',
      'africa-icon-up',
      'africa-icon-down',
      'africa-dropdown',
    ],
  },
}
