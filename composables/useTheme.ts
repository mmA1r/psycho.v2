// composables/useTheme.client.ts
import { useDebounceFn } from '@vueuse/core';
import { gsap } from 'gsap';

export type Theme = 'light' | 'dark';

const COOKIE_KEY = 'theme';
const VARS = [
    'color__main',
    'color__accent',
    'color__light-accent',
    'color__dark-accent',
    'color__shadow'
];

export const useTheme = () => {
    const themeCookie = useCookie<Theme>(COOKIE_KEY);
  
    const toggleTheme = useDebounceFn(() => {
        const newTheme: Theme = themeCookie.value === 'dark' ? 'light' : 'dark';
        themeCookie.value = newTheme;
    
        const root = document.documentElement;
        const style = getComputedStyle(root);
        const targets: Record<string, string> = {}
    
        const duration = parseFloat(style.getPropertyValue('--color-transition-duration')) || 0.3;
        const ease = style.getPropertyValue('--color-transition-ease').trim() || 'power1.inOut';
    
        for (const key of VARS) {
            const baseVar  = `--${key}`;
            const themeVar = `--${key}_${newTheme}`;
            targets[baseVar] = style.getPropertyValue(themeVar).trim();
        }
    
        gsap.to(root, {
            ...targets,
            duration,
            ease
        });
    }, 300);

    return { theme: themeCookie.value,  toggleTheme }
}
