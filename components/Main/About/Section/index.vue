<script lang='ts' setup>
defineProps<{
    iconComponent: Component;
    title: string;
    reverse?: boolean;
}>();

const headingRef = ref<HTMLElement | null>(null);
const isHeadingSettled = ref(false);

onMounted(() => {
    if (headingRef.value) {
        const headingObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        isHeadingSettled.value = true;
                        headingObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.8 }
        );
        headingObserver.observe(headingRef.value);
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
        <slot />
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
    }
</style>
