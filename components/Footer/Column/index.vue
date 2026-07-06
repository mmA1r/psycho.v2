<script lang='ts' setup>
    defineProps<{
        heading: string;
    }>();
</script>

<template>
    <section class="footer__section">
        <h2 class="footer__heading"> {{ heading }} </h2>
        <div class="footer__section-content"> <slot /> </div>
    </section>
</template>

<style lang='scss' scoped>
    .footer__section {
        position: relative;

        height: 100%;

        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;

        @include mobile {
            align-items: flex-start;
        }
    }

    .footer__heading {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: var(--color__accent_light);
        font-weight: 600;

        @include adaptive-font(13px, 14px);
    }

    .footer__section-content {
        position: relative;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
</style>
