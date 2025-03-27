import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import type { Ref } from 'vue'
import { Marquee } from '../core'

interface UseMarqueeOptions {
  speed?: number
  speedFactor?: number
  direction?: 1 | -1
  paused?: boolean
}

interface UseMarqueeReturn {
  containerRef: Ref<HTMLElement | null>
  speed: Ref<number>
  speedFactor: Ref<number>
  direction: Ref<1 | -1>
  paused: Ref<boolean>
  marqueeInstance: Ref<Marquee | null>
  setSpeed: (speed: number) => void
  setSpeedFactor: (factor: number) => void
  setDirection: (direction: 1 | -1) => void
  setPaused: (paused: boolean) => void
}

export function useMarquee({
  speed: initialSpeed = 10,
  speedFactor: initialSpeedFactor = 1,
  direction: initialDirection = 1,
  paused: initialPaused = false,
}: UseMarqueeOptions = {}): UseMarqueeReturn {
  const containerRef = ref<HTMLElement | null>(null)
  const marqueeInstance = ref<Marquee | null>(null)
  const speed = ref(initialSpeed)
  const speedFactor = ref(initialSpeedFactor)
  const direction = ref<1 | -1>(initialDirection)
  const paused = ref(initialPaused)

  onMounted(() => {
    if (!containerRef.value) return

    const container = containerRef.value
    const child = container.children[0] as HTMLElement

    if (!child) {
      console.warn('Marquee requires exactly one child element')
      return
    }

    marqueeInstance.value = new Marquee(container, {
      speed: speed.value,
      speedFactor: speedFactor.value,
      direction: direction.value,
    })

    marqueeInstance.value.initialize(child)

    if (paused.value) {
      marqueeInstance.value.pause()
    }
  })

  watch(speed, (newSpeed) => {
    marqueeInstance.value?.setSpeed(newSpeed)
  })

  watch(speedFactor, (newSpeedFactor) => {
    marqueeInstance.value?.setSpeedFactor(newSpeedFactor)
  })

  watch(direction, (newDirection) => {
    marqueeInstance.value?.setDirection(newDirection)
  })

  watch(paused, (isPaused) => {
    if (isPaused) {
      marqueeInstance.value?.pause()
    } else {
      marqueeInstance.value?.play()
    }
  })

  onBeforeUnmount(() => {
    marqueeInstance.value?.destroy()
  })

  const setSpeed = (newSpeed: number) => {
    speed.value = newSpeed
  }

  const setSpeedFactor = (newFactor: number) => {
    speedFactor.value = newFactor
  }

  const setDirection = (newDirection: 1 | -1) => {
    direction.value = newDirection
  }

  const setPaused = (newPaused: boolean) => {
    paused.value = newPaused
  }

  return {
    containerRef,
    speed,
    speedFactor,
    direction,
    paused,
    // @ts-ignore
    marqueeInstance,
    setSpeed,
    setSpeedFactor,
    setDirection,
    setPaused,
  }
}
