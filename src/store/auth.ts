import {defineStore} from "pinia";
import {useCookie} from "nuxt/app";
import {TOKEN_NAME} from "~/contants/tokens";

interface UserPayloadInterface {
	username: string;
	password: string;
}

interface AuthStateInterface {
	authenticated: boolean;
	loading: boolean;
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthStateInterface => ({
		authenticated: false,
		loading: false,
	}),
	actions: {
		async authenticateUser({username, password}: UserPayloadInterface) {
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
					const token = useCookie(TOKEN_NAME)
					token.value = response
					console.log(response)
					this.authenticated = true
				}
			} catch (error) {
				console.error('Ошибка при аутентификации:', error);
			} finally {
				this.loading = false;
			}
		},

		logout() {
			try {
				const token = useCookie(TOKEN_NAME)
				this.authenticated = false;
				token.value = null;
			} catch (error) {
				console.error('Ошибка при выходе из системы:', error);
			}
		}
	},
});

