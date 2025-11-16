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
            diplomaImage: '/diplomas/lonely_rooftop_sunset_by_bogi380_djp6cxx-fullview.jpg'
        },
        {
            heading: 'Курсы повышения квалификации «Исследования и консультативная практика в психологии»',
            year: 'Год получения: 2022',
            info: []
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
            ]
        },
        {
            heading: 'GLE-International  Existential-analytical and logotherapeutic counselling and accompaniment',
            year: 'Год получения: 2024',
            info: []
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
