import {abortNavigation, defineNuxtRouteMiddleware, navigateTo, useCookie} from "#imports";
import {useAuthStore} from "~/store/auth";
import {TOKEN_NAME} from "~/contants/tokens";
import {Routes} from "~/contants/routes";

export default defineNuxtRouteMiddleware((to) => {
	const authStore = useAuthStore()
	const token = useCookie(TOKEN_NAME)
	if (token.value) {
		authStore.authenticated = true
	}
	if (token.value && to?.name === Routes.LOGIN) {
		return navigateTo('/');
	}
	if (!token.value && to?.name !== Routes.LOGIN) {
		abortNavigation();
		return navigateTo(Routes.LOGIN);
	}
})
