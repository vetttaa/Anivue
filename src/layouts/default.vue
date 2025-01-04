<script setup lang="ts">
import LayoutFooter from '~/components/layouts/LayoutFooter.vue';
import LayoutHeader from '~/components/layouts/LayoutHeader.vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="container">
    <LayoutHeader v-if="authStore.authenticated" />
    <slot />
    <LayoutFooter v-if="authStore.authenticated" />
  </div>
</template>
