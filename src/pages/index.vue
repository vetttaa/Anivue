<template>
  <div>Hello Home Page</div>
</template>
<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: 'auth'
})
</script>
