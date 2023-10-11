<template>
  <div class="card">
    <div class="card__image">
      <img :src="imagesrc" :alt="imagealt" />
    </div>

    <div class="card__column">
      <div class="card__col1">
        <div class="card__title">
          <RouterLink :to="`/recipe/${id}`">
            <MyTitle h4="h4" variant="h4">
              {{ title }}
            </MyTitle>
          </RouterLink>
        </div>

        <div class="card__button">
          <MyButton size="small" variant="rounded">
            {{ button__title }}
          </MyButton>
        </div>
      </div>

      <div class="card__col2">
        <div class="card__note">
          <IconStarFill />
          <MyTitle variant="p2">
            {{ note }}
          </MyTitle>
        </div>

        <div class="card__prix">
          <MyTitle variant="p1">
            {{ prix }}
          </MyTitle>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  width: 485px;
  height: 485px;
  border-radius: 35px;
  border: 1px solid #000;

  &__image {
    border-radius: 35px 35px 0px 0px;
    width: 485px;
    height: 333px;
    flex-shrink: 0;
  }

  &__countent {
    margin-bottom: rem(20);
  }

  &__button,
  &__note,
  &__prix,
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-family: $primary-font-familly;
    font-size: $medium-font-size;
    font-weight: 700;
  }

  &__prix {
    font-family: $primary-font-familly;
    font-size: $medium-font-size;
    font-weight: 500;
  }

  &__column {
    margin-top: 16px;
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__note {
    gap: 10px;
  }

  &__col1 {
    justify-content: start;
  }
  &__col2 {
    justify-content: end;
  }
}
</style>

<script setup>
import MyButton from "@/components/elements/MyButton.vue";
import MyTitle from "@/components/elements/MyTitle.vue";
import IconStarFill from "@/components/elements/IconStar.vue";

defineProps({
  imagealt: String,
  title: String,
  prix: String,
  imagesrc: String,
  note: String,
  button__title: String,
  id: Number,
});
</script>
