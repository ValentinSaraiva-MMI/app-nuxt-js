<template>
  <div class="cards">
    <MyCard v-for="card in cards" v-bind="card" :key="card.id"> </MyCard>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: rem(20);
  grid-template-columns: repeat(3, 1fr);
}
</style>

<script setup>
import MyCard from '@/components/MyCard.vue'
import { reactive } from 'vue'
import MyTitle from '@/components/elements/MyTitle.vue'

const response = [
  {
    title: 'Gyro Sandwhic',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '15',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  },

  {
    title: 'Enchilade',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '25.50',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  },

  {
    title: 'Green Beans',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '12.00',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  },

  {
    title: 'Pizza',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '10',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  },

  {
    title: 'Chicken Pot Pie',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '10',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  },

  {
    title: 'Green Salad',
    imagesrc: 'http://placekitten.com/485/351',
    imagealt: 'Image de chat',
    buttonLabel: 'Bouton de la card',
    prix: '10',
    note: '5.0',
    button__title: 'Add to cart',
    id: 2
  }
]

const cards = reactive(response)
</script>
