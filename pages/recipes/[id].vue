<template>
  <div class="p-recipe-id">
    {{ route.params.id }}

    <p>test</p>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
const route = useRoute();
</script>
