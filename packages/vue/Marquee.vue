<template>
  <div class="marquee-root">
    <div ref="containerRef" class="marquee-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMarquee } from './useMarquee'

export default defineComponent({
  name: 'Marquee',
  props: {
    speed: {
      type: Number,
      default: 10,
    },
    speedFactor: {
      type: Number,
      default: 1,
    },
    direction: {
      type: Number,
      default: 1,
      validator: (value: number): value is 1 | -1 => value === 1 || value === -1,
    },
    paused: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const { containerRef } = useMarquee({
      speed: props.speed,
      speedFactor: props.speedFactor,
      direction: props.direction,
      paused: props.paused,
    })

    return {
      containerRef,
    }
  },
})
</script>

<style>
.marquee-root {
  overflow-x: clip;
  overflow-y: visible;
  max-width: 100%;
}

.marquee-container {
  min-width: max-content;
  display: flex;
}
</style>