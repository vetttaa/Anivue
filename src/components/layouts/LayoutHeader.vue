<template>
  <header class="header">
    <ul>
      <li v-if="authStore.authenticated" v-for="link in Routes">
        <NuxtLink :to="link">{{ link }}</NuxtLink>
      </li>
      <li v-if="authStore.authenticated" class="loginBtn">
        <NuxtLink @click="logout">Выйти</NuxtLink>
      </li>
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
