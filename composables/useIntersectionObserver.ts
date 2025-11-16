interface UseIntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;
}

const defaultOptions: UseIntersectionObserverOptions = {
    threshold: 0.1,
    once: true,
};

export const useIntersectionObserver = (
    targetRef: Ref<HTMLElement | null>,
    options: UseIntersectionObserverOptions = {}
) => {
    const resolvedOptions = { ...defaultOptions, ...options };

    const isIntersecting = ref(false);
    const observer = ref<IntersectionObserver | null>(null);

    const stopWatching = () => {
        if (observer.value) {
            observer.value.disconnect();
            observer.value = null;
        }
    };

    const startWatching = () => {
        if (
            !targetRef.value ||
            typeof window === 'undefined' ||
            !window.IntersectionObserver
        ) { return; }

        observer.value = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isIntersecting.value = entry.isIntersecting;

                    if (resolvedOptions.once && entry.isIntersecting) {
                        stopWatching();
                    }
                });
            },
            {
                root: resolvedOptions.root,
                rootMargin: resolvedOptions.rootMargin,
                threshold: resolvedOptions.threshold,
            }
        );

        observer.value.observe(targetRef.value);
    };

    onMounted(() => {
        startWatching();
    });

    onUnmounted(() => {
        stopWatching();
    });

    return { isIntersecting };
};
