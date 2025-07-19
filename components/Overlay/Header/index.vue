<script setup>
    import { useMenuStore } from 'stores/menu';
    const { toggle } = useMenuStore();
</script>

<template>
    <header class="header">
        <NuxtLink
            class="header__logo"
            to="/"
        >
            <IconsAnimatedLotus />
        </NuxtLink>
        
        <OverlayHeaderNav/>

        <button 
            class="header__burger-wrapper"
            @click="toggle"
        >
            <IconsBurgerIcon />
        </button>
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        @include mobile {
            position: fixed;
            top: 0;
            left: 0;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 8px $padding_mobile;

            width: 100vw;
            height: 60px;

            z-index: 50;

            @include visual_fading-blur(2px, to top, 80%);

            background: linear-gradient(
                to bottom,
                rgba(var(--color__background-rgb), .4),
                transparent
            );
        }
    }

    .header__burger-wrapper {
        position: relative;

        width: 40px;
        height: 40px;

        padding: 8px;

        color: var(--color__primary);
    }

    .header__logo {
        position: relative;

        height: 40px;
        width: 40px;
    }
</style>
  