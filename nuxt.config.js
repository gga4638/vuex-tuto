import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    host: "0.0.0.0",
    port: 4000,
    timing: false
  },
  head: {
    title: 'vuex-tuto',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/default.scss'],
  // styleResources
  styleResources: {
    scss: [
      '~/assets/css/variables.scss',
/*       '~/assets/css/default/display.scss',
      '~/assets/css/default/typography.scss',
      '~/assets/css/default/color.scss',
      '~/assets/css/default/spacing.scss',
      '~/assets/css/default/border.scss',
      '~/assets/css/default/shadow.scss', */
    ],
  },

  mode: 'spa',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/logger',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // debug : true,
    prefix: process.env.DOMAIN + '/proxy',
  },

  /**********/
  /* router */
  /**********/
  router: {
    middleware: [
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $              : "jquery",
        jQuery         : "jquery",
        "window.jQuery": "jquery"
      })
    ],
  },
}
