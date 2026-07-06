<script lang='ts' setup>
    const { t } = useLocale();

    const links = computed(() => [{
        title: t.value.nav.privacy,
        href: '/privacy'
    }]);
</script>

<template>
    <nav class="footer__nav_user">
        <ul>
            <li v-for="(item, index) in links" :key="index">
                <NuxtLink :to="item.href">
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>
    .footer__nav_user {
        position: relative;

        display: flex;
        flex-direction: column;

        color: var(--color__background);
    }

    .footer__nav_user li {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .footer__nav_user a {
        position: relative;

        color: inherit;
        transition: color var(--hover-transition-duration) ease;
        
        @include hover {
            color: var(--color__accent_light);
        }
    }
</style>
