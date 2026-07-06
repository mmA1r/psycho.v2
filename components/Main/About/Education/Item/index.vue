<script lang='ts' setup>
import { type EducationSectionProps, type Diploma } from 'types/education';
import { FunctionalImage } from '#components';

defineProps<EducationSectionProps>();

const modal = useModalStore();
const { t } = useLocale();

function showDiploma(diploma: Diploma) {
    modal.open(FunctionalImage, diploma);
}
</script>

<template>
    <div 
        :class="['education-block__item', { clickable: diploma }]"
        @click="diploma ? showDiploma(diploma) : () => {}"
    >
        <dt class="education-block__heading">{{ heading }}</dt>
        <dd
            v-for="item in info"
            class="education-block__info"
        >
            <strong>{{ item.heading }}</strong>
            {{ item.text }}
        </dd>
        <dd class="education-block__year"><span>{{ year }}</span><span v-if="diploma" class="education-block__show-image">{{ diplomaLabel ?? t.about.education.diplomaLabel }}</span></dd>
    </div>
</template>

<style lang='scss' scoped>
    .education-block {
        &__item {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            border-radius: $brd-radius;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);


            opacity: 0;
            transform: translateY(100%);

            transition: 
                opacity $easing,
                transform $easing
            ;
            transition-delay: calc(var(--item-index) * $ease-duration / 2);

            &.clickable {
                cursor: pointer;
            }

            .settled & {
                opacity: 1;
                transform: translateY(0);
            }
        }

        &__heading {
            margin-bottom: 4px;
            font-weight: 600;
            @include adaptive-font(16px, 18px);
        }

        &__info { @include adaptive-font(14px, 16px); }

        &__year {
            margin-top: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include adaptive-font(12px, 14px);
        }

        &__show-image { color: var(--color__accent); }

        & strong {
            font-weight: 600;
        }
    }
</style>
