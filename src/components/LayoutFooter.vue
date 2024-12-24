<template>
  <footer v-if="authStore.authenticated">
    <h1>Footer</h1>
  </footer>
</template>

<script setup>
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();
</script>

<style lang="scss" scoped>

</style>
