<template>
  <div>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li v-if="!authStore" class="loginBtn" style="float: right">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li v-if="authStore" class="loginBtn" style="float: right">
          <nuxt-link @click="logout">Logout</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="mainContent">
      <slot/>
    </div>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "#imports";
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
  authStore.logout()
  await router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>
