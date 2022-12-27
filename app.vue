<script setup>
import '@fontsource/dm-sans/latin.css';

import DMSansLatinNormal from '@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2';

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
  <NuxtPage />
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

@media (prefers-color-scheme: dark) {
  html {
    background: #222;
    color: white;
  }
}
</style>
