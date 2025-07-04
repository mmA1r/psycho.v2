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

        <!--<div class="header_inner">
            <div class="header__logo">MyLogo</div>

            <nav 
                v-if="!isMobile"
                class="header__nav"
            >
                <a href="#about">Обо мне</a>
                <a href="#education">Образование</a>
                <a href="#consulting">Консалтинг</a>
                <a href="#contacts">Контакты</a>
            </nav>

            <button
                v-else
                class="header__burger"
                @click="isMenuOpen = !isMenuOpen"
                aria-label="Открыть меню"
            >
            ☰
            </button>
        </div>

        <transition name="slide">
            <div
                v-if="isMenuOpen && isMobile"
                class="mobile-menu"
                @click.self="isMenuOpen = false"
            >
                <div class="mobile-menu__panel">
                    <nav class="mobile-menu__nav">
                        <a href="#about" @click="isMenuOpen = false">Обо мне</a>
                        <a href="#education" @click="isMenuOpen = false">Образование</a>
                        <a href="#consulting" @click="isMenuOpen = false">Консалтинг</a>
                        <a href="#contacts" @click="isMenuOpen = false">Контакты</a>
                    </nav>
                    <button
                        class="mobile-menu__close"
                        @click="isMenuOpen = false"
                        aria-label="Закрыть меню"
                    >
                    ✕
                    </button>
                </div>
            </div>
        </transition>-->
    </header>
</template>
  
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;

        width: 100vw;
        height: 60px;

        z-index: 50;

        @include visual_fading-blur(2px, to top, 80%);

        @include mobile {
            padding: 8px $padding_mobile;
        }

        @include desktop {
            padding: 8px 24px;
        }
    }

    .header__logo {
        position: relative;

        height: 100%;
        width: 40px;

        margin: 0 8px;
    }
</style>
  