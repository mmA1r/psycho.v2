<script lang='ts' setup>
defineProps<{
    iconComponent: Component;
    title: string;
    content: string;
    reverse?: boolean;
}>();

// 1. Ref для заголовка (для анимации clip-path)
const headingRef = ref<HTMLElement | null>(null);
// 2. Ref для блока контента (для анимации текста)
const contentBlockRef = ref<HTMLElement | null>(null);

// Классы-флаги для управления CSS-анимацией
const isHeadingSettled = ref(false);
const isContentVisible = ref(false);

onMounted(() => {
    // -------------------------------------------------------------------
    // 1. Наблюдатель для заголовка (about-info__heading)
    // -------------------------------------------------------------------
    if (headingRef.value) {
        const headingObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        isHeadingSettled.value = true;
                        // Можно отключить наблюдение, когда анимация сработала один раз
                        headingObserver.unobserve(entry.target);
                    }
                });
            },
            {
                // Порог: 0.8 значит, что 80% заголовка должно быть видно
                threshold: 0.8, 
            }
        );
        headingObserver.observe(headingRef.value);
    }

    // -------------------------------------------------------------------
    // 2. Наблюдатель для блока контента (about-info__block)
    // -------------------------------------------------------------------
    if (contentBlockRef.value) {
        const contentObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        isContentVisible.value = true;
                        contentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                // Порог: 0.1 значит, что как только 10% блока видно, запускаем
                threshold: 0.1, 
            }
        );
        contentObserver.observe(contentBlockRef.value);
    }
});
</script>

<template>
    <section class="about__info">
        <header
            class="about-info__heading"
            :class="{ reversed: reverse, settled: isHeadingSettled }"
            ref="headingRef"
        >
            <template v-if="!reverse">
                <component 
                    :is="iconComponent" 
                    class="about-info__icon"
                />
                <h2>{{ title }}</h2>
            </template>
            <template v-else>
                <h2>{{ title }}</h2>
                <component 
                    :is="iconComponent" 
                    class="about-info__icon"
                />
            </template>
        </header>
        <div
            class="about-info__block"
            :class="{ 'content-settled': isContentVisible }"
            ref="contentBlockRef"
            v-html="content"
        />
    </section>
</template>

<style lang='scss' scoped>
    $padding: 18px;

    .about__info {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 800px;
        gap: 14px;
    }

    .about-info {
        &__heading {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 40px;
            gap: 12px;
            padding: 4px $padding;
            border-radius: $padding;
            border-bottom: 1px solid var(--color__primary);
            clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
            z-index: 2;

            transition: clip-path $ease-duration;

            >* {
                opacity: 0;
                transform: translateY(100%);
                transition: $easing;
                transition-delay: $ease-duration;
            }

            &.reversed { justify-content: flex-end; }
            &.settled {
                clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);

                >* {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }

        &__icon {
            height: 100%;
            aspect-ratio: 1;
            color: currentColor;
        }

        &__block {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 $padding;

            &::after {
                $mask-height: 120%;
                $gradient-height: 15%;

                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: $mask-height;

                transform: translateY(0); 
                
                transition-delay: $ease-duration;
                transition: transform $anim;
                
                background: linear-gradient(
                    to top,
                    var(--color__background) 85%,
                    rgba(var(--color__background-rgb), 0) 100%
                );
                pointer-events: none;
                z-index: 1;
            }

            &.content-settled {
                &::after { transform: translateY(120%); }
            }
        }
    }
</style>
