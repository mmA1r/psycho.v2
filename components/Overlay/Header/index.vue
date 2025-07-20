<script setup>
    import { useBreakpoint, useMenuStore } from '#imports';

    const { toggle } = useMenuStore();
    const { isMobile } = useBreakpoint();
</script>

<template>
    <header class="header">
        <NuxtLink
            class="header__logo"
            to="/"
        >
            <IconsAnimatedLotus />
        </NuxtLink>

        <template v-if="isMobile">
            <button
                class="header__burger-wrapper"
                tabindex="0"
                @click="toggle"
            >
                <IconsBurgerIcon />
            </button>

            <OverlayHeaderNav />
        </template>

        <template v-else>
            <OverlayHeaderNav />
            <OverlayHeaderChangeThemeButton />
        </template>
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: $header-height;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @include visual_fading-blur(2px, to top, 80%);

        z-index: 50;

        background: linear-gradient(
            to bottom,
            rgba(var(--color__background-rgb), .4),
            transparent
        );

        @include mobile {
            padding: 8px $padding_mobile;
        }

        @include desktop {
            padding: 8px 24px;
        }
    }

    .header__burger-wrapper {
        position: relative;

        width: 44px;
        height: 44px;

        padding: 8px;

        z-index: 1;

        color: var(--color__primary);

        @include focus-visible;
    }

    .header__logo {
        position: relative;

        height: 44px;
        width: 44px;

        @include focus-visible;
    }
</style>
  