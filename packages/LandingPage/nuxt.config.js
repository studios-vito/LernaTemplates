import defaultConfig from 'baseTemplate/nuxt.config'

export default {
    ...defaultConfig,
    head: {
      title: 'LandingPage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Bussiness descp' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  modules: [...defaultConfig.modules, 'baseTemplate/module'],
  build: {
    publicPath: 'https://arvi.studiosvito.com/templates/LandingPage'
  }
}
