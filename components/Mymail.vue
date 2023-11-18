<template>
  <div class="email" :class="className">
    <input class="email__input" type="email" placeholder="Enter your email..." />
    <myIcon v-if="size == 'small'" name="chevron" size="medium" bg="orange-blanc" />
    <myButton v-if="size == 'big'" size="big" class="email__button">subcribe</myButton>
  </div>
</template>

<style lang="scss" scoped>
.email {
 
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background: $white;
  
  &.-small{
      padding: 8px 10px;
      border-radius: 32.5px;
      box-shadow: 0 0 15px rgba($gray, 30%);

      .email__input {
        @include p2;
        border: none;
        width: 200px;
    
        &:focus {
          outline: none;
        }
    
        &::placeholder {
          color: darken($gray, 50%);
        }
      }
  }

  &.-big{
    border: 2px solid black;
    height: 72px;
    padding: 11px;
    border-radius: 15px;

      .email__input {
        @include p1;
        margin: 25px 34px;
        width: 100%;
        border: none;
    
        &:focus {
          outline: none;
        }
    
        &::placeholder {
          color: darken($gray, 50%);
        }
      }

      .email__button{
        height: 100%;
        padding: 14px 26px;
        text-transform: uppercase;

      }
  }

}
</style>

<script setup>
const props = defineProps({
  size: String,
})

const className = computed(() => ({
  ' -small': props.size === 'small',
  ' -big': props.size === 'big',
}))
</script>