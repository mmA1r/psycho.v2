import { useStorage, usePreferredDark, useDebounceFn } from '@vueuse/core';
import { gsap } from 'gsap';

type Theme = 'light'|'dark';

const keys = ['main', 'accent', 'light-accent', 'dark-accent', 'shadow'];

const systemPrefersDark = usePreferredDark();
const storedTheme = useStorage<Theme|null>('theme', null);
const currentTheme = ref<Theme>(storedTheme.value ?? (systemPrefersDark.value ? 'dark' : 'light'));

const applyTheme = useDebounceFn((theme: Theme) => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const duration = parseFloat(style.getPropertyValue('--color-transition-duration')) || 0.3;
    const ease = style.getPropertyValue('--color-transition-ease').trim() || 'power1.inOut';

    const varsToAnimate: Record<string, string> = {};

    for (const key of keys) {
        const targetVar = `--color__${key}`;
        const targetVal = style.getPropertyValue(`--color__${key}_${theme}`).trim();
        varsToAnimate[targetVar] = targetVal;
    }

    gsap.to(root, {
        ...varsToAnimate,
        duration,
        ease
    });
}, 150);

watch(currentTheme, (theme) => {
    storedTheme.value = theme;
    applyTheme(theme);
}, { immediate: true });

export function useTheme() {
    const toggleTheme = () => {
        currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
    };

    return {
        theme: currentTheme,
        toggleTheme,
        setTheme: (t: Theme) => (currentTheme.value = t)
    };
}
