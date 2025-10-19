<script lang='ts' setup>
    defineProps<{
        heading: string;
    }>();
</script>

<template>
    <section class="footer__section">
        <h2 class="footer__heading"> {{ heading }} </h2>
        <div> <slot /> </div>
    </section>
</template>

<style lang='scss' scoped>
    .footer__section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        gap: 12px;
    }
    .footer__heading {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--color__accent_light);
        font-weight: 600;
        height: 50px;
    }
</style>
