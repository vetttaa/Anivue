import {abortNavigation, defineNuxtRouteMiddleware, navigateTo, useCookie} from "nuxt/app";
import {useAuthStore} from "~/store/auth";
import {TOKEN_NAME} from "~/contants/tokens";

export default defineNuxtRouteMiddleware((to) => {
	const authStore= useAuthStore()
	const token = useCookie(TOKEN_NAME)
	if (token.value) {
		authStore.authenticated = true
	}
	if (token.value && to?.name === 'login') {
		return navigateTo('/');
	}
	if (!token.value && to?.name !== 'login') {
		abortNavigation();
		return navigateTo('/login');
	}
})
