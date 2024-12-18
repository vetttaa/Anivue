<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="uname"><b>Username</b></label>
      <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
      />
      <label for="psw"><b>Password</b></label>
      <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter Password"
          name="psw"
          required
      />
      <button @click.prevent="login" class="button">Login</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "#imports";
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();

const user = ref({
  username: 'emilys',
  password: 'emilyspass',
});

const router = useRouter();
const login = async () => {
  await authStore.authenticateUser(user.value)
  if (authStore.authenticated) {
    await router.push('/')
  }
}
</script>
