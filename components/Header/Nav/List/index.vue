<script lang='ts' setup>
    const route = useRoute();

    type NavItem = {
        title: string;
        href: string;
    }

    const list: Array<NavItem> = [
        {
            title: 'Обо мне',
            href: '#about'
        },
        {
            title: 'Консультация',
            href: '#consulting'
        },
    ];

    const specialList: Array<NavItem> = [
        {
            title: 'Политика конфидециальности',
            href: '/privacy'
        },
        {
            title: 'Главная',
            href: '/'
        },
    ]

    const isSpecialHeader = computed(() => route.path !== '/');
</script>

<template>
    <ul class="nav-menu__list">
        <template v-if="isSpecialHeader">
            <li class="nav-menu__item" v-for="(item, index) in specialList" :key="index">
                <NuxtLink :to="item.href">
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </li>
        </template>
        <template v-else>
            <li class="nav-menu__item" v-for="(item, index) in list" :key="index">
                <NuxtLink :to="{ path: route.path, hash: item.href }">
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </li>
        </template>
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
