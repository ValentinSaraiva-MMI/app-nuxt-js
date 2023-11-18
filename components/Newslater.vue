<template>
  <section class="sectionEmail">
    <PrismicImage :field="img"/>

    <div class="sectionEmail__content">
      <PrismicText class="h3 sectionEmail__content-title" :field="title"/>

      <PrismicRichText :field="text"/>

    <Mymail size="big"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionEmail {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 100px auto;
  padding: 50px 50px;
  width: 80%;
  height: 300px;
  border-radius: 50px;
  background-color: $black;

  img {
    flex: none;
    width: 38%;
    display: block;
 
  }

  &__content {
    flex: none;
    color: $white;
      max-width: 40%;

    > * {
      margin: 15px 0;
    }

    &-title{
      text-transform: capitalize;
    }
  }
}
</style>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  img: String,
})
</script>