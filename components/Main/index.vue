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

            background: rgba(var(--color__background-rgb), .4);
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
        z-index: 1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;
        padding: 24px $padding-mobile;

        &::after {
            content: '';
            display: block;
            position: relative;
        }
    }
</style>
  