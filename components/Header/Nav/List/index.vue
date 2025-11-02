<script lang='ts' setup>
    const route = useRoute();

    const list = [
        {
            title: 'Обо мне',
            href: '#about'
        },
        {
            title: 'Консультация',
            href: '#consulting'
        },
    ]
</script>

<template>
    <ul class="nav-menu__list">
        <li class="nav-menu__item" v-for="(item, index) in list" :key="index">
            <NuxtLink :to="{ path: route.path, hash: item.href }">
                <span>{{ item.title }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

<style lang='scss' scoped>
    .nav-menu__list {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @include mobile {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }

    .nav-menu__item {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--color__primary);

        padding: 0 16px;
        font-weight: 600;

        @include mobile {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(var(--color__background-rgb), .2);
            color: var(--color__background);
        }
    }
</style>
