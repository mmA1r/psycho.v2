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
            <MainLinks />
            <MainHero />
        </div>
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        justify-content: center;
        align-items: center;

        background-image: url('../../assets/img/moss.jpg');
        background-position: center;
        background-size: cover;

        &::after {
            content: '';
            display: block;

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            pointer-events: none;

            background: rgba(var(--color__background-rgb), .1);
        }

        &::before {
            content: '';
            display: block;
            position: relative;
            height: $header-height;
            width: 100%;
        }
    }

    .main__content-wrapper {
        position: relative;

        flex: 1;

        display: grid;
        grid-template-rows: 1fr auto 1fr;
        justify-items: start;
        align-items: center;

        width: 100%;

        padding: 0 $padding-mobile;

        &::after {
            content: '';
            display: block;
            position: relative;
        }
    }
</style>
  