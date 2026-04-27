<script lang='ts' setup>
    import type { AppointmentItem } from 'types/appointment';
    import { IconsClock, IconsMap, IconsPercent, IconsWallet } from '#components';

    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef, { threshold: .4 });

    const items: Array<AppointmentItem> = [
        {
            title: 'Место проведения',
            text: 'Онлайн или г. Москва, Тетеринский переулок, 12',
            icon: IconsMap,
        },
        {
            title: 'Длительность',
            text: 'Онлайн-консультация длится 55 минут',
            icon: IconsClock
        },
        {
            title: 'Стоимость',
            text: 'Стоимость одной сессии 6000 рублей или эквивалент этой суммы в евро или долларах',
            icon: IconsWallet,
            additions: [
                {
                    title: 'Правила в случае несвоевременной отмены или переноса консультации',
                    paragraph: 'Если вы отменяете или переносите консультацию менее, чем за 24 часа, то вы оплачиваете 100% от стоимости консультации'
                },
                {
                    title: 'Оплата иностранными картами',
                    paragraph: 'Оплата консультаций возможна как российскими, так и иностранными картами'
                },
            ]
        },
        {
            title: 'Акции',
            text: 'Для постоянных клиентов доступны более выгодные условия.',
            icon: IconsPercent
        },
    ];  
</script>

<template>
    <section
        id="appointment"
        ref="contentBlockRef"
        class="consulting__appointment"
        :class="{ settled: isIntersecting }"
    >
        <h3 class="consulting-appointment__heading">Запись</h3>
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
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
        }
    }

    .consulting-appointment__heading {
        opacity: 0;

        transition: opacity $anim;
        .settled & { opacity: 1; }
    }
</style>
