<template>
  <!-- <p>{{ home.data.information }}</p> -->

  <div class="p-index">
 
    
    <!-- <p>{{ recettes }}</p>  -->

    <!-- <h1>{{ home.data.hero_title }}</h1> -->
  </div>
  
  <!-- <PrismicRichText :field="home.data.hero_title" /> -->

  <Hero
    :title="home.data.hero_title"
    :text="home.data.hero_text"
    :buttons="home.data.hero_buttons"
  />

  <Information :information="home.data.information" />

  <Howto
    v-bind="{
      tag: 'How to work ',
      title: 'Food Us An Important Part Of A Balanced Diet ',
      items: home.data.how_to,
    }"
  />


  <div class="p-index__recipes">
    <div class="p-index__recipe" v-for="recette in recettes">
      <RecipeCard
        v-bind="{
          id: recette.recipe_id,
          title: recette.recipe_name,
          description: recette.recipe_description,
          image: recette.image_url,
        }"
      />
    </div>
  </div>

 

  <p class="title_base">services</p>
  <h3 class="title_h3">Why Choose our Favorite Food</h3>
  <MyServiceCard :services="home.data.services"/>
  
 
  <Newslater 
   :title="home.data.newsletter_title"
   :text="home.data.newsletter_description"
   :img="home.data.newsletter_image"
  />

  <!-- <MyCards></MyCards> -->
</template>

<style lang="scss" >

.title_base {
  text-align: center;
  color: $primary-color;
  text-transform: capitalize;
}

.title_h3{
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 60px;
  margin-top: 5px;
}



.p-index__recipes {

display: grid;
grid-template-columns: repeat(3,minmax(0,1fr));
gap: 60px;

}

</style>

<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

const env = useRuntimeConfig();

const { data: recettes } = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

// console.log(home.data);

if (!home.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "la page d\accueil est introuvable",
  });
}

useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image,
});

console.log(home.value.data.services);

import MyCard from "@/components/MyCard.vue";

import MyCards from "@/components/MyCards.vue";
</script>
