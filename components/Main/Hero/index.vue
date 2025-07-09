<script lang='ts' setup>
    import { useEventStore } from 'stores/events';

    const author = ref<HTMLHeadingElement|null>(null);
    const text = ref<HTMLParagraphElement|null>(null);

    const events = useEventStore();

    onMounted(() => {
        const authorDelay = 0;
        const textDelay = .2;

        if (author.value && text.value) {
            author.value.style.setProperty('--delay', `${authorDelay}s`);
            text.value.style.setProperty('--delay', `${textDelay}s`);

            author.value.classList.add('enter');
            text.value.classList.add('enter');

            const heroSectionSettledTime = 
                authorDelay +
                textDelay +
                parseFloat(getComputedStyle(text.value).transitionDuration)
            ;

            setTimeout(() => {
                events.call('heroSectionSettled', true);
            }, parseInt((heroSectionSettledTime * 1000).toFixed(0)));
        }
    });
</script>

<template>
    <div class="text-hero">
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
$animation-delay-author_hero: 0.3s;
$offset: 10px;

.text-hero {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: $font-main;
    color: var(--color__main);

    &__author,
    &__title {
        position: relative;
        opacity: 0;
        transform: translateY(10px);

        text-align: center;
        transition: 
            transform $animation-duration,
            opacity $animation-duration
        ;

        &.enter {
            transition-delay: var(--delay);

            transform: translate(0);
            opacity: 1;
        }
    }

    &__author {
        font-size: 2rem;
        font-weight: 500;
    }

    &__title {
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: .5rem;
    }
}
</style>
