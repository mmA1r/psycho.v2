<script lang='ts' setup>
    import { type EducationSectionProps } from 'types/education';

    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);

    const info: Array<EducationSectionProps> = [
        {
            heading: 'Московский педагогический государственный университет',
            year: 'Год получения: 2021',
            info: [
                {
                    heading: 'Специальность:',
                    text: 'психолог-педагог'
                },
                {
                    heading: 'Квалификация:',
                    text: 'бакалавр'
                }
            ],
            diploma: { folder: '/diplomas/bachelor_diploma', alt: 'Диплом бакалавра' }
        },
        {
            heading: 'Курсы повышения квалификации «Исследования и консультативная практика в психологии»',
            year: 'Год получения: 2022',
            info: [],
            diploma: { folder: '/diplomas/training_courses', alt: 'Сертификат повышения квалификации' }
        },
        {
            heading: 'Федеральное государственное автономное образовательное учреждение высшего образования «Национальный исследовательский университет «Высшая школа экономики»',
            year: 'Год получения: 2024',
            info: [
                {
                    heading: 'Специальность:',
                    text: 'экзистенциальный анализ и логотерапия'
                },
                {
                    heading: 'Квалификация:',
                    text: 'магистр'
                },
            ],
            diploma: { folder: '/diplomas/master_diploma', alt: 'Диплом магистра' }
        },
        {
            heading: 'GLE-International Existential-analytical and logotherapeutic counselling and accompaniment',
            year: 'Год получения: 2024',
            info: [],
            diploma: { folder: '/diplomas/gle_cert_2024', alt: 'Сертификат GLE-International' }
        },
        {
            heading: 'GLE-International Existential-analytical and logotherapeutic psychotherapy',
            year: 'Годы обучения: 2025 - по наст. время',
            info: []
        },
    ];
</script>

<template>
    <dl
        ref="contentBlockRef"
        :class="['education-block', { settled: isIntersecting }]"
    >
        <MainAboutEducationItem
            v-for="(item, index) in info" :key="index"
            :style="{ '--item-index': index }"
            v-bind="item"
        />
    </dl>
</template>

<style lang='scss' scoped>
    .education-block {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>
