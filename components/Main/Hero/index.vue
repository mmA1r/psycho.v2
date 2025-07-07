<script lang='ts' setup>
    import { useEventStore } from 'stores/events';

    const hero = ref<HTMLElement|null>(null);
    const author = ref<HTMLHeadingElement|null>(null);
    const text = ref<HTMLParagraphElement|null>(null);

    const events = useEventStore();

    useParallax(hero, -.4);

    onMounted(() => {
        const authorDelay = 0;
        const textDelay = .4;

        if (author.value && text.value) {
            author.value.style.animationDelay = `${authorDelay}s`;
            text.value.style.animationDelay = `${textDelay}s`;

            const heroSectionSettledTime = 
                authorDelay +
                textDelay +
                parseFloat(getComputedStyle(text.value).animationDuration)
            ;

            setTimeout(() => {
                events.call('heroSectionSettled', true);
            }, parseInt((heroSectionSettledTime * 1000).toFixed(0)));
        }
    });
</script>

<template>
    <div
        class="text-hero"
        ref="hero"
    >
        <h1
            class="text-hero__author"
            ref="author"
        >
            Екатерина Матвеева
        </h1>
        <p
            class="text-hero__title"
            ref="text"
        >
            Исследуй себя и этот мир вместе со мной
        </p>
    </div>
</template>

<style lang='scss' scoped>
$animation-delay-title_hero: 0s;
$animation-delay-author_hero: 0.3s;
$offset: 10px;

.text-hero {
    position: absolute;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 $padding_mobile;

    font-family: $font-main;
    color: var(--color__accent);

    &__author,
    &__title {
        position: relative;
        opacity: 0;

        text-align: center;

        transform: translateY($offset);
        animation: fadeInUp $animation-duration ease-out forwards;
    }

    &__author {
        font-size: 2rem;
        font-weight: 500;
    }

    &__title {
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: .5rem;
        animation-delay: $animation-delay-author_hero;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY($offset);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
