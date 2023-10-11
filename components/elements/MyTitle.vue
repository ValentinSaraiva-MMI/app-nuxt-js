<template>
  <!--<h3 class="titre" :class="className"><slot></slot></h3> -->

  <h3 v-if="h3" :h3="h3" class="titre" :class="className"><slot></slot></h3>
  <h4 v-else-if="h4" :h4="h4" class="titre" :class="className"><slot></slot></h4>
  <h1 v-else-if="h1" :h1="h1" class="titre" :class="className"><slot></slot></h1>
  <h2 v-else-if="h2" :h2="h2" class="titre" :class="className"><slot></slot></h2>
  <h5 v-else-if="h5" :h5="h5" class="titre" :class="className"><slot></slot></h5>

  <p v-else class="titre" :class="className"><slot></slot></p>
</template>

<style lang="scss" scoped>
.titre {
  font-family: $primary-font-familly;

  &.-h1 {
    font-size: $giant-font-size;
    font-weight: 700;
  }
  &.-h2 {
    font-size: $bigger-font-size;
    font-weight: 700;
  }
  &.-h3 {
    font-size: $big-font-size;
    font-weight: 700;
  }
  &.-h4 {
    font-size: $medium-font-size;
    font-weight: 700;
  }
  &.-h5 {
    font-size: $regular-font-size;
    font-weight: 600;
  }
  &.-p1 {
    font-size: $regular-font-size;
    font-weight: 500;
  }
  &.-p2 {
    font-size: $small-font-size;
    font-weight: 400;
  }
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: String,
  h3: String,
  h2: String,
  h4: String,
  h5: String,
  h1: String,
  p: String
})

const className = computed(() => ({
  '-h1': props.variant === 'h1',
  '-h2': props.variant === 'h2',
  '-h3': props.variant === 'h3',
  '-h4': props.variant === 'h4',
  '-h5': props.variant === 'h5',
  '-p1': props.variant === 'p1',
  '-p2': props.variant === 'p2'
}))
</script>
