<script lang='ts' setup>
    import { useMenuStore } from 'stores/menu';

    const menu = useMenuStore();

    defineProps<{
        title: string
        path: string
    }>();
</script>

<template>
    <li class="header__link-wrapper">
        <div>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
        </div>
        <a
            class="header__link"
            @click="menu.toggle"
        >
            {{ title }}
        </a>
    </li>
</template>

<style lang='scss' scoped>
    .header__link-wrapper {
        position: relative;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        text-align: center;

        font-family: DM Sans;
        font-size: 1.5rem;

        color: var(--color__primary);
        border-radius: .5rem;

        padding: 8px 0;

        &:hover,
        &:focus {
            background: rgba(var(--color__primary-rgb), .5);
        }

        >div {
            position: relative;

            width: 14px;
            height: 14px;
            margin-right: 6px;
            margin-top: 1px;

            display: flex;
            align-items: center;
            justify-content: center;            
        }
    }

    .header__link {
        display: inline-block;
        width: 100%;

        text-decoration: none;
        text-align: left;



        flex: 1;
    }
</style>
