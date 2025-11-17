<script lang='ts' setup>
    import { useEventStore } from 'stores/events';

    const events = useEventStore();
    const route = useRoute();
    const { isMobile } = useBreakpoint();

    const hero = ref<HTMLDivElement|null>(null);

    onMounted(() => {
        let delay = 0;

        if (hero.value) {
            (Array.from(hero.value.children) as HTMLElement[])
                .forEach(child => {
                    child.style.setProperty('--delay', `${delay}s`);
                    child.classList.add('settled');
                    delay += .2;
                })
            ;
        }

        setTimeout(() => {
            events.call('heroSectionSettled', true);
        }, parseInt((delay * 1000).toFixed(0)));
    });
</script>

<template>
    <div 
        class="text-hero"
        ref="hero"
    >
        <h1 class="text-hero__author">
            Екатерина Матвеева
        </h1>
        <p class="text-hero__title">
            Исследуй себя и этот мир вместе со мной
        </p>
        <FunctionalAppointmentLink v-if="!isMobile"/>
    </div>
</template>

<style lang='scss' scoped>
    $animation-delay-author_hero: 0.3s;
    $offset: 10px;

    .text-hero {
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: $font-main;
        color: var(--color__primary);
        text-align: center;

        >* {
            position: relative;
            opacity: 0;
            transform: translateY(10px);

            transition: 
                transform $anim-duration,
                opacity $anim-duration
            ;

            &.settled {
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

        @include mobile {
            width: 100%;
            align-items: center;
        }

        @include desktop {
            align-items: flex-start;
            //padding-left: 10vw;

            &__author,
            &__title {
                text-align: left;
            }

            &__author {
                font-size: 3rem;
            }

            &__title {
                font-size: 2rem;
            }
        }
    }
</style>
