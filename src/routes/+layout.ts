import { browser } from '$app/env'
import '$lib/i18n/config'
import { locale, waitLocale } from 'svelte-i18n'

export async function load() {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}
