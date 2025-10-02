<script lang='ts' setup>
    import { useTheme } from 'hooks/useTheme';
    import { useWait } from 'hooks/useWait';

    const { toggleTheme, theme } = useTheme();
    const { wait } = useWait();

    const isAnimating = ref<boolean>(false);

    function onClick() {
        isAnimating.value = true;
        toggleTheme();

        wait(300);

        isAnimating.value = false;
    }
</script>

<template>
    <div>

    </div>
</template>

<style lang='scss' scoped>

</style>
