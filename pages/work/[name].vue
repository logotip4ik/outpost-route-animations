<script setup lang="ts">
const route = useRoute();
const { data: work } = useFetch(`/api/work/${route.params.name}`);
</script>

<template>
  <main>
    {{ work }}
  </main>
</template>
