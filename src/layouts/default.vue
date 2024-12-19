<template>
  <div class="default">
    <header class="header">
      <ul>
        <li v-if="authStore.authenticated">
          <NuxtLink to="/about">Аниме</NuxtLink>
        </li>
        <li v-if="authStore.authenticated">
          <NuxtLink to="/about">Манга</NuxtLink>
        </li>
        <li v-if="authStore.authenticated">
          <NuxtLink to="/about">Дорамы</NuxtLink>
        </li>
        <li v-if="authStore.authenticated" class="loginBtn">
          <nuxt-link @click="logout">Выйти</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="mainContent">
      <slot/>
    </div>
    <footer v-if="authStore.authenticated">
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "#imports";
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();
const router = useRouter();

console.log(authStore)

const logout = async () => {
  authStore.logout()
  await router.push('/login')
}
</script>
