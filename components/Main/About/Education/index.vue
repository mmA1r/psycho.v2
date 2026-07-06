<script lang='ts' setup>
    import { type EducationSectionProps } from 'types/education';

    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
    const { t } = useLocale();
    const activePanel = ref<'education' | 'sport'>('education');

    interface EducationPanel {
        id: 'education' | 'sport';
        title: string;
        items: Array<EducationSectionProps>;
    }

    const educationItems = computed<Array<EducationSectionProps>>(() => [
        {
            heading: t.value.about.education.bachelor.heading,
            year: t.value.about.education.bachelor.year,
            info: [
                {
                    heading: t.value.about.education.bachelor.specialtyHeading,
                    text: t.value.about.education.bachelor.specialtyText
                },
                {
                    heading: t.value.about.education.bachelor.qualificationHeading,
                    text: t.value.about.education.bachelor.qualificationText
                }
            ],
            diploma: { folder: '/diplomas/bachelor_diploma', alt: t.value.about.education.bachelor.alt },
            diplomaLabel: t.value.about.education.diplomaLabel
        },
        {
            heading: t.value.about.education.training.heading,
            year: t.value.about.education.training.year,
            info: [],
            diploma: { folder: '/diplomas/training_courses', alt: t.value.about.education.training.alt },
            diplomaLabel: t.value.about.education.diplomaLabel
        },
        {
            heading: t.value.about.education.master.heading,
            year: t.value.about.education.master.year,
            info: [
                {
                    heading: t.value.about.education.master.specialtyHeading,
                    text: t.value.about.education.master.specialtyText
                },
                {
                    heading: t.value.about.education.master.qualificationHeading,
                    text: t.value.about.education.master.qualificationText
                },
            ],
            diploma: { folder: '/diplomas/master_diploma', alt: t.value.about.education.master.alt },
            diplomaLabel: t.value.about.education.diplomaLabel
        },
        {
            heading: t.value.about.education.gleCounselling.heading,
            year: t.value.about.education.gleCounselling.year,
            info: [],
            diploma: { folder: '/diplomas/gle_cert_2024', alt: t.value.about.education.gleCounselling.alt },
            diplomaLabel: t.value.about.education.diplomaLabel
        },
        {
            heading: t.value.about.education.glePsychotherapy.heading,
            year: t.value.about.education.glePsychotherapy.year,
            info: []
        },
    ]);

    const sportPsychologyItems = computed<Array<EducationSectionProps>>(() => [
        {
            heading: t.value.about.sportPsychology.heading,
            year: t.value.about.sportPsychology.year,
            info: [],
            diploma: { folder: '/diplomas/barca_sport_psychology', alt: t.value.about.sportPsychology.alt },
            diplomaLabel: t.value.about.sportPsychology.diplomaLabel
        },
    ]);

    const panels = computed<Array<EducationPanel>>(() => [
        {
            id: 'education',
            title: t.value.about.sections.education,
            items: educationItems.value
        },
        {
            id: 'sport',
            title: t.value.about.sections.sportPsychology,
            items: sportPsychologyItems.value
        },
    ]);

    const activeItems = computed<Array<EducationSectionProps>>(() => {
        const panel = panels.value.find(item => item.id === activePanel.value);

        return panel?.items ?? educationItems.value;
    });
</script>

<template>
    <section
        id="education"
        ref="contentBlockRef"
        :class="['education-block', { settled: isIntersecting }]"
    >
        <div class="education-block__switcher" role="tablist">
            <button
                v-for="panel in panels"
                :key="panel.id"
                class="education-block__control"
                :class="{ active: activePanel === panel.id }"
                type="button"
                role="tab"
                :aria-selected="activePanel === panel.id"
                @click="activePanel = panel.id"
            >
                <span>{{ panel.title }}</span>
            </button>
        </div>
        <dl class="education-block__list">
            <MainAboutEducationItem
                v-for="(item, index) in activeItems" :key="`${activePanel}-${index}`"
                :style="{ '--item-index': index }"
                v-bind="item"
            />
        </dl>
    </section>
</template>

<style lang='scss' scoped>
    .education-block {
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .education-block__switcher {
        position: relative;
        z-index: 3;

        width: fit-content;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;

        padding: 4px;
        margin-left: auto;

        border: 1px solid rgba(var(--color__primary-rgb), .22);
        border-radius: 666px;
        background-color: rgba(var(--color__primary-rgb), .04);

        @include mobile {
            position: relative;

            width: 100%;

            margin-left: 0;
        }
    }

    .education-block__control {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 140px;

        padding: 9px 16px;

        color: var(--color__primary);
        border-radius: 666px;
        overflow: hidden;
        transition:
            color var(--hover-transition-duration) ease,
            background-color var(--hover-transition-duration) ease;

        @include adaptive-font(12px, 14px);

        @include mobile {
            width: 50%;
            min-width: 0;

            padding: 9px 10px;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;

            width: 100%;
            height: 100%;

            background-color: var(--color__primary);
            clip-path: circle(0% at 50% 50%);

            transition: clip-path $easing;
        }

        &.active {
            color: var(--color__background);

            &::after {
                clip-path: circle(75% at 50% 50%);
            }
        }

        @include hover {
            color: var(--color__background);

            &::after {
                clip-path: circle(75% at 50% 50%);
            }
        }
    }

    .education-block__control > span {
        position: relative;

        z-index: 1;
    }

    .education-block__list {
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>
