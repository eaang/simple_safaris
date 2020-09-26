const env = require('dotenv').config()

// eslint-disable-next-line nuxt/no-cjs-in-config
const contentful = require('contentful')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  env: env.parsed,
  publicRuntimeConfig: {
    mapboxToken: process.env.MAPBOX_TOKEN,
    ctfSpace: process.env.CTF_SPACE_ID,
    ctfAccess: process.env.CTF_CD_ACCESS_TOKEN,
  },
  purgeCSS: {
    enabled: false,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'simple_safaris',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/oqp4bki.css' },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css',
      },
    ],
  },
  router: {
    base: '/',
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN,
      })

      const destinations = client
        .getEntries({
          content_type: 'destination',
        })
        .then((response) => {
          return response.items.map((entry) => {
            return {
              route: '/destinations/' + entry.fields.slug,
              payload: entry,
            }
          })
        })

      const tripIdeas = client
        .getEntries({
          content_type: 'tripIdea',
        })
        .then((response) => {
          return response.items.map((entry) => {
            return {
              route: '/trips/' + entry.fields.slug,
              payload: entry,
            }
          })
        })

      return Promise.all([destinations, tripIdeas]).then((values) => {
        return [...values[0], ...values[1]]
      })
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/sass/main.scss',
    'vue2-animate/dist/vue2-animate.min.css',
    'vue-select/src/scss/vue-select.scss',
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
    exposeConfig: true,
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vcalendar.js', mode: 'client' },
    { src: '~/plugins/vselect.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          solid: ['faThumbsUp', 'faBars', 'faAngleRight', 'faCheck'],
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
    extend(config) {
      config.node = {
        fs: 'empty',
      }
    },
  },
}
