<template>
  <div class="container">
    <LayoutHeader/>
    <slot/>
    <LayoutFooter v-if="authStore.authenticated"/>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "~/components/layouts/LayoutHeader.vue";
import LayoutFooter from "~/components/layouts/LayoutFooter.vue";
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();
</script>
