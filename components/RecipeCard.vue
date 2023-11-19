
<template>
  <div class="c-recipe-card">

      <img class="c-recipe-card__image" :src="image" alt="" />
    <div class="c-recipe-card__content">

      <div class="c-recipe-card__content__left">
         <p class="c-recipe-card__title">{{ title }}</p>
         <MyButton class="btn" size="small" variant="rounded"> Add To Cart </MyButton>
      </div>
    
      <div class="c-recipe-card__content__right">
        <IconStarFill  class="note"/>
        <MyTitle class="note" variant="h4"> 5.0 </MyTitle>
        <MyTitle class="prix" variant="p1"> 15.00 $ </MyTitle>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  //   background-color: white;
    box-shadow: 0 2px 31px 0 rgba($gray, 60%);
  //   border-radius: 10px;

  overflow: hidden;
  width: 485px;
  height: 485px;
  border-radius: 35px;
  

    &__content {
      padding: 20px;
      display: flex;
      justify-content: space-between;

      &__left {
        display: block;
      
          &__title {
            font-size: 22px;
            line-height: 1.2;
            color: black;
            &:not(:first-child) {
              margin-top: 10px;
            }
          }


          .btn {
             margin-top: 20px;
            
          }
      }

      &__right {

       
         
         .note {
          display: inline;
         }

         .prix {
 margin-top: 20px;
       
        
         }

      }
    }

  &__image {
    width: 100%;
    height: 65%;
    object-fit: cover;
    border-radius: 35px 35px 0px 0px;
    flex-shrink: 0;
  }







}
</style>


<script setup>
defineProps({
  id: Number,
  title: String,
 
  image: String,
});

// const isAlreadyInCart = computed(() => store.cart.includes(id));

// const buttonLabel = computed(() =>
//   isAlreadyInCart(id) ? "Remove from cart" : "Add to cart"
// );
</script>