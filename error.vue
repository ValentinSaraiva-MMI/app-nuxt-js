<template>
  <h1>
    ERROR <span>{{ error.statusCode }}</span>
  </h1>

  <button>
    <a href="/">retour</a>
  </button>

  <!-- 
    Route api 
    
    <button>
    <a :href="env.public.apiUrl">retour</a>
  </button> -->
</template>

<style lang="scss">
h1 {
  font-size: 35px;
  text-align: center;
}
</style>

<script setup>
const props = defineProps({
  error: Object,
});

const env = useRuntimeConfig();
</script>
