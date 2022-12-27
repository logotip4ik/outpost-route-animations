export default () => {
  const nuxtApp = useNuxtApp();

  return {
    gsap: nuxtApp.$gsap,
    flip: nuxtApp.$Flip,
  };
};
