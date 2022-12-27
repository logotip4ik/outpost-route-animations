export default () => {
  const nuxtApp = useNuxtApp();

  return {
    gsap: nuxtApp.$gsap,
    Flip: nuxtApp.$Flip,
  };
};
