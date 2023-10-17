<template>
  <section>
    <div class="c-hero__title">
      <PrismicRichText :field="title" />
    </div>

    <div class="c-hero__text">
      <PrismicRichText :field="text" />
    </div>

    <div class="c-hero__buttons">
      <div v-for="button in buttons">
        <!-- {{ button }} -->
        <!-- <button
          v-if="button.button_type === 'default'"
          class="c-hero__button -default"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </button>

        <button
          v-else="button.button_type === 'video'"
          class="c-hero__button -video"
        >
          <a :href="button.button_link.url">{{ button.button_label }}</a>
        </button> -->

        <Button :href="button.button_link.url" :variant="button.button_type">{{
          button.button_label
        }}</Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  &__title {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: black;

    strong {
      color: orange;
    }
  }
}
</style>

<script setup="">
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
});

const env = useRuntimeConfig();

// console.log(env);

const { data: recipes } = await useAsyncData("recipes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});
</script>
