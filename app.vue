<script setup>
import '@fontsource/dm-sans/latin.css';

import DMSansLatinNormal from '@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2';

const overlay = ref({});

useHead(
  {
    link: [
      {
        rel: 'preload',
        as: 'font',
        href: DMSansLatinNormal,
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    ],
  },
  { mode: 'server' }
);
</script>

<template>
  <NuxtLayout>
    <Transition
      mode="out-in"
      :css="false"
      @enter="overlay.enterPageAnim"
      @leave="overlay.leavePageAnim"
    >
      <div :key="$route.fullPath">
        <!-- binding the `:transition` to nuxt-page breaks animation -->
        <!-- without wrapping into div, vue says that nuxt-page renders non root element -->
        <NuxtPage />
      </div>
    </Transition>

    <VFooter />

    <VOverlay ref="overlay" />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-rendering: geometricPrecision;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: grayscale;

  height: 100vh;
  margin: 0;
  padding: 0;
}

.wrapper {
  margin: 0 auto;
  padding: 16rem 0 8rem;

  width: 90%;
  max-width: 85ch;
}

@media (prefers-color-scheme: dark) {
  html {
    background: #222;
    color: white;
  }
}
</style>
