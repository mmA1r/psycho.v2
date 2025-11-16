<script lang='ts' setup>
    import type { AppointmentItem } from 'types/appointment';
    import { IconsClock, IconsMap, IconsPercent, IconsWallet } from '#components';

    const items: Array<AppointmentItem> = [
        {
            title: 'Место проведения',
            text: 'Онлайн или г. Москва, Тетеринский переулок, 1',
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
    <section class="consulting__appointment">
        <h3>Запись</h3>
        <ul>
            <MainConsultingAppointmentItem
                v-for="(item, index) in items" :key="index"
                v-bind="item"
            />
        </ul>
        <NuxtLink
            class="consulting-appointment__link"
            target="_blank"
            rel="noopener noreferrer"
            tabindex="0"
            :href="''"
        >
            <IconsTelegram />
            <span>Записаться</span>
        </NuxtLink>
    </section>
</template>

<style lang='scss' scoped>
    .consulting__appointment {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 36px;
        max-width: 990px;

        >ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            justify-items: flex-start;
            column-gap: 12px;

            @include mobile {
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
        }
    }

    .consulting-appointment__link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border-radius: 666px;
        margin-top: 12px;
        
        font-size: 20px;
        gap: 12px;

        border: 1px solid var(--color__primary);

        >svg {
            width: 24px;
            height: 24px;
        }
    }
</style>
