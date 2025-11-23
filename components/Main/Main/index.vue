<script setup lang="ts">
    import { useParallax } from 'hooks/useParallax';

    const main = ref<HTMLElement|null>(null);
    const container = ref<HTMLDivElement|null>(null);

    useParallax(main, .2);
    useParallax(container, -.4);
</script>

<template>
    <section class="section main" ref="main">
        <div class="main__inner" ref="container">
            <MainMainHero />
            <MainMainLinks />
            <MainMainScrollDown />
        </div>
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 1;

        &::after {
            content: '';
            display: block;

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            pointer-events: none;

            background: rgba(var(--color__background-rgb), .4);
        }

        &::before {
            $height: 15vh;

            content: '';
            display: block;
            position: absolute;

            bottom: 0;
            left: 0;

            width: 100%;
            height: $height;

            pointer-events: none;

            background: linear-gradient(
                to top,
                rgba(var(--color__background-rgb)) 5%,
                rgba(var(--color__background-rgb), .5),
                transparent
            );
        }

        @include mobile {
            @include bg-image('/main_mobile', 768);
        }

        @include desktop {
            @include bg-image('/main_desktop', 1024);
            background-size: contain;
        }
    }

    .main__inner {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        z-index: 2;

        padding: 70px 24px 0 24px;

        @include mobile {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
  