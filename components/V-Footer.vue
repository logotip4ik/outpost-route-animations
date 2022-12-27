<template>
  <footer class="footer">
    <p class="footer__text">
      Inspired by
      <NuxtLink href="https://www.discoveroutpost.com">Outpost</NuxtLink>
    </p>
  </footer>
</template>

<style lang="scss">
.footer {
  width: 90%;
  max-width: 75ch;

  margin: 0 auto;
  padding: 1rem 2rem;

  &__text {
    font-size: 1.5rem;
    text-align: center;

    a {
      color: currentColor;
    }
  }
}
</style>
