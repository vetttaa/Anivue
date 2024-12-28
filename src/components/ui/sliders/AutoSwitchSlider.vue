<template>
  <div ref="container" class="keen-slider">
    <div
        v-for="n in 3"
        :key="n"
        class="keen-slider__slide"
    >
      <img :src="`/images/login/slide-${n}.webp`" alt="slide" class="keen-slider__slide-image">
    </div>
  </div>
</template>

<script setup>
import {useKeenSlider} from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"

const [container] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
)
</script>

<style lang="scss" scoped>

.keen-slider {
  position: absolute;
  height: 100%;

  &__slide {
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
