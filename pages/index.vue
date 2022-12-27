<script setup lang="ts">
import type { Work } from '~/types/work';

const { data: works } = await useFetch<Work[]>('/api/work');

const { gsap, Flip } = useGsap();
const animation = useCallbackAnimation();
const store = useStore();

function animateImage(e: MouseEvent) {
  const target = e.target as HTMLElement;
  let image = target.querySelector('img');

  if (!image) image = target.parentElement?.querySelector('img') || null;

  store.transitioningWithImage = true;

  animation.value = gsap.to(image, {
    delay: 0,
    onStart: () => {
      const state = Flip.getState(image, {
        props: 'width, height, transform',
      });

      image!.classList.add('fixed');

      Flip.from(state, {
        duration: 1,
        ease: 'expo.out',
      });
    },
  });
}
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header__title">Outpost inspired animations</h1>
    </header>

    <main class="main">
      <h2 class="main__title">Works</h2>

      <ul class="main__list">
        <li v-for="work in works" :key="work.name" class="main__list__item">
          <NuxtLink
            :to="`/work/${work.link}`"
            class="main__list__item__link"
            @click.native.capture="animateImage"
          >
            <p class="main__list__item__link__text">
              {{ work.name }}
            </p>

            <!-- not really appropriate alt attr... -->
            <img
              :src="work.image.src"
              :width="work.image.width"
              :height="work.image.height"
              :alt="`Photo by ${work.name}`"
              loading="lazy"
              class="main__list__item__link__img"
            />
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss">
.header {
  margin-bottom: 12rem;
  opacity: 0.9;

  &__title {
    font-size: 3.125rem;

    @media screen and (min-width: 624px) {
      font-size: 3.75rem;
    }
  }
}

.main {
  &__title {
    font-size: 3rem;
    padding-left: 1rem;

    @media screen and (min-width: 624px) {
      padding-left: 2rem;
    }
  }

  &__list {
    margin: 0;
    padding: 0;

    list-style-type: none;

    &__item {
      margin-bottom: 12rem;

      &__link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        text-decoration: none;
        color: currentColor;

        width: 100%;

        &:is(:hover, :focus-visible) {
          text-decoration: underline;
        }

        @media screen and (min-width: 624px) {
          flex-direction: row;
        }

        &__text {
          display: block;

          font-size: 2.25rem;
          text-align: center;
          text-transform: uppercase;

          margin: 0;

          @media screen and (min-width: 624px) {
            text-align: right;

            width: min-content;

            margin: auto 1.25rem -0.25rem 0;
          }
        }

        &__img {
          display: block;

          width: 100%;
          height: 100vw;
          max-height: 24rem;

          object-fit: cover;

          @media screen and (min-width: 624px) {
            max-width: 50%;
          }

          &.fixed {
            position: fixed;
            z-index: 10;
            top: 50%;
            left: 50%;

            width: 100vw;
            height: 100vw;

            max-width: 50vw;
            max-height: 50vh;

            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
</style>
