<script lang='ts' setup>
    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
    const data = [
        'Личностные кризисы (возрастные и социальные)',
        'Зависимости',
        'Выгорание (профессиональное и эмоциональное)',
        'Партнерские взаимоотношения',
        'Взаимоотношения с родителями',
        'Профессиональная реализация',
        'Эмоциональные проблемы',
        'Самопознание',
        'Работа с экзистенциальными данностями',
    ];
</script>

<template>
    <section 
        class="consulting-list__wrapper"
        ref="contentBlockRef"
        :class="['consulting-list__wrapper', { settled: isIntersecting }]"
    >
        <h3 class="consulting__heading_sub">Запросы, с которыми я работаю</h3>
        <ul class="consulting__list">
            <li 
                v-for="(item, index) in data" :key="index"
                :style="{ '--item-index': index+1 }"
            > {{ item }} </li>
        </ul>
    </section>
</template>

<style lang='scss' scoped>
    .consulting-list__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        >h3 {
            transform: translateX(-50%);
            opacity: 0;
            transition:
                opacity $anim,
                transform $anim
            ;
        }

        &.settled {
            >h3, & li {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
    
    .consulting__list {
        height: 100%;
        max-width: 990px;
        
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 16px;

        >li {
            display: flex;
            align-items: center;

            width: 100%;
            height: 100px;

            padding: 16px;
            border-radius: $brd-radius;
            border-left: 4px solid var(--color__accent);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

            transform: translateX(-50%);
            opacity: 0;
            transition:
                opacity $anim,
                transform $anim
            ;
            transition-delay: calc(var(--item-index) * $ease-duration / 2);
        }

        @include mobile {
            grid-template-columns: 1fr;
        }
    }
</style>
