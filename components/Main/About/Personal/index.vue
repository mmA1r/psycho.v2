<script lang='ts' setup>
    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
    const { t } = useLocale();
</script>

<template>
    <section 
        ref="contentBlockRef"
        :class="['about-info__personal', { settled: isIntersecting }]"
    >
        <p
            v-for="(paragraph, index) in t.about.personal"
            :key="index"
            class="personal-info__paragraph"
        >{{ paragraph }}</p>
    </section>
</template>

<style lang='scss' scoped>
    .about-info__personal {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: $brd-radius;
        overflow: hidden;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 120%;
            transform: translateY(0);
            pointer-events: none;
            z-index: 1;
            background: linear-gradient(
                to top,
                var(--color__background) 80%,
                transparent 100%
            );
            transition: transform $anim;
            transition-delay: calc($ease-duration * 2);
        }

        &.settled {
            &::after {
                transform: translateY(100%);
            }
        }
    }

    .personal-info__paragraph {
        @include adaptive-font(14px, 16px);
    }
</style>
