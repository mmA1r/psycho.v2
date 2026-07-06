<script lang='ts' setup>
    import type { AppointmentItem } from 'types/appointment';
    import { IconsClock, IconsOnline, IconsPercent, IconsWallet } from '#components';

    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef, { threshold: .4 });
    const { t } = useLocale();

    const items = computed<Array<AppointmentItem>>(() => [
        {
            title: t.value.consulting.appointment.placeTitle,
            text: t.value.consulting.appointment.placeText,
            icon: IconsOnline,
        },
        {
            title: t.value.consulting.appointment.durationTitle,
            text: t.value.consulting.appointment.durationText,
            icon: IconsClock
        },
        {
            title: t.value.consulting.appointment.costTitle,
            text: t.value.consulting.appointment.costText,
            icon: IconsWallet,
            additions: [
                {
                    title: t.value.consulting.appointment.cancelTitle,
                    paragraph: t.value.consulting.appointment.cancelText
                },
                {
                    title: t.value.consulting.appointment.paymentTitle,
                    paragraph: t.value.consulting.appointment.paymentText
                },
            ]
        },
        {
            title: t.value.consulting.appointment.discountTitle,
            text: t.value.consulting.appointment.discountText,
            icon: IconsPercent
        },
    ]);
</script>

<template>
    <section
        id="appointment"
        ref="contentBlockRef"
        class="consulting__appointment"
        :class="{ settled: isIntersecting }"
    >
        <h3 class="consulting-appointment__heading">{{ t.consulting.appointment.heading }}</h3>
        <ul>
            <MainConsultingAppointmentItem
                v-for="(item, index) in items" :key="index"
                :style="{ '--item-index': index }"
                v-bind="item"
            />
        </ul>
        <FunctionalAppointmentLink />
    </section>
</template>

<style lang='scss' scoped>
    .consulting__appointment {
        position: relative;

        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 36px;
        max-width: 990px;

        &.settled {
            & li {
                transform: translateX(0);
                opacity: 1;
            }
        }

        >ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            justify-items: flex-start;
            column-gap: 12px;

            >li {
                transform: translateX(-50%);
                opacity: 0;
                transition:
                    opacity $anim,
                    transform $anim
                ;
                transition-delay: calc(var(--item-index) * $ease-duration / 2);
            }

            @include mobile {
                width: 100%;

                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 24px;

                >li {
                    width: 100%;

                    transform: translateY(24px);
                }
            }
        }

        &.settled > ul > li {
            @include mobile {
                transform: translateY(0);
            }
        }
    }

    .consulting-appointment__heading {
        opacity: 0;

        transition: opacity $anim;
        .settled & { opacity: 1; }
    }
</style>
