<template>
  <section class="c-how-to">
    <span class="c-how-to__tag">
      {{ tag }}
    </span>

    <h3 class="c-how-to__title">
      {{ title }}
    </h3>

    <div class="c-how-to__list">
      <div
        v-for="(item, index) in items"
        :class="['c-how-to__item', { '--center': index === 1 }]"
      >
        <HowtoItem
          :title="item.how_to_title"
          :text="item.how_to_texte"
          :image="item.how_to_image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-how-to {

  &__title {
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: row;
  }
}
</style>

<script setup="">
const props = defineProps({
  title: String,
  items: Array,
  tag: String,
});

const env = useRuntimeConfig();

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
</script>
