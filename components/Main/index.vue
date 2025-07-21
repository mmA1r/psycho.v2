<script setup lang="ts">
    import { useParallax } from 'hooks/useParallax';

    const main = ref<HTMLElement|null>(null);
    const container = ref<HTMLDivElement|null>(null);

    useParallax(main, .2);
    useParallax(container, -.4);
</script>

<template>
    <section 
        class="section main"
        ref="main"
    >
        <div 
            class="main__content-wrapper"
            ref="container"
        >
            <MainHero />
            <MainLinks />
        </div>
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        justify-content: center;
        align-items: center;

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

    .main__content-wrapper {
        position: relative;

        z-index: 1;

        flex: 1;
        display: flex;

        width: 100%;
        padding: 24px;

        @include mobile {
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            &::after {
                content: '';
                display: block;
                position: relative;
            }
        }

        @include desktop {
            justify-content: space-between;
        }
    }
</style>
  