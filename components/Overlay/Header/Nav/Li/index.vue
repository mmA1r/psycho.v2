<script lang='ts' setup>
    import { useMenuStore } from 'stores/menu';
    import { useBreakpoint } from '#imports';

    const menu = useMenuStore();
    const { isMobile } = useBreakpoint();

    function onClick() {
        if (isMobile.value) {
            menu.toggle();
        }
    }

    defineProps<{
        title: string
        path: string
    }>();
</script>

<template>
    <li class="header__link-wrapper">
        <div v-if="isMobile">
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path></svg>
        </div>

        <a
            class="header__link"
            @click="onClick"
            tabindex="0"
        >
            {{ title }}
        </a>
    </li>
</template>

<style lang='scss' scoped>
    .header__link-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        text-align: center;

        font-family: DM Sans;
        font-size: 1.5rem;

        color: var(--color__primary);

        @include mobile {
            width: 100%;
            justify-content: flex-start;

            border-radius: .5rem;

            padding: 8px 0;

            &:focus,
            &:active {
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

        @include desktop {
            margin: 0 10px;

            &::after {
                content: '';
                display: block;

                width: 100%;
                height: 1px;

                background-color: currentColor;

                position: absolute;
                bottom: 0;
                left: 0;

                transform: scale(0);

                transition: transform var(--animation-duration);
            }

            &:hover {
                &::after {
                    transform: scale(1);
                }
            }
        }
    }

    .header__link {
        display: inline-block;
        width: 100%;

        text-decoration: none;
        text-align: left;

        flex: 1;

        @include focus-visible;
    }
</style>
