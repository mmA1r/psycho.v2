<script setup lang="ts">
    import { useEventStore } from 'stores/events';
    import { useWait } from 'hooks/useWait';

    const { wait } = useWait();
    const events = useEventStore();

    const visible = ref(true);
    const container = ref<HTMLElement|null>(null);
    const svg = ref<SVGSVGElement|null>(null);

    async function onHeroSettled() {
        const STAGGER_DELAY = 150;
        const BOUNCE_DELAY = 1000;
        const FADE_DELAY = 2500;
        const ANIM_DURATION = parseFloat(getComputedStyle(document.documentElement)
            .getPropertyValue('--animation-duration')) * 1000
        ;

        if (!container.value) return;
        const elems = Array.from(container.value.children) as HTMLElement[];

        // appear
        elems.forEach((el, i) => {
            el.style.transform = `translate3d(0,0,0)`;
            el.style.transitionDelay = `${i * STAGGER_DELAY}ms`;
            el.classList.add('enter');
        });

        elems.forEach(async (el, i) => {
            // bounce effect
            await wait(ANIM_DURATION + i * STAGGER_DELAY + BOUNCE_DELAY);
            el.classList.add('bounce');

            // fade effect
            await wait(FADE_DELAY);
            el.classList.add('fade');

            // delte from DOM
            await wait(FADE_DELAY);
            visible.value = false;
        });
    }
  
    onMounted(() => {
        if (!container.value) return;

        const height = container.value.clientHeight;
        const elems = Array.from(container.value.children) as HTMLElement[];

        elems.forEach((elem) => {
            elem.style.transform = `translate3d(0, ${height + 5}px, 0)`;
        });

        if (svg.value) svg.value.setAttribute('color', 'var(--color__accent)');

        events.subscribe('heroSectionSettled', onHeroSettled);
    });

    onUnmounted(() => {
        events.unsubscribe('heroSectionSettled', onHeroSettled);
    });
</script>

<template>
    <div
        v-if="visible"
        ref="container"
        class="main__scroll-down"
    >
        <div class="main__point"/> 
        <div class="main__point"/> 
        <div class="main__icon">
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                ref="svg"
            >
                <path 
                    fill="currentColor"
                    d="m480-360 160-160H320l160 160Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
            </svg>
        </div>
        <div class="main__point"/> 
        <div class="main__point"/> 
    </div>
</template>
  
<style scoped lang="scss">
    .main__scroll-down {
        position: absolute;
        width: 40px;
        height: 80px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);

        >* {
            position: relative;
            opacity: 0;

            transition:
                transform $animation-duration ease-out,
                opacity $animation-duration ease-out;
            ;

            &.enter {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }

            &.bounce {
                animation: bounce $animation-duration ease-out 1s;
            }

            &.fade {
                opacity: 0;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translate3d(0, 0, 0);
                }
                40% {
                    transform: translate3d(0, -8px, 0);
                }
                60% {
                    transform: translate3d(0, -5px, 0);
                }
            }
        }
    }

    .main__icon {
        $size: 24px;

        width: $size;
        height: $size;

        display: flex;
        align-items: center;
        justify-content: center;

        >svg {
            position: relative;
            width: 100%;
            height: 100%;   
        }
    }

    .main__point {
        $size: 4px;

        width: $size;
        height: $size;

        border-radius: 50%;

        background-color: var(--color__accent);
    }
</style>
  