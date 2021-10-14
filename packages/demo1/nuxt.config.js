import defaultConfig from 'baseTemplate/nuxt.config'

export default {
  ...defaultConfig,
  head: {
    title: 'demo1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'demo1 descp' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  modules: ['baseTemplate/module']
}
