<script setup lang="ts">
import type { Work } from '~/types/work';

const route = useRoute();

const { data: work } = await useFetch<Work>(`/api/work/${route.params.name}`);

const image = ref<HTMLElement | null>(null);
const store = useStore();
const { gsap } = useGsap();
const isServer = !!useNuxtApp().ssrContext;

definePageMeta({
  middleware(to, from) {
    const isInitialRoute = to.path === from.path;

    to.meta.pageTransition = {};
    to.meta.pageTransition.css = false;

    const { gsap, Flip } = useGsap();
    const callbackAnimation = useCallbackAnimation();
    const store = useStore();

    if (!isInitialRoute && store.transitioningWithImage) {
      to.meta.pageTransition.onEnter = () => {
        store.transitioningWithImage = false;

        callbackAnimation.value = gsap.to(null, {
          delay: 0,
          onStart: () => {
            nextTick(() => {
              const image = document.querySelector('img[data-animating-image]');

              const state = Flip.getState(image, {
                props: 'width, height, transform',
              });

              image?.classList.remove('fixed');

              Flip.from(state, {
                duration: 1,
                ease: 'expo.out',
              });
            });
          },
        });
      };
    }
  },
});

onMounted(() => {
  gsap.set(image.value, { position: 'static', zIndex: 0, delay: 1.5 });
});

useHead({
  title: () => `${work.value?.name} - Route Animations`,
});
</script>

<template>
  <div class="wrapper">
    <header class="work-header">
      <h1 class="work-header__title">{{ work!.name }}</h1>

      <img
        ref="image"
        data-animating-image
        :src="work!.image.src"
        :width="work!.image.width"
        :height="work!.image.height"
        :alt="`Photo by ${work!.name}`"
        :class="[
          'work-header__img',
          { fixed: !isServer && store.transitioningWithImage },
        ]"
        loading="lazy"
      />
    </header>

    <main class="main">
      <p v-for="text in work!.text" class="main__text">
        {{ text }}
      </p>
    </main>
  </div>
</template>

<style lang="scss">
.work-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 9rem;

  &__title {
    font-size: 3.75rem;

    margin-bottom: 10rem;
  }

  &__img {
    display: block;

    align-self: flex-end;

    position: relative;
    z-index: 10;

    width: 100%;
    height: 60vh;

    max-width: 15rem;
    max-height: 45rem;

    object-fit: cover;

    @media screen and (min-width: 654px) {
      max-width: 20rem;
      max-height: 15rem;
    }

    @media screen and (min-width: 1024px) {
      max-width: 45rem;
      max-height: 25rem;
    }

    &.fixed {
      position: fixed;
      z-index: 10;
      top: 50%;
      left: 50%;

      width: 100vw;
      height: 100vh;

      max-width: 50vw;
      max-height: 50vh;

      transform: translate(-50%, -50%);
    }
  }
}

.main {
  &__text {
    font-size: 1.25rem;

    margin-bottom: 6rem;
  }
}
</style>
