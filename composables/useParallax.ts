import { useWindowScroll } from '@vueuse/core'

/**
 * @param speed Коэффициент параллакса (0.1–0.5)
*/
export function useParallax(speed = 0.3) {
    const { y } = useWindowScroll();
    
    const offset = computed(() => Math.floor(y.value * speed));

    return { offset }
}
