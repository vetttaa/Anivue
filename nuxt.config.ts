import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
	devtools: {enabled: true},
	srcDir: 'src',
	modules: ['@pinia/nuxt'],
	css: ["assets/style/main.scss"],
	appConfig: {
		title: 'Привет Nuxt',
		theme: {
			dark: true,
			colors: {
				primary: '#404040'
			}
		}
	},

	app: {
		head: {
			link: [{rel: 'icon', type: 'image/png', href: '/favicon.ico'}],
			title: '',
			meta: [
				{
					name: 'description',
					content:
							''
				}
			],
			htmlAttrs: {
				lang: 'ru'
			}
		}
	},

	compatibilityDate: '2024-12-17',
})
