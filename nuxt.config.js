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
    ctfAccess: process.env.CTF_CD_ACCESS_TOKEN
  },
  purgeCSS: {
    enabled: false
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Simple Safaris %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `사파리(Safari)라는 말은 동물을 구경하거나 사냥하는 여행을 의미합니다. 심플사파리는 고객님들이 대자연에서의 모험을 쉽고 편안하게 즐길 수 있도록 도와드리고 있습니다.`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/oqp4bki.css' },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
      }
    ]
  },
  router: {
    base: '/',
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      })

      const destinations = client
        .getEntries({
          content_type: 'destination'
        })
        .then((response) => {
          return response.items.map((entry) => {
            return {
              route: '/destinations/' + entry.fields.slug,
              payload: entry
            }
          })
        })

      const tripIdeas = client
        .getEntries({
          content_type: 'tripIdea'
        })
        .then((response) => {
          return response.items.map((entry) => {
            return {
              route: '/trips/' + entry.fields.slug,
              payload: entry
            }
          })
        })

      return Promise.all([destinations, tripIdeas]).then((values) => {
        return [...values[0], ...values[1]]
      })
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/sass/main.scss',
    'vue2-animate/dist/vue2-animate.min.css',
    'vue-image-lightbox/dist/vue-image-lightbox.min.css'
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
    exposeConfig: true
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vcalendar.js', mode: 'client' },
    { src: '~/plugins/vue-lazyload.js', mode: 'client' },
    '~/plugins/vuelidate.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
    extend(config) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
