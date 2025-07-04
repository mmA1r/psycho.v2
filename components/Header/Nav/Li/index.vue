<script lang='ts' setup>
    defineProps<{
        title: string
    }>();
</script>

<template>
    <li>
        <a>
            {{ title }}
        </a>
    </li>
</template>

<style lang='scss' scoped>

</style>
