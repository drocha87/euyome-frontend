// import colors from 'vuetify/es5/util/colors';

export default {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },

  serverMiddleware: [],

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      prefix: 'og: https://ogp.me/ns#',
      lang: 'pt-BR',
    },
    titleTemplate: '%s - ' + 'Seu perfil virtual',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Euyo.me é seu perfil virtual, colocando você em contato direto com sua audiência. Compartilhe seu euyome no seu Instagram e em todas as suas redes socias e tenha suas impressões em um único lugar!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;900&family=Open+Sans:wght@400;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://127.0.0.1:3333/v1'
        : 'https://api.euyo.me/v1',
    // : 'https://test-backend.euyo.me/v1',

    common: {
      'Content-Type': 'application/json',
    },
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // defaultAssets: {
    //   icons: false,
    // },
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#21c25e',
          euyomeOrange: '#fe5d26',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
        },
      },
    },
  },

  /* sitemap configuration */
  sitemap: {
    hostname: 'https://euyo.me',
    gzip: true,
    routes: ['/euyome'],
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
