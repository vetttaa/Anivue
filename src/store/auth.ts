import {defineStore} from "pinia";
import {useCookie} from "nuxt/app";
import {TOKEN_NAME} from "~/contants/tokens";
import CustomError from "~/utils/CustomError";

interface UserPayload {
	username: string;
	password: string;
}

interface AuthState {
	authenticated: boolean;
	loading: boolean;
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		authenticated: false,
		loading: false,
	}),
	actions: {
		async authenticateUser({username, password}: UserPayload) {
			try {
				this.loading = true;

				const response = await $fetch('https://dummyjson.com/auth/login', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: ({
						username,
						password,
						expiresInMins: 30
					})
				});

				if (response) {
					const token = useCookie(TOKEN_NAME);
					token.value = response;
					this.authenticated = true;
				}
			} catch (error) {
				new CustomError('Ошибка при аутентификации').log();
			} finally {
				this.loading = false;
			}
		},

		logout() {
			try {
				const token = useCookie(TOKEN_NAME);
				this.authenticated = false;
				token.value = null;
			} catch (error) {
				new CustomError('Ошибка при выходе из системы:').log();
			}
		}
	},
});

