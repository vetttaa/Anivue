<script setup lang="ts">
import { useRouter } from '#imports';
import { Routes } from '~/contants/routes';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const router = useRouter();

async function logout() {
  authStore.logout();
  await router.push(Routes.LOGIN);
}
</script>

<template>
  <header class="header">
    <ul>
      <li v-for="link in Routes" :key="link">
        <NuxtLink :to="link">
          {{ link }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="logout">
          Выйти
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>

</style>
