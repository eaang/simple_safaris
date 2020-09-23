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
          lighter: '#c3c2bb',
          default: '#807f7d',
          dark: '#575446',
        },
      },
      height: (theme) => ({
        'screen/25': '25vh',
        'screen/50': '50vh',
        'screen/75': '75vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      display: ['proxima-nova'],
    },
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
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
