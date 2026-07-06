import { useDebounceFn } from '@vueuse/core';
import { gsap } from 'gsap';

export type Theme = 'light' | 'dark';

const COOKIE_KEY = 'theme';
const VARS = [
    'color__primary',
    'color__background',
];

const THEME_COLORS: Record<Theme, string> = {
    light: '#fafafa',
    dark: '#161b1f',
};

export const useTheme = () => {
    const themeCookie = useCookie<Theme>(COOKIE_KEY, {
        default: () => 'light',
        sameSite: 'lax',
    });
    const themeColor = computed(() => THEME_COLORS[themeCookie.value]);

    useHead({
        meta: [
            { name: 'theme-color', content: themeColor },
        ],
    });

    const toggleTheme = useDebounceFn(() => {
        const newTheme: Theme = themeCookie.value === 'dark' ? 'light' : 'dark';
        themeCookie.value = newTheme;

        const root = document.documentElement;
        const style = getComputedStyle(root);
        const targets: Record<string, string> = {}

        const duration = parseFloat(style.getPropertyValue('--color-transition-duration')) || 0.3;
        const ease = style.getPropertyValue('--color-transition-ease').trim() || 'power1.inOut';
        root.style.setProperty('--hover-transition-duration', '0s');

        for (const key of VARS) {
            const baseVar = `--${key}`;
            const baseRgbVar = `--${key}-rgb`;
            const themeVar = `--${key}_${newTheme}`;
            const themeRgbVar = `--${key}_${newTheme}-rgb`;

            targets[baseVar] = style.getPropertyValue(themeVar).trim();
            targets[baseRgbVar] = style.getPropertyValue(themeRgbVar).trim();
        }

        gsap.to(root, {
            ...targets,
            duration,
            ease,
            onComplete: () => {
                root.style.removeProperty('--hover-transition-duration');
            },
            onInterrupt: () => {
                root.style.removeProperty('--hover-transition-duration');
            }
        });
    }, 300);

    return { theme: themeCookie, toggleTheme }
}
