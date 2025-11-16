<script lang='ts' setup>
import type { AppointmentAdditions } from 'types/appointment';

defineProps<{ paragraps: Array<AppointmentAdditions> }>();
</script>

<template>
    <ul class="consulting__additional-info">
        <li v-for="(item, index) in paragraps" :key="index">
            <h5>{{ item.title }}</h5>
            <p>{{ item.paragraph }}</p>
        </li>
    </ul>
</template>

<style lang='scss' scoped>
    .consulting__additional-info {
        max-width: 600px;

        display: flex;
        flex-direction: column;
        gap: 20px;

        >li {
            display: flex;
            flex-direction: column;
            gap: 8px;
            
            >h5 {
                font-weight: 600;
                font-size: 18px;
            }
        }

        @include desktop {
            margin: 0 8px
        }
    }
</style>
