<script lang='ts' setup>
    import { type EducationSectionProps } from 'types/education';

    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
    const { t } = useLocale();

    const info = computed<Array<EducationSectionProps>>(() => [
        {
            heading: t.value.about.sportPsychology.heading,
            year: t.value.about.sportPsychology.year,
            info: [],
            diploma: { folder: '/diplomas/barca_sport_psychology', alt: t.value.about.sportPsychology.alt },
            diplomaLabel: t.value.about.sportPsychology.diplomaLabel
        },
    ]);
</script>

<template>
    <dl
        id="sport-psychology"
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
