<template>
  <!-- npm run generate-->
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
onMounted(() => {
  const cart = localStorage.getItem("cart");
  store.SetCart(JSON.parse(cart));
});
</script>
