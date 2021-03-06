require("dotenv").config();
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:1337'
        : 'https://arvistrapi.studiosvito.com'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'baseTemplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/dotenv',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV === 'development' ? process.env.BASE_URL : 'https://arvistrapi.studiosvito.com/'
  },

  // strapi module configuration: https://strapi.nuxtjs.org/

  strapi: {
    entities: ['notes', 'users', 'mytemplates'],
    url: process.env.STRAPI_URL || 'https://arvistrapi.studiosvito.com/',
    key: 'whateverKey',
    expires: '31d',
    cookie: { sameSite: true, path: '/', },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/styles.scss'],
    theme: {
      options: { customProperties: true },
    }
  },

  // Image module configuration: https://image.nuxtjs.org/
  image: {
    providers: {
      strapi: {
        name: 'strapi',
        provider: require.resolve('./providers/strapi'),
        options: {
          baseURL: process.env.NODE_ENV === "development"
            ? "http://localhost:1337"
            : "https://arvistrapi.studiosvito.com",
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
