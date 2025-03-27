<template>
  <div>
    <h1 class="text-center">Marquee Vue Example</h1>

    <div class="text-center">
      <label>
        Speed:
        <input type="number" v-model.number="speed" min="1" max="100" />
      </label>

      <label>
        Speed Factor:
        <input type="number" v-model.number="speedFactor" min="0.1" max="10" step="0.1" />
      </label>

      <label>
        Direction:
        <select v-model.number="direction">
          <option :value="1">Forward</option>
          <option :value="-1">Backward</option>
        </select>
      </label>

      <label>
        <input type="checkbox" v-model="paused" />
        Paused
      </label>
    </div>

    <!-- Using the Marquee component -->
    <div class="flex flex-col items-center text-foreground my-em-[150]">
      <p class="font-mono font-medium text-em-[20/16]">Component Example</p>
      <div style="mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
        class="w-full max-w-full lg:max-w-em-[1000]">
        <Marquee :speed="speed" :speedFactor="speedFactor" :direction="direction" :paused="paused">
          <div class="flex">
            <span v-for="i in 4" :key="i"
              class="font-semibold uppercase whitespace-nowrap text-em-[54/16] md:text-em-[96/16] leading-[1] px-em-[16]">
              @joycostudio/marquee
            </span>
          </div>
        </Marquee>
      </div>
    </div>

    <!-- Using the useMarquee composable directly -->
    <div class="flex flex-col items-center text-foreground my-em-[150]">
      <p class="font-mono font-medium text-em-[20/16]">Composable Example</p>
      <div style="mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
        class="w-full max-w-full lg:max-w-em-[1000]">
        <div class="overflow-x-clip overflow-y-visible max-w-full">
          <div :ref="setContainerRef" class="flex min-w-max">
            <div class="flex">
              <span v-for="i in 4" :key="i"
                class="font-semibold uppercase whitespace-nowrap text-em-[54/16] md:text-em-[96/16] leading-[1] px-em-[16]">
                @joycostudio/marquee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Marquee, useMarquee } from '@joycostudio/marquee/vue'

export default defineComponent({
  name: 'App',
  components: {
    Marquee,
  },
  setup () {
    const {
      containerRef: composableContainerRef,
      speed,
      speedFactor,
      direction,
      paused,
    } = useMarquee({
      speed: 75,
      speedFactor: 1,
      direction: 1,
      paused: false,
    })

    const setContainerRef = (el: any) => {
      composableContainerRef.value = el
    }

    return {
      speed,
      speedFactor,
      direction,
      paused,
      setContainerRef,
    }
  },
})
</script>
