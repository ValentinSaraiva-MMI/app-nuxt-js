<template>
  <section class="c-information">
    <div v-for="item in information" class="c-information__item">
      <!-- Matching prismic options / file names -->
      <div class="c-information__icon">
        <img :src="`/icons/${item.information_icon}.svg`" alt="svg icon" />
      </div>
      <!-- OR v-if case by case  <div v-if="item.information_icon === 'phone'" class="c-information__icon">-->
      <!--        <img :src="`/icons/phone.svg`" alt="">-->
      <!--      </div>-->
      <!--      <div v-else-if="item.information_icon === 'clock'" class="c-information__icon">-->
      <!--        <img :src="`/icons/clock.svg`" alt="">-->
      <!--      </div>-->
      <!--      <div v-else-if="item.information_icon === 'pin'" class="c-information__icon">-->
      <!--        <img :src="`/icons/pin.svg`" alt="">-->
      <!--      </div>-->
      <div class="c-information__title">
        <PrismicRichText :field="item.information_title" />
      </div>
      <div class="c-information__description">
        <PrismicRichText :field="item.information_description" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-information {
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  &__item {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: orange;
    border-radius: 50%;
  }

  &__title {
    font-weight: 700;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__text {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>

<script setup>
const props = defineProps({
  information: Array,
});
</script>
