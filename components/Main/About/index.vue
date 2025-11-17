<script lang='ts' setup>
    import { IconsEducation, IconsPerson, MainAboutEducation, MainAboutPersonal } from '#components';

    const info = [
        {
            iconComponent: IconsPerson,
            title: 'Обо мне',
            content: MainAboutPersonal
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
            padding: 58px 16px;
            gap: 36px;
        }
    }
</style>
