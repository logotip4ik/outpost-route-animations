<script setup lang="ts">
import '@master/css';

const { data: routes } = useFetch('/api/work');

function generateWorkPagePath(workName: string) {
  const encodedName = encodeURIComponent(workName);
  return `/work/${encodedName}`;
}
</script>

<template>
  <div>
    <header>
      <h1>Outpost inspired animations</h1>
    </header>

    <main>
      <h2>Works</h2>

      <ul>
        <li v-for="route in routes" :key="route.name">
          <NuxtLink :to="generateWorkPagePath(route.name)">
            <!-- not really appropriate alt attr... -->
            <img
              :src="route.image.src"
              :width="route.image.width"
              :height="route.image.height"
              :alt="`Photo by ${route.name}`"
              loading="lazy"
            />

            <p>{{ route.name }}</p>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<style></style>
