export const useMenuStore = defineStore('menu', () => {
    const isOpen = ref(false)
  
    const toggle = useDebounceFn(() => {
        isOpen.value = !isOpen.value
    }, 300);
  
    return { isOpen, toggle }
});
