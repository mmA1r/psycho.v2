export const useMenuStore = defineStore('menu', () => {
    const isOpen = ref(false);

    const toggle = () => {
        isOpen.value = !isOpen.value;
    };

    const close = () => {
        isOpen.value = false;
    };

    if (typeof window !== 'undefined') {
        watch(isOpen, (open) => {
            document.body.classList.toggle('no-scroll', open);
        }, { immediate: true });
        window.addEventListener('beforeunload', () => {
            document.body.classList.remove('no-scroll');
        });
    }

    return { isOpen, toggle, close }
});
