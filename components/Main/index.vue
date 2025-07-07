<script setup lang="ts">
    import { MainScrollDown } from '#components';
    import { useParallax } from 'hooks/useParallax';

    const main = ref<HTMLElement|null>(null);

    useParallax(main, .2);
</script>

<template>
    <section 
        class="section main"
        ref="main"
    >
        <MainHero/>
        <MainScrollDown />
    </section>
</template>
  
  
<style scoped lang="scss">
    .main {
        justify-content: center;
    }
</style>
  