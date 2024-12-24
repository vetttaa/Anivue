<template>
  <div class="container">
    <LayoutHeader/>
      <slot/>
    <LayoutFooter/>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "~/components/layouts/LayoutHeader.vue";
import LayoutFooter from "~/components/LayoutFooter.vue";
</script>
