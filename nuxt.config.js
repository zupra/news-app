const env = require('dotenv').config()
console.log(env)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
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
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
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
  css: [{ src: '~assets/milligram.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/click-outside'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */

  // '@nuxtjs/apollo',
  modules: ['@nuxtjs/auth', '@nuxtjs/axios'],

  axios: {
    baseURL: process.env.API_URL
  },

  /*
  apollo: {
    tokenName: 'auth._token.local',
    authenticationType: '',
    clientConfigs: {
      default: {
        httpEndpoint: '',
        httpLinkOptions: {
          includeExtensions: true
        }
      }
    }
  },
  */

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: false,
          logout: false
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
