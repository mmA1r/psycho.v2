<script lang='ts' setup>
    const { isMobile } = useBreakpoint();
    const menu = useMenuStore();
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
                    <span>Закрыть</span>
                </button>
                <div class="nav-menu__addition-block">

                </div>
            </template>
            <HeaderNavList />
        </nav>
    </div>
</template>

<style lang='scss' scoped>
    .nav-menu__wrapper {
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

        background-color: rgba(var(--color__primary-rgb), 0);
        transition: background-color $easing;
        
        .opened & {
            background-color: rgba(0,0,0, .7);
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

        color: var(--color__background);

        @include mobile {
            $w: 80%;
            position: absolute;
            top: 0;
            left: -$w;
            width: $w;

            background-color: rgba(var(--color__background-rgb), .2);

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

        background-color: rgba(var(--color__primary-rgb), .8);
        padding: 0 16px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
