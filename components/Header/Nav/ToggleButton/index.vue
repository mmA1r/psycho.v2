<script lang="ts" setup>
    import { useMenuStore } from 'stores/menu';
    
    const { toggle } = useMenuStore();
</script>

<template>
    <button
        class="header__toggle-button"
        @click="toggle"
    >
    </button>
</template>

<style lang='scss'>
    .header__toggle-button {
        $size: 40px;

        position: relative;
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: black;
    }
</style>
