// Внимание!!! если ты читаешь это сообщение, значит за работу мне не заплатили, подумай, стоит ли тебе тратить свое время на это //
// но если все же решил доделать, проси четкое тз у заказчика фантазия расширяется каждый день//
export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hamiliya',
    script: [{src: "https://checkout.cloudpayments.ru/checkout.js"}],
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
    '@/assets/css/style.css'
      ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: 'Bearer'
        },
        user:{
          property: 'user'
        },
        endpoints: {
          login: { url: 'https://api.hamiliya.space/authorization', method: 'post'},
          logout: true,
          user: false,
        },
        autoLogout: true
      }
    }
  },
}
