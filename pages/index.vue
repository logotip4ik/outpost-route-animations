<script setup lang="ts">
const { data: routes } = useFetch('/api/work');

function generateWorkPagePath(workName: string) {
  const encodedName = encodeURIComponent(workName);
  return `/work/${encodedName}`;
}
</script>

<template>
  <div class="pt-64 pb-32 max-w-85ch w-90% m-auto">
    <header class="mb-48 op-90">
      <h1 class="text-size-6xl">Outpost inspired animations</h1>
    </header>

    <main>
      <h2 class="pl-4 text-size-5xl sm:pl-8">Works</h2>

      <ul class="list-none m-0 p-0">
        <li v-for="route in routes" :key="route.name" class="mb-12rem">
          <NuxtLink
            :to="generateWorkPagePath(route.name)"
            class="flex flex-col-reverse justify-center content-end w-full decoration-none text-current op-85 hover:op-100 transition sm:flex-row"
          >
            <p
              class="text-center block m-0 h-min uppercase text-size-4xl sm:(mt-auto mb--1.5 mr-5 w-min text-right)"
            >
              {{ route.name }}
            </p>

            <!-- not really appropriate alt attr... -->
            <img
              :src="route.image.src"
              :width="route.image.width"
              :height="route.image.height"
              :alt="`Photo by ${route.name}`"
              loading="lazy"
              class="block w-full max-h-24rem object-cover sm:(max-w-50%)"
            />
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<style></style>
