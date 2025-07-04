<script setup>
    import { onClickOutside, useDebounceFn } from '@vueuse/core';
    import { useBreakpoint } from 'hooks/useBreakpoints';

    const { isMobile } = useBreakpoint();
    const isMenuOpen = ref(false);
    const menuRef = ref(null);

    const list = [
        { title: 'Обо мне' },
        { title: 'Консультация' },
        { title: 'Контакты' },
    ];

    const closeMenu = useDebounceFn(() => {
        if (isMenuOpen.value) isMenuOpen.value = false
    }, 150);
    const toggleMenu = useDebounceFn(() => isMenuOpen.value = !isMenuOpen.value, 150);

    onClickOutside(menuRef, closeMenu);
</script>

<template>
    <nav
        class="header__nav" :class="{ 'menu_open': isMenuOpen, 'menu_close': !isMenuOpen }"
        ref="menuRef"
    >
        <ul>
            <HeaderNavLi
                v-for="(item, index) in list"
                v-bind="item"
                :key="index"
            />
        </ul>
    </nav>

    <HeaderNavToggleButton v-if="isMobile"/>
    <ChangeThemeButton v-else/>
</template>


<style lang="scss">
    .header__nav {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        background-color: grey;
        overflow: hidden;
        position: relative;

    @include mobile {
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 60vw;
        max-height: 50vh;
        padding: 8px $padding_mobile;
        transition:
        max-height 0.4s ease,
        padding 0.3s ease,
        mask-position 0.4s ease,
        mask-image 0.4s ease;

        mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        mask-position: top;
        mask-size: 100% 200%;
        mask-repeat: no-repeat;

        &.menu_open {
            max-height: 50vh;
            mask-position: bottom;
        }

        &.menu_close {
            max-height: 0;
            padding: 0;
            mask-position: top;
        }
    }

    @include desktop {
    }
}
</style>
