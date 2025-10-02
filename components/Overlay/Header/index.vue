<script setup lang="ts">
import { useWindowScroll, useThrottleFn } from '@vueuse/core';

const headerRef = ref<HTMLElement | null>(null);
const isHiding = ref(false);
const isHiddenFinally = ref(false);

let lastPos = 0;
const THRESHOLD = 10;
const SHOW_AFTER_PX = 60;

const { y } = useWindowScroll();

const toggleOnScroll = useThrottleFn(async (curY: number) => {
    const delta = curY - lastPos;
    if (Math.abs(delta) < THRESHOLD) {
        lastPos = curY;
        return;
    }

    if (delta > 0 && curY > SHOW_AFTER_PX) {
        isHiding.value = true;
        await waitTransitionEnd(headerRef.value, 'transform');
        isHiddenFinally.value = true;
    } else {
        isHiddenFinally.value = false;
        await nextTick();
        requestAnimationFrame(() => { isHiding.value = false });
    }

    lastPos = curY <= 0 ? 0 : curY;
}, 100)

onMounted(() => {
    lastPos = y.value;
    watch(y, (v) => toggleOnScroll(v));
})
</script>

<template>
    <header
        ref="headerRef"
        :class="[
            'header',
            { 
                hide: isHiding,
                hidden: isHiddenFinally
            }
        ]"
    >
        <div class="header__inner ctx">
            <slot />
        </div>
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 60px;

        z-index: 50;

        background-color: rgba(var(--color__background-rgb), .15);
        border-bottom: 1px solid var(--color__primary);

        transform: translateY(0);

        transition: transform $anim;
        will-change: transform;

        @include glass(2px);

        &.hide {
            transform: translateY(-110%);
            pointer-events: none;
        }

        &.hidden {
            @include glassOff();
        }
    }
</style>
  