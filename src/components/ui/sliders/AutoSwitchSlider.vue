<template>
  <div ref="container" class="keen-slider">
    <div
        class="keen-slider__slide"
        v-for="(slide) in sliderPaths"
        :key="slide"
    >
      <img :src="slide" alt="слайд" class="keen-slider__slide-image">
    </div>
  </div>
</template>

<script setup>
import {useKeenSlider} from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"
import {SLIDERS} from "~/contants/auto-slider";

const src = '/images/login/slide-'
const sliderPaths = SLIDERS.map(n => `${src}${n}.webp`);

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
