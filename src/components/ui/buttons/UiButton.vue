<template>
 <button class="button">
   <slot/>
 </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  font-size: 18px;
  background: var(--brand-400);
  border-radius: var(--radius-14);
  border: none;
  transition: 0.3s;
  color: var(--basic-900);

  &:hover {
    background: var(--brand-300);
  }

  &:active {
    background: var(--brand-500);
    color: var(--neutral-700);
  }

  &:disabled {
    background: var(--brand-200);
    color: var(--neutral-400);
  }
}
</style>
