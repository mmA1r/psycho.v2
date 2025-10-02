export async function waitTransitionEnd(el: HTMLElement | null, propertyName?: string, timeout = 200) {
    return new Promise<void>((resolve) => {
        if (!el) return resolve();

        let finished = false;
        const onEnd = (e: TransitionEvent) => {
            if (propertyName && e.propertyName !== propertyName) return;
            if (finished) return;
            finished = true;
            el.removeEventListener('transitionend', onEnd);
            clearTimeout(timer);
            resolve();
        }

        const timer = setTimeout(() => {
            if (finished) return;
            finished = true;
            el.removeEventListener('transitionend', onEnd);
            resolve();
        }, timeout);

        el.addEventListener('transitionend', onEnd);
    });
}
