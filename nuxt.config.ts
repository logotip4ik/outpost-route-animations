export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],

  css: ['@unocss/reset/normalize.css'],

  build: {
    transpile: ['gsap'],
  },
});
