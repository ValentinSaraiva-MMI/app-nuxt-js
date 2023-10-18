<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String,
});

// const isAlreadyInCart = computed(() => store.cart.includes(id));

// const buttonLabel = computed(() =>
//   isAlreadyInCart(id) ? "Remove from cart" : "Add to cart"
// );
</script>

<template>
  <div class="c-recipe-card">
    <div class="c-recipe-card__content">
      <img class="c-recipe-card__image" :src="image" alt="" />
      <p class="c-recipe-card__title">{{ title }}</p>
      <p class="c-recipe-card__description">{{ description }}</p>
      <RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink>

      <MyButton size="small" variant="rounded"> Add To Cart </MyButton>
      <div class="c-recipe-card__note">
        <IconStarFill />
        <MyTitle variant="h4"> 5.0 </MyTitle>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  //   background-color: white;
  //   box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  //   border-radius: 10px;

  overflow: hidden;
  width: 485px;
  height: 485px;
  border-radius: 35px;
  border: 1px solid #000;

  //   &__content {
  //     padding: 20px;
  //   }

  &__image {
    width: 100%;

    object-fit: cover;

    border-radius: 35px 35px 0px 0px;

    flex-shrink: 0;
  }

  &__title {
    font-size: 22px;
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__description {
    font-size: 16px;
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
