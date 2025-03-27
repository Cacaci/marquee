import { defineComponent, h, PropType } from 'vue'
import { useMarquee } from './useMarquee'

const marqueeRootStyles = {
  overflowX: 'clip',
  overflowY: 'visible',
  maxWidth: '100%',
}

const marqueeInstanceStyles = {
  minWidth: 'max-content',
  display: 'flex',
}

export const Marquee = defineComponent({
  name: 'Marquee',
  props: {
    speed: {
      type: Number as PropType<number>,
      default: 10,
    },
    speedFactor: {
      type: Number as PropType<number>,
      default: 1,
    },
    direction: {
      type: Number as PropType<1 | -1>,
      default: 1,
      validator: (value: number) => value === 1 || value === -1,
    },
    paused: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props, { slots }) {
    const { containerRef } = useMarquee({
      speed: props.speed,
      speedFactor: props.speedFactor,
      direction: props.direction,
      paused: props.paused,
    })

    return () =>
      h(
        'div',
        {
          style: marqueeRootStyles,
        },
        [
          h(
            'div',
            {
              ref: containerRef,
              style: marqueeInstanceStyles,
            },
            slots.default?.()
          ),
        ]
      )
  },
})
