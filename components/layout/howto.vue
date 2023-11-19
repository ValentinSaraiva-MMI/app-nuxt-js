<template>
  <section class="c-how-to">

    <p class="c-how-to__tag">
      {{ tag }}
    </p>

    <h3 class="c-how-to__title">
      {{ title }}
    </h3>


    <div class="c-how-to__list">
      <div
        v-for="(item, index) in items"
        class="c-how-to__item"
      >
      
      
    <img :src="item.how_to_image.url" :alt="item.how_to_image.alt" class="c-how-to__item__image" />

    <div class="c-how-to__item__content">
      <PrismicText class="c-how-to__item__title" :field="item.how_to_title" />
      <PrismicRichText class="c-how-to__item__texte" :field="item.how_to_texte" />
    </div>


      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-how-to {


&__title {
  text-align: center;
  color: $primary-color;
  text-transform: capitalize;
  
}

&__tag{

margin-top: 135px;

  text-align: center;
  text-transform: capitalize;

 
}

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 51px 180px;
    align-items: center;
    gap: 45px;


    .c-how-to__item {
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: fit-content;
  
      &__title {
        font-weight: 700;
        font-family: $primary-font-familly;
        font-size: $medium-font-size;
        margin-bottom: 25px;
      }
    
      &__texte { 
        font-family: $primary-font-familly;
        font-size: $regular-font-size;
      }
    
      &__image {
        width: 420px;
      }
    }

    > :nth-child(2n) {
      flex-direction: column-reverse;

      .c-how-to__item__title{
        text-align: center;
      }
    }

    > :last-child{
      text-align: right;
    }


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
