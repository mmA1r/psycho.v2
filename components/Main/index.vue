<script setup lang="ts">
    import { MainScrollDown } from '#components';
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
        <div class="empty" aria-hidden="true" />

        <div 
            class="main__content-wrapper"
            ref="container"
        >
            <MainLinks />
            <MainHero />
            <div aria-hidden="true"/>
        </div>

        <MainScrollDown />
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        justify-content: center;
        align-items: center;

        .empty {
            position: relative;
            height: $header-height;
            width: 100%;
        }
    }

    .main__content-wrapper {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        flex: 1;

        width: 100%;

        padding: 0 $padding-mobile;

        >* {
            &:first-child,
            &:last-child {
                flex: 1;
            }
        }
    }
</style>
  