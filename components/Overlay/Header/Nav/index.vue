<script lang="ts" setup>
    import { onClickOutside } from '@vueuse/core'
    import { useBreakpoint } from 'hooks/useBreakpoints';
    import { useMenuStore } from 'stores/menu';

    const nav = ref<HTMLElement|null>(null);
    const { isMobile } = useBreakpoint();
    const menu = useMenuStore();

    onClickOutside(nav, () => {
        if (menu.isOpen && isMobile.value) {
            menu.toggle();
        }
    });

    const list = [
        { title: 'Обо мне', path: 'about' },
        { title: 'Консультация', path: 'consulting' },
        { title: 'Контакты', path: 'contacts' },
    ];
</script>

<template>
    <nav 
        ref="nav"
        class="header__nav"
        :class="{ 'open': menu.isOpen }"
    >
        <ul class="header__navigation-list">
            <OverlayHeaderChangeThemeButton v-if="isMobile" />

            <template v-if="isMobile">
                <div>
                    <OverlayHeaderNavLi
                        v-for="(item, index) in list"
                        v-bind="item"
                        :key="index"
                    />
                </div>
            </template>

            <template v-else>
                <OverlayHeaderNavLi
                    v-for="(item, index) in list"
                    v-bind="item"
                    :key="index"
                />
            </template>
        </ul>
    </nav>
</template>


<style lang="scss">
    .header__nav {
        display: flex;

        transition: transform .3s ease-in;

        @include mobile {
            position: absolute;
            right: 0;
            top: 0;

            height: 100vh;
            width: 60vw;

            padding: $header-height 16px;

            transform: translateX(100%);

            background: linear-gradient(to right, transparent, rgba(var(--color__background-rgb), 0.5) 100%);

            @include visual_fading-blur(3px, to right, 30%);

            &.open { transform: translateX(0); }
        }

        @include desktop { 
            position: relative;
            height: 100%;
            flex: 1;
        }
    }

    .header__navigation-list {
        @include mobile {
            position: relative;
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;

            padding-top: 12px;

            >div {
                position: relative;
                width: 100%;
                flex: 1;

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
        }
        
        @include desktop {
            position: relative;

            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
