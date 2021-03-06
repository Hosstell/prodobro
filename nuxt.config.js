import colors from 'vuetify/es5/util/colors'
export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,

    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/auth-mixin.js',
    '@/plugins/portal-vue.js',
    { src: '@/plugins/prism.js', mode: 'client' },
    { src: '@/plugins/vue-affix.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/eslint-module',  // grammar-nazi
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'cookie-universal-nuxt',
    'vue-yandex-maps/nuxt'
  ],

  oneSignal: {
    cdn: false,
    init: {
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  devModules: ['@nuxtjs/vuetify'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  router: {
    middleware: 'router-middleware'
  },
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-client-configs'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  // vuetify: {
  //   theme: {
  //     light: true,
  //     themes: {
  //       light: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },
  rootDir: 'frontend',
  env: {
    VK_CLIENT_ID: process.env.VK_CLIENT_ID
  },
  pageTransition: 'slide-y-reverse-transition',
  /*
   ** Build configuration
   */
  babel: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              [
                'prismjs',
                {
                  languages: [
                    'javascript',
                    'css',
                    'markup',
                    'python',
                    'vue',
                    'bash'
                  ],
                  plugins: ['line-numbers', 'show-language', 'autolinker'],
                  theme: 'twilight',
                  css: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    },
    vendor: ['vue-notification']
  }
}
