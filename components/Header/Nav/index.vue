<script lang='ts' setup>
    const { isMobile } = useBreakpoint();
    const menu = useMenuStore();
    const { t } = useLocale();
    const isOpen = computed(() => menu.isOpen);
</script>

<template>
    <div class="nav-menu__wrapper" :class="{ opened: isOpen && isMobile }">
        <div
            v-if="isMobile"
            @click="menu.toggle"
            class="nav-menu__background"
        />
        <nav class="nav-menu__nav">
            <template v-if="isMobile">
                <button
                class="nav-menu__close"
                @click="menu.toggle"
                >
                    <IconsArrow class="nav-menu__icon"/>
                    <span>{{ t.nav.close }}</span>
                </button>
                <div class="nav-menu__addition-block">
                    <HeaderControls />
                </div>
            </template>
            <HeaderNavList />
        </nav>
        <HeaderControls
            v-if="!isMobile"
            class="nav-menu__controls"
        />
    </div>
</template>

<style lang='scss' scoped>
    .nav-menu__wrapper {
        position: relative;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        z-index: 51;

        @include mobile {
            position: absolute;
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
            pointer-events: none;

            &.opened { pointer-events: all; }
        }
    }

    .nav-menu__background {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0);
        transition: background-color $easing;
        
        .opened & {
            background-color: rgba(0, 0, 0, .58);
            @include glass();
        }
    }

    .nav-menu__nav {
        position: relative;
        width: 100%;
        height: 100%;
        
        transition: transform $easing;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        border-bottom-right-radius: $brd-radius;
        border-top-right-radius: $brd-radius;

        color: var(--color__primary);

        @include mobile {
            $w: 80%;
            position: absolute;
            top: 0;
            left: -$w;

            width: $w;
            max-width: 320px;

            background-color: rgba(var(--color__background-rgb), .82);
            border: 1px solid rgba(var(--color__primary-rgb), .14);
            box-shadow: 0 18px 42px rgba(0, 0, 0, .2);
            backdrop-filter: blur(18px);

            >* { margin: 4px 0; }

            .opened & {
                transform: translateX(100%);
            }
        }
    }

    .nav-menu__close {
        width: 100%;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 16px;

        color: var(--color__primary);

        >span {
            display: flex;
            height: 24px;
            margin: 0 8px;
        }
    }

    .nav-menu__icon {
        $size: 24px;

        width: $size;
        height: $size;
    }

    .nav-menu__addition-block {
        width: 100%;
        height: 60px;

        padding: 0 16px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgba(var(--color__primary-rgb), .08);
        border-top: 1px solid rgba(var(--color__primary-rgb), .12);
        border-bottom: 1px solid rgba(var(--color__primary-rgb), .12);

        :deep(.header-controls) {
            width: 100%;

            @include mobile {
                display: grid;
                grid-template-columns: 52px 52px;
                justify-content: space-between;
                justify-items: center;
            }
        }

        :deep(button) {
            color: var(--color__primary);
        }
    }

    .nav-menu__controls {
        position: absolute;
        top: 50%;
        right: 36px;
        z-index: 2;

        transform: translateY(-50%);
    }
</style>
