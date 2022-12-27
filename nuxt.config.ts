export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],

  css: ['normalize.css/normalize.css'],

  build: {
    transpile: ['gsap'],
  },
});
