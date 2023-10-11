<template>
  <a v-if="href" :href="href" :class="className"><slot></slot></a>

  <button v-else :class="className"><slot></slot></button>
</template>

<style lang="scss" scoped>
.buttonRect {
  padding: 33px 67px;
  border: none;
  border-radius: 15px;
  background: linear-gradient(lighten($primary-color, 10%), $primary-color);
  font-family: $primary-font-familly;
  font-size: $small-font-size;
  font-weight: 600;
  color: $white;

  display: inline-block;

  &.-rounded {
    border-radius: 37px;
    background: $primary-color;
    font-family: $primary-font-familly;
    font-size: $small-font-size;
    font-weight: 500;
  }

  &.-small {
    font-weight: 400;

    font-size: $small-font-size;
  }
}
</style>

<script>
export default {
  props: {
    content: String,
    href: String,
    variant: String,
    size: String
  },

  data() {
    return {
      className: `buttonRect ${this.variant === 'rounded' ? '-rounded' : ''} ${
        this.size === 'small' ? '-small' : ''
      }`
    }
  }
}
</script>
