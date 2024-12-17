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
        <li v-if="!authenticated" class="loginBtn" style="float: right">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li v-if="authenticated" class="loginBtn" style="float: right">
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
import {useAuthStore} from "store/auth";
import {storeToRefs} from "pinia";
import {useRouter} from "#imports";

const authStore = useAuthStore();
const authenticated = storeToRefs(useAuthStore());

const router = useRouter();

const logout = () => {
  authStore.logUserOut()
  router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>
