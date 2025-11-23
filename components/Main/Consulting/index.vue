<script lang='ts' setup>
    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
</script>

<template>
    <section id="consulting" class="consulting section">
        <div class="consulting__inner ctx">
            <header
                ref="contentBlockRef"
                :class="['consulting__heading', { settled: isIntersecting }]"
            ><h2>Консультация</h2></header>
            <MainConsultingList />
            <MainConsultingInfo />
            <MainConsultingAppointment />
        </div>
    </section>
</template>

<style lang='scss' scoped>
    .consulting {
        min-height: auto;

        &__inner {
            flex-direction: column;
            gap: 44px;
            padding: 80px 36px;

            @include mobile {
                padding: 58px 16px;
                gap: 24px;
            }
        }
    }

    .consulting__heading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity $anim, transform $anim;
        transform: translateY(100%);
        opacity: 0;

        &.settled {
            transform: translateY(0);
            opacity: 1;
        }

        >h2 { font-size: 1.5em; font-family: $font-main; }
    }
</style>
