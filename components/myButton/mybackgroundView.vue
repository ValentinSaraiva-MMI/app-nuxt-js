<template>
  <div class="backgroundScroll">
    <div class="backgroundScroll__content">
      <p>section scroll{{ percent }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backgroundScroll {
  height: 2000px;
  background-color: black;
  color: white;
  &__content {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      percent: 0
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
