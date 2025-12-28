export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/fonts'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
      file: 'en.json',
    }, {
      code: 'si',
      name: 'සිංහල',
      file: 'si.json',
    }],
  },
  extends:['docus'],
  image: {
    provider: 'ipxStatic',
  }
})
