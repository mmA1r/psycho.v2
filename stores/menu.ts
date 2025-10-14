export const useMenuStore = defineStore('menu', () => {
    const isOpen = ref(false);

    const toggle = useDebounceFn(() => {
        isOpen.value = !isOpen.value;
    }, 300);

    if (typeof window !== 'undefined') {
        watch(isOpen, (open) => {
            document.body.classList.toggle('no-scroll', open);
        });
        window.addEventListener('beforeunload', () => {
            document.body.classList.remove('no-scroll');
        });
    }

    return { isOpen, toggle }
});
