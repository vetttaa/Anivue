<template>
  <header class="header">
    <ul>
      <template v-if="authStore.authenticated">
        <li v-for="link in Routes">
          <NuxtLink :to="link">{{ link }}</NuxtLink>
        </li>
        <li>
          <NuxtLink @click="logout">Выйти</NuxtLink>
        </li>
      </template>
    </ul>
  </header>
</template>

<script setup lang="ts">
import {useRouter} from "#imports";
import {useAuthStore} from "~/store/auth";
import {Routes} from "~/contants/routes";

const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  authStore.logout()
  await router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>
