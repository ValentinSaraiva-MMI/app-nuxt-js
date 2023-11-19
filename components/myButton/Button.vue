<script setup>
const props = defineProps({
  href: String,
  size: String,
  variant: String,
  hasIcon:String,
});

const className = computed(() => ({  
  " -withIcon": props.hasIcon ==="icon",
  " -rounded": props.variant === "rounded",
  " -video": props.variant === "video",
  " -small": props.size === "small",
}));

const isVideoButton = computed(() => {
  return props.variant === "video";
});
</script>
<template>
  <a v-if="href" :href="href" class="c-button" :class="className">
    <PlayButton v-if="isVideoButton" />
    <slot></slot>


  </a>
  <button v-else class="c-button" :class="className">
    <slot></slot>
<MyIcon color="megacouleur" direction="reverse" name="chevron" v-if="hasIcon ==='icon' "/>

  </button>


 
</template>

<style lang="scss">
.c-button {
  background-color: $primary-color;
  background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-flex;
  gap: rem(29);
  justify-content: space-between;
  align-items: center;
  color: $white;
  font-family: $primary-font-familly;
  font-size: $regular-font-size;
  font-weight: 600;
  padding: rem(20) rem(50);
  text-decoration: none;
  word-wrap: break-word;
  width: fit-content;

  @include large-up {
    padding: rem(33) rem(67);
  }

  &.-rounded {
    background: $primary-color;
    box-shadow: none;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
    @include large-up {
      padding: rem(20) rem(50);
    }
  }

  &.-video {
    background: $white;
    box-shadow: none;
    color: black;
  }

  &.-small {
    font-size: $small-font-size;
    padding: rem(14) rem(29);
    font-weight: 400;
  }
  &.-withIcon {
    padding-top: rem(5);
    padding-bottom: rem(5);
    padding-right: rem(5);
    &.-small {
      gap: rem(13);
    }
  }
}
</style>
