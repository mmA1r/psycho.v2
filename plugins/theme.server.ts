type Theme = 'light' | 'dark';

export default defineNuxtPlugin(() => {
    const COOKIE_KEY = 'theme';
  
    const themeCookie = useCookie<Theme>(COOKIE_KEY);
  
    const initialTheme = themeCookie.value
        ? themeCookie.value
        : import.meta.server
            ? 'light'
            : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    ;
    if (import.meta.server && !themeCookie.value) {
        themeCookie.value = initialTheme;
    }

    useHead({
        style: [{
            textContent: `
                :root {
                    --color__main: var(--color__main_${initialTheme});
                    --color__accent: var(--color__accent_${initialTheme});
                    --color__light-accent: var(--color__light-accent_${initialTheme});
                    --color__dark-accent: var(--color__dark-accent_${initialTheme});
                    --color__shadow: var(--color__shadow_${initialTheme});
                }
            `
        }]
    });
});
