<script setup>
    import { useBreakpoint, useMenuStore } from '#imports';

    const { toggle } = useMenuStore();
    const { isMobile } = useBreakpoint();
</script>

<template>
    <header class="header">
        <div class="header__inner ctx">
            <NuxtLink class="header__logo" to="/">
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
        </div>
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: $header-height;

        z-index: 50;

        background: linear-gradient(
            to bottom,
            rgba(var(--color__background-rgb), .4),
            transparent
        );

        @include visual_fading-blur(2px, to top, 80%);

        >.header__inner {
            justify-content: space-between;
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
  