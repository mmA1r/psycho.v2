<script setup lang="ts">
    import { useParallax } from 'hooks/useParallax';

    const main = ref<HTMLElement|null>(null);
    const container = ref<HTMLDivElement|null>(null);

    useParallax(main, .2);
    useParallax(container, -.4);
</script>

<template>
    <section class="section main" ref="main">
        <div class="main__inner ctx" ref="container">
            <MainHero />
            <MainLinks />
        </div>
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        display: flex;
        flex-direction: column;

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
            content: '';
            display: block;
            position: relative;
            height: $header-height;
            width: 100%;
        }

        @include mobile {
            @include bg-image('/assets/img/main/main_mobile');
        }

        @include desktop {
            @include bg-image('/assets/img/main/main_desktop');
            background-size: contain;
        }
    }

    .main__inner {
        flex-grow: 1;
        z-index: 1;

        justify-content: space-between;

        @include mobile {
            flex-direction: column;
            align-items: flex-start;

            &::after {
                content: '';
                display: block;
                position: relative;
            }
        }
    }
</style>
  