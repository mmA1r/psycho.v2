<script lang='ts' setup>
    const route = useRoute();

    const isSpecialHeader = computed(() => route.path !== '/');
    
    const { isMobile } = useBreakpoint();
    const { toggle } = useMenuStore();
</script>

<template>
    <header class="header">
        <div class="header__inner ctx">
            <template v-if="isSpecialHeader">
                <template v-if="!isMobile">
                    <IconsAnimatedLotus class="header__logo"/>
                    <HeaderSideContextLinks />
                </template>
                <template v-else>
                    <button
                        class="header__button"
                        @click="toggle"
                    >
                        <IconsBurger />
                    </button>
                    <IconsAnimatedLotus class="header__logo"/>
                </template>
            </template>

            <template v-else>
                <template v-if="isMobile">
                    <button
                        class="header__button"
                        @click="toggle"
                    >
                        <IconsBurger />
                    </button>
                    <IconsAnimatedLotus class="header__logo"/>
                </template>
                <template v-else>
                    <IconsAnimatedLotus class="header__logo"/>
                    <HeaderNav />
                </template>
            </template>
        </div>
        <HeaderNav v-if="isMobile"/>
    </header>
</template>

<style lang='scss' scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 60px;

        z-index: 50;

        border-radius: $brd-radius;
        background-color: rgba(var(--color__background-rgb), .15);

        @include glass(2px, $brd-radius);

        &__inner {
            z-index: 1;
            justify-content: flex-start;
            padding-top: 5px;
            padding-bottom: 5px;

            border-radius: inherit;
            border-bottom: 1px solid var(--color__primary);

            >* {
                height: 100%;
                aspect-ratio: 1;

                &:last-child {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

            >button {
                padding: 8px;
                color: var(--color__background_dark);
            }
        }
    }
</style>
