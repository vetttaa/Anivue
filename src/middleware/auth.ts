import {abortNavigation, defineNuxtRouteMiddleware, navigateTo, useCookie} from "nuxt/app";
import {useAuthStore} from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
	const authStore= useAuthStore()
	const token = useCookie('token')
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
