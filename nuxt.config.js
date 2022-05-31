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

  // winow.localStorage 쓰기위해서 mode: 'spa'를 사용함
  // 하지만 이 방법으로 로컬스토리지를 사용하는건 아닌거 같음
  // 의문점 해결: 완전히 이해 못함ㅋㅋㅋㅋㅋㅋ
  // 한 페이지를 나타내는 .vue 에서는 csr이기 때문에 localStorage 접근 가능
  // js에서 처음 로딩시 ssr로 작동하기 때문
  // 참조 https://nuxtjs.org/docs/concepts/server-side-rendering/
  //

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


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
