<script lang='ts' setup>
    const { links } = useSocialLinks();
    const { t } = useLocale();
</script>

<template>
    <div class="footer__main">
        <div class="footer__logo">
            <IconsAnimatedLotus />
            <span>{{ t.hero.name }}</span>
        </div>
        <nav class="footer__links">
            <ul>
                <li v-for="(item, index) in links" :key="index">
                    <a
                        class="footer__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabindex="0"
                        :href="item.href"
                    >
                        <UiButton :is-reverse="true">
                            <component :is="item.component"/>
                        </UiButton>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang='scss' scoped>
    .footer__main {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 28px;

        @include mobile {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }
    }

    .footer__logo {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        color: var(--color__background);
    }

    .footer__logo > a {
        position: relative;

        width: 50px;
        height: 50px;
    }

    .footer__logo > span {
        position: relative;

        color: var(--color__accent_light);
        font-weight: 600;
    }
    
    .footer__links {
        position: relative;

        width: auto;
    }

    .footer__links > ul {
        position: relative;

        width: auto;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
    }
</style>
