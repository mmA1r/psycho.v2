<script lang='ts' setup>
    const { links } = useSocialLinks();
</script>

<template>
    <div class="footer__main">
        <div class="footer__logo">
            <!--<IconsAnimatedLotus />-->
            <span>Екатерина Матвеева</span>
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
        <span class="footer__rights">
            © 2025 Екатерина Матвеева.
        </span>
    </div>
</template>

<style lang='scss' scoped>
    .footer {
        &__logo {
            display: flex;
            align-items: center;
            color: var(--color__background);

            >a {
                width: 50px;
                height: 50px;
            }

            >span {
                color: var(--color__accent_light);
                height: fit-content;
                margin-left: 8px;
                font-weight: 600;
            }
        }
        
        &__links {
            width: 100%;

            >ul {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 12px;
            }
        }

        &__rights {
            font-size: 12px;
            color: rgba(var(--color__background-rgb), .4);
        }
    }
</style>
