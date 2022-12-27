<script setup lang="ts">
defineExpose({ enterPageAnim, leavePageAnim });

const { gsap } = useGsap();

const overlay = ref<HTMLElement | null>(null);
const callbackAnimation = useCallbackAnimation();

function enterPageAnim(pageEl: HTMLElement, done: () => void) {
  const animationCopy = callbackAnimation.value;

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out', duration: 1 },
    onStart: () => {
      window.scrollTo(0, 0);
    },
    onComplete: () => {
      callbackAnimation.value = null;
      done();
    },
  });

  tl.fromTo(
    overlay.value,
    { top: 0, bottom: '0%' },
    { top: 0, bottom: '100%' }
  );

  if (animationCopy) tl.add(animationCopy, 0);
}

function leavePageAnim(pageEl: HTMLElement, done: () => void) {
  const animationCopy = callbackAnimation.value;

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out', duration: 1 },
    onComplete: () => {
      window.scrollTo(0, 0);

      callbackAnimation.value = null;
      done();
    },
  });

  tl.fromTo(
    overlay.value,
    { top: '100%', bottom: 0 },
    { top: '0%', bottom: 0 }
  );

  if (animationCopy) tl.add(animationCopy, 0);
}
</script>

<template>
  <div ref="overlay" class="overlay" />
</template>

<style lang="scss">
.overlay {
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: black;
}
</style>
