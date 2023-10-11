<template>
  <div class="card">
    <div class="card__column">
      <div class="card__icone">
        <!--  <MyIcon name="play" size="big" /> -->

        <MyIcon :direction="iconDirection" :name="iconName" :color="iconColor" :size="iconSize" />
      </div>

      <div class="card__title">
        <MyTitle h4="h4" variant="h4">
          {{ title }}
        </MyTitle>
      </div>

      <div class="card__description">
        <MyTitle h5="h5" variant="p1">
          {{ description }}
        </MyTitle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 485px;
  height: 485px;
  border-radius: 35px;
  border: 1px solid $gray;
  display: flex;
  align-items: center;
  justify-content: center;

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 42px;
  }

  &__description {
    text-align: center;
  }
}
</style>

<script setup>
import MyTitle from './elements/MyTitle.vue'
import MyIcon from '../components/elements/MyIcon.vue'

defineProps({
  title: String,
  description: String,
  iconName: String,
  iconSize: String,
  iconColor: String,
  iconDirection: String
})
</script>
