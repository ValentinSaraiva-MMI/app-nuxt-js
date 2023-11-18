<template>
<div class="grid">



  <div  v-for="item in services" class="card">
   
      <div class="card__icone">
      

        <MyIcon :name="item.services_icon" color="secondary" size="big" />
      </div>

      
       <PrismicText class="h4" :field="item.services_title" />
       

      <div class="card__description">
       
         <PrismicRichText :field="item.services_description" />
    
      </div>
  
  </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
  padding: 150px;
  display: grid;
  justify-items: center;
  align-items: stretch;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;

  > :nth-child(2n-1){
    border: 1px solid $gray;
  }

  > :nth-child(2n){
    box-shadow: 0 0 20px rgba($gray, 50%);
  }
} 

.card {
  max-width: 485px;
  height: auto;
  border-radius: 35px;
  display: flex;
  padding: 100px 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 42px;
  text-align: center;
  background-color: $white;
}
</style>

<script setup>
import MyTitle from './elements/MyTitle.vue'
import MyIcon from '../components/elements/MyIcon.vue'

defineProps({

services: Array,


})





</script>
