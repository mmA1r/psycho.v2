<script lang='ts' setup>
    import { MainConsultingAppointmentItemAdditions } from '#components';
    import { type AppointmentItem } from 'types/appointment';

    const props = defineProps<AppointmentItem>();

    const modal = useModalStore();

    function showAdditions() {
        modal.open(MainConsultingAppointmentItemAdditions, { paragraps: props.additions });
    }
</script>

<template>
    <li class="consulting__appointment-item">
        <component :is="icon" />
        <div class="appointment-item__info">
            <h4>{{ title }}</h4>
            <p>{{ text }}</p>
            <button
                v-if="additions"
                @click="showAdditions"
            >Подробнее</button>
        </div>
    </li>
</template>

<style lang='scss' scoped>
    .consulting__appointment-item {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;

        >svg {
            $s: 50px;
            min-width: $s;
            min-height: $s;
            width: $s;
            height: $s;
        }
    }

    .appointment-item__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        gap: 4px;

        >h4 { font-weight: 600; }

        >button {
            margin-top: 4px;
            font-size: 14px;
            color: var(--color__accent);
        }
    }
</style>
