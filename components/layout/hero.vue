<template>
  <section class="c-hero">
    <div class="c-hero__column">
      <div class="c-hero__introducing">
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

            <Button
              :href="button.button_link.url"
              :variant="button.button_type"
              >{{ button.button_label }}</Button
            >
          </div>
        </div>
      </div>

      <div class="c-hero__cards">
        <p>test</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-hero {
  &__introducing {
    margin-left: 4vw;
  }

  &__buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  &__column {
    display: grid;
    grid-template-columns: 45% auto;
    gap: 10%;
  }

  &__title {
    font-size: $giant-font-size;
    font-weight: 700;
    line-height: 1.2;
    color: $black;
    strong {
      color: $primary-color;
    }
  }

  &__text {
    margin-top: 2.5vw;
    color: $black;
    font-size: $regular-font-size;
    font-weight: 500;
  }

  &__cards {
    background-color: blue;
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

// const { data: recipes } = await useAsyncData("recipes", async () => {
//   return $fetch(env.public.apiUrl + "/recipes");
// });
</script>
