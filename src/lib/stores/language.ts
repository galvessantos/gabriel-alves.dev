import { writable } from 'svelte/store';

type Language = 'en' | 'pt';

function createLanguageStore() {
	const isBrowser = typeof localStorage !== 'undefined';
	const initialLanguage = (isBrowser ? localStorage.getItem('language') : null) || 'pt';

	const { subscribe, set } = writable<Language>(initialLanguage as Language);

	return {
		subscribe,
		setLanguage: (lang: Language) => {
			if (isBrowser) {
				localStorage.setItem('language', lang);
			}
			set(lang);
		}
	};
}

export const language = createLanguageStore();
