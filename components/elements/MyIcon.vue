<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  align-items: center;
  border-radius: 100%;
  color: $black;
  background: $white;
  height: rem(42);
  width: rem(42);

  justify-content: center;

  &.-big {
    height: rem(88);
    width: rem(88);
    background: $secondary-color;
    color: $primary-color;
    svg {
      scale: 1.5;
    }
  }

  &.-primary {
    background: $primary-color;
    color: $white;
  }

  &.-secondary {
    background: $secondary-color;
    color: $primary-color;
  }

  &.-dark {
    background: $black;
    color: $white;
  }

  &.-white {
    background: $white;
    color: $black;
    box-shadow: 0px 0px 5px $gray;
  }

  &.-reverse {
    transform: rotate(180deg);
  }
}
</style>

<script setup>
import { computed } from 'vue'

import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconEcosysteme from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconCamion from '../icons/IconCamion.vue'
import IconUstencil from '../icons/IconUstencil.vue'
import IconUstencilCrossed from '../icons/IconUstencilCrossed.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconPlay from '../icons/IconPlay.vue'
import IconFleche from '../icons/IconFleche.vue'
import IconChevron from '../icons/IconChevron.vue'
import IconBag from '../icons/IconBag.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconClock from '../icons/IconClock.vue'
import IconMap from '../icons/IconMap.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconStar from '../icons/IconStar.vue'

const props = defineProps({
  name: String,
  size: String,
  color: String,
  direction: String
})

const getIcon = computed(() => {
  switch (props.name) {
  case 'community':
    return IconCommunity
  case 'documentation':
    return IconDocumentation
  case 'ecosysteme':
    return IconEcosysteme
  case 'support':
    return IconSupport
  case 'camion':
    return IconCamion
  case 'ustencile':
    return IconUstencil
  case 'ustencile_crossed':
    return IconUstencilCrossed
  case 'facebook':
    return IconFacebook
  case 'twitter':
    return IconTwitter
  case 'linkedin':
    return IconLinkedin
  case 'instagram':
    return IconInstagram
  case 'play':
    return IconPlay
  case 'fleche':
    return IconFleche
  case 'chevron':
    return IconChevron
  case 'bag':
    return IconBag
  case 'search':
    return IconSearch
  case 'clock':
    return IconClock
  case 'map':
    return IconMap
  case 'phone':
    return IconPhone
  case 'star':
    return IconStar
  default:
    return IconFacebook
  }
})

const className = computed(() => ({
  '-big': props.size === 'big',
  '-primary': props.color === 'primary',
  '-secondary': props.color === 'secondary',
  '-dark': props.color === 'dark',
  '-white': props.color === 'white',
  '-reverse': props.direction === 'reverse'
}))
</script>
