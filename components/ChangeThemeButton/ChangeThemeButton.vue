<script setup>
    import { useTheme } from 'hooks/useTheme';

    const { toggleTheme } = useTheme();
</script>

<template>
    <button
        class="change-theme-button"
        @click="toggleTheme"
    >
        <!-- svg -->
    </button>
</template>

<style lang="scss">
    .change-theme-button {
        $size: 40px;

        position: relative;

        width: $size;
        height: $size;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: black;
    }
</style>
