<script setup>
    import { ref } from 'vue';
    import { useBreakpoint } from 'hooks/useBreakpoints';

    const { isMobile } = useBreakpoint();
    const isMenuOpen = ref();
</script>

<template>
    <header class="header">
        <div class="header_inner">
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
        </transition>
    </header>
  </template>
  
<style lang="scss" scoped>
    .header {
        color: #d4d2e7;

        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 50px;

        z-index: 50;
    }

    .header_inner {
        $padding: 16px;

        position: relative;

        height: 100%;
        width: calc(100% - calc(2 * $padding));

        padding: 0 $padding;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &::before {
            content: "";
            
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
            z-index: 0;

            width: 100%;
            height: 100%;

            -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);

            mask-image: linear-gradient(to top, transparent 0%, black 80%);
            -webkit-mask-image: linear-gradient(to top, transparent 0%, black 80%);
        }
    }

    .header__logo {
        position: relative;
        z-index: 1;
        font-weight: bold;
        font-size: 1.5rem;
    }

    .header__nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 24px;
        a {
            text-decoration: none;
            color: var(--text-base);
            font-weight: 500;
            &:hover {
                opacity: 0.7;
            }
        }
    }

    .header__burger {
        position: relative;
        height: 100%;

        font-size: 1.8rem;
        background: none;
        border: none;
        cursor: pointer;
    }

    .mobile-menu {
        position: absolute;
        top: 0; right: 0;

        width: 75vw;
        height: 100vh;
        backdrop-filter: blur(3px);
    }

    .mobile-menu__panel {
        position: relative;
        left: 0;
        top: 0;
        width: 75vw;
        height: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
    }

    .mobile-menu__nav {
        position: relative;

        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 16px 16px 0 0;

        a {
            position: relative;

            font-size: 1.2rem;
            text-decoration: none;
            font-weight: 600;

            text-align: end;
            line-height: 40px;
            height: 40px;

            &:hover {
                color: var(--color-primary);
            }
        }
    }

    .mobile-menu__close {
        position: relative;

        min-width: 40px;
        min-height: 40px;
        text-align: center;

        font-size: 1.5rem;
        margin: 16px 16px 0 0;

        cursor: pointer;
    }

    .slide-enter-from, .slide-leave-to {
        transform: translateX(100%);
    }
    .slide-enter-to, .slide-leave-from {
        transform: translateX(0%);
    }
    .slide-enter-active, .slide-leave-active {
        transition: transform 0.3s ease;
    }
</style>
  