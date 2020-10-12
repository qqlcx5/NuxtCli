export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'saas',
    // at.alicdn.com/t/font_1884226_knb0qtogevc.js
    head: {
      script: [{ src: '//at.alicdn.com/t/font_1884226_knb0qtogevc.js' }],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css', '@/styles/custom.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui', '~/plugins/globalComponents/index.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-clipboard2',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { proxy: true },
  proxy: {
    '/api': {
      target: 'http://example.com',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  server: {
    port: 8000,
    // host: '0.0.0.0', // default: localhost
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}
