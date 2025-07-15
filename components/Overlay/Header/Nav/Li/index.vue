<script lang='ts' setup>
    defineProps<{
        title: string
    }>();
</script>

<template>
    <li class="header__link-wrapper">
        <div class=""></div>
        <a class="header__link">
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

        &:active {
            color: var(--color__accent);
        }

        >div {
            position: relative;

            width: 24px;
            height: 24px;
            margin-right: 8px;
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
