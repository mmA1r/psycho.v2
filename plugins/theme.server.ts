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
                    --color__primary: var(--color__primary_${initialTheme});
                    --color__background: var(--color__background_${initialTheme});

                    --color__primary-rgb: var(--color__primary_${initialTheme}-rgb);
                    --color__background-rgb: var(--color__background_${initialTheme}-rgb);
                }
            `
        }]
    });
});
