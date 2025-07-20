// composables/useTheme.client.ts
import { useDebounceFn } from '@vueuse/core';
import { gsap } from 'gsap';

export type Theme = 'light' | 'dark';

const COOKIE_KEY = 'theme';
const VARS = [
    'color__primary',
    'color__background',
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
            const baseRgbVar  = `--${key}-rgb`;
            const themeVar = `--${key}_${newTheme}`;
            const themeRgbVar = `--${key}_${newTheme}-rgb`;
            
            targets[baseVar] = style.getPropertyValue(themeVar).trim();
            targets[baseRgbVar] = style.getPropertyValue(themeRgbVar).trim();
        }
    
        gsap.to(root, {
            ...targets,
            duration,
            ease
        });
    }, 300);

    return { theme: themeCookie,  toggleTheme }
}
