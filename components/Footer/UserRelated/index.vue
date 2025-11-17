<script lang='ts' setup>
    const links = [{
        tilte: 'Политика конфидециальности',
        href: '/privacy'
    }]
</script>

<template>
    <nav class="footer__nav_user">
        <ul>
            <li v-for="(item, index) in links" :key="index">
                <NuxtLink :to="item.href">
                    <span>{{ item.tilte }}</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>
    .footer__nav_user {
        display: flex;
        flex-direction: column;
        color: var(--color__background);

        transition: color $easing;

        & li {
            display: flex;
            align-items: center;
        }

        @include hover {
            color: var(--color__accent);
        }
    }
</style>
