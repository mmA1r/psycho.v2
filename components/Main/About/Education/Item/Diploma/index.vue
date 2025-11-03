<script lang='ts' setup>
    defineProps<{
        src: string;
        alt?: string;
    }>();
</script>

<template>
    <div class="diploma-wrapper">
        <NuxtImg 
            :src="src" 
            :alt="alt" 
            format="webp" 
            loading="eager"
            placeholder 
        />
    </div>
</template>

<style lang='scss' scoped>
    .diploma-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        >img {
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
</style>
