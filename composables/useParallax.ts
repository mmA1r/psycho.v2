import { useWindowScroll, useEventListener } from '@vueuse/core';

export function useParallax(layerRef: Ref<HTMLElement | null>, speed = 0.5) {
    const { y } = useWindowScroll();
    const offset = ref(0);

    const update = () => {
        if (!layerRef.value) return;

        offset.value = y.value * speed;
        layerRef.value.style.transform = `translate3d(0, ${offset.value}px, 0)`;
    }

    onMounted(() => {
        update();
        useEventListener(window, 'scroll', update, { passive: true });
        layerRef.value?.classList.add('parallax');
    });

    return { offset }
}
