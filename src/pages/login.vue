<template>
  <div class="login">
    <AutoSwitchSlider/>
    <div class="login__container">
      <div class="login__logo">
        <LogoIcon/>
      </div>
      <div class="login__form">
        <div class="login__form_inputs">
          <input
              v-model="user.username"
              type="text"
              class="input"
              placeholder="Введите имя"
              name="uname"
              required
          />
          <input
              v-model="user.password"
              type="password"
              class="input"
              placeholder="Введите пароль"
              name="psw"
              required
          />
        </div>
        <UiButton @click.prevent="login">войти</UiButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "#imports";
import {useAuthStore} from "~/store/auth";
import UiButton from "~/components/ui/buttons/UiButton.vue";
import LogoIcon from "~/components/icons/LogoIcon.vue";
import AutoSwitchSlider from "~/components/ui/sliders/AutoSwitchSlider.vue";

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

<style lang="scss" scoped>

.login {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    padding: 14px;
    background: #262626;
    box-shadow: var(--shadow-default);
    border-radius: 8px;
    z-index: 2;
  }

  &__logo {
    display: flex;
    justify-content: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &_inputs {
      display: flex;
      flex-direction: row;
      gap: 4px;

      input {
        padding: 14px 26px;
        border-radius: 14px;
        border: 1px solid white;
        background: transparent;
        color: var(--basic-50);

        &:focus {
          outline: none;
        }
      }
    }
  }
}

</style>
