// composables/useTheme.client.ts
import { ref, watch, onMounted } from 'vue';
import { useStorage, usePreferredDark, useDebounceFn } from '@vueuse/core';
import { gsap } from 'gsap';

type Theme = 'light' | 'dark';
const COLOR_KEYS = ['main', 'accent', 'light-accent', 'dark-accent', 'shadow'] as const;

export function useTheme() {
    const systemPrefersDark = usePreferredDark();
    const storedTheme = useStorage<Theme | null>('theme', null);
    const theme = ref<Theme>(
        storedTheme.value ??
        (systemPrefersDark.value ? 'dark' : 'light')
    );

    const applyTheme = useDebounceFn((theme: Theme) => {
        const root = document.documentElement;
        const style = getComputedStyle(root);

        const duration = parseFloat(style.getPropertyValue('--color-transition-duration')) || 0.3;
        const ease = style.getPropertyValue('--color-transition-ease').trim() || 'power1.inOut';

        const varsToAnimate: Record<string, string> = {}
        for (const key of COLOR_KEYS) {
            const varName = `--color__${key}`;
            const varVal = style
                .getPropertyValue(`--color__${key}_${theme}`)
                .trim();
            varsToAnimate[varName] = varVal;
        }

        gsap.to(root, {
            ...varsToAnimate,
            duration,
            ease,
        });
    }, 150);

    onMounted(() => {
        applyTheme(theme.value)

        watch(
            theme,
            (newTheme) => {
                storedTheme.value = newTheme;
                applyTheme(newTheme);
            },
            { immediate: false }
        );
    });

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }
    
    return {
        theme,
        toggleTheme,
    }
}
