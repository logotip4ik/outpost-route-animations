<script setup lang="ts">
const route = useRoute();

const { data: work, error } = await useFetch(`/api/work/${route.params.name}`);

watch(error, (error) => {
  if (!error) return;

  showError(error);
});
</script>

<template>
  <div class="pt-64 pb-32 max-w-85ch w-90% m-auto">
    <header class="flex flex-col justify-between content-start mb-36 op-90">
      <h1 class="text-size-6xl mb-10rem">{{ work!.name }}</h1>

      <img
        :src="work!.image.src"
        :width="work!.image.width"
        :height="work!.image.height"
        :alt="`Photo by ${work!.name}`"
        class="self-end w-full max-w-65vw max-h-65vw object-cover sm:(max-w-50vw max-h-50vw) xl:(max-w-40rem max-h-40rem)"
      />
    </header>

    <main>
      <p v-for="text in work!.text" class="text-size-xl mb-24">
        {{ text }}
      </p>
    </main>
  </div>
</template>
