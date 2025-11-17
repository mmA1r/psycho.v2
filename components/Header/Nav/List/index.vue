<script lang='ts' setup>
    import { IconsAppointment, IconsPerson } from '#components';
    
    const route = useRoute();
    const { toggle } = useMenuStore();
    const { isMobile } = useBreakpoint();

    type NavItem = {
        title: string;
        href: string;
        icon?: Component
    }

    const list: Array<NavItem> = [
        {
            title: 'Обо мне',
            href: '#about',
            icon: IconsPerson
        },
        {
            title: 'Консультация',
            href: '#consulting',
            icon: IconsAppointment
        },
    ];

    const specialList: Array<NavItem> = [
        {
            title: 'Политика конфидециальности',
            href: '/privacy',
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
                <component v-if="isMobile && item.icon" :is="item.icon" />
                <NuxtLink :to="{ path: route.path, hash: item.href }" @click="toggle">
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

        @include desktop {
            & span {
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: currentColor;
                    clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
                    transition: clip-path $easing;
                }

                @include hover {
                    &::after {
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                    }
                }
            }
        }

        @include mobile {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(var(--color__background-rgb), .2);
            color: var(--color__background);

            >svg {
                padding: 12px;
                height: 100%;
            }
        }
    }
</style>
