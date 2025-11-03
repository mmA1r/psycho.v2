<script lang='ts' setup>
    import { IconsEducation, IconsPerson, MainAboutEducation } from '#components';

    const info = [
        {
            iconComponent: IconsPerson,
            title: 'Обо мне',
        },
        {
            iconComponent: IconsEducation,
            title: 'Образование',
            content: MainAboutEducation,
            reverse: true
        }
    ];
</script>

<template>
    <article id="about" class="about section">
        <div class="about__inner ctx">
            <MainAboutSection
                v-for="(item, index) in info":key="index"
                :icon-component="item.iconComponent"
                :title="item.title"
                :reverse="item.reverse"
            >
                <component v-if="item.content" :is="item.content"/>
            </MainAboutSection>
        </div>
    </article>
</template>

<style lang='scss' scoped>
    .about {
        background-color: var(--color__background);
        z-index: 1;
    }

    .about__inner {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 80px 36px;
        
        @include mobile {
            padding: 44px 16px;
            gap: 36px;
        }
    }

    .education-block__list {
    display: grid;
    grid-template-columns: 1fr; // Или 2 колонки на десктопе
    gap: 20px;
    list-style: none;
    padding: 0;
}

.education-block__item {
    padding: 15px 20px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-card-background);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.education-block__year {
    // Вынесение года вправо (Flexbox)
    order: -1; 
    align-self: flex-start;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: var(--color-accent);
    color: white;
    font-weight: 700;
}

.education-block__item {
    display: flex;
    flex-direction: column;
}
</style>
