<script setup>
    import { useBreakpoint } from 'hooks/useBreakpoints';

    const { isMobile } = useBreakpoint();
    const isMenuOpen = ref();
</script>

<template>
    <header class="header">
        <NuxtLink 
            class="header__logo"
            to="/"
        >
        </NuxtLink>

        <HeaderNav/>
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100vw;
        height: 60px;

        z-index: 50;

        @include visual_fading-blur(2px, to top, 80%);

        @include mobile {
            padding: 8px $padding_mobile;
        }

        @include desktop {
            padding: 8px 24px;

            @include visual_fading-blur(3px, to top, 50%);
        }
    }

    .header__logo {
        position: relative;

        height: 100%;
        width: 40px;


        background-color: black;
    }
</style>
  