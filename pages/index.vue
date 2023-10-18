<template>
  <!-- <p>{{ home.data.information }}</p> -->

  <div class="p-index">
    <p>tesssst</p>
    <p>{{ recettes }}</p>

    <!-- <h1>{{ home.data.hero_title }}</h1> -->
  </div>
  <!-- 
  <PrismicRichText :field="home.data.hero_title" /> -->
  <Hero
    :title="home.data.hero_title"
    :text="home.data.hero_text"
    :buttons="home.data.hero_buttons"
  />

  <Information :information="home.data.information" />

  <Howto
    v-bind="{
      tag: 'How to',
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

  <MyCards></MyCards>
</template>

<style></style>

<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
);

const env = useRuntimeConfig();

const { data: recettes } = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiUrl + "/recipes");
});

console.log(home.data);

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

console.log(home);

import MyCard from "@/components/MyCard.vue";

import MyCards from "@/components/MyCards.vue";
</script>
