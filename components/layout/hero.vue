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

<div class="c-hero__cards__bg"></div>

 <ul class="c-hero__cards__grid">
  <li v-for="recette in gridRepasFavoris">
    <MyFavoriteCard :title="recette.recipe_name" :description="recette.recipe_description" :imagesrc="recette.image_url"/>
  </li>
 </ul>
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
    gap: 20%;
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

position: relative;

width: 550px;
height: 774px;


   
    &__bg {
       background: linear-gradient(25deg, transparent, rgba($gray, 50%));
       width: 70%;
       height: 100%;
       border-radius: 30px;
       position: absolute;
       top: 0;
       right: 0;
       z-index: -800;
    }
    

&__grid {
    display: grid;
 margin-top: 60px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 50px 10px;
    width: 546px;
    height: 700px;
   
  
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


const gridRepasFavoris = computed(() => {
  if (recipes.value){
    return recipes.value.slice(0, 4)
  } else{
    return []
  }
})

</script>
