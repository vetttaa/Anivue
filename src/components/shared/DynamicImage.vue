<template>
  <img :src="src" :alt="alt" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const imgRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  if (imgRef.value) {
    imgRef.value.src = props.src
  }
})
</script>
