<script lang='ts' setup>
    const route = useRoute();
    const { t } = useLocale();

    const routeName = computed(() => route.name);
</script>

<template>
    <nav class="header__side-nav">
        <NuxtLink 
            to="/privacy"
            class="header__side-link"
            :class="{ 'active': routeName === 'privacy' }"
        >{{ t.nav.privacy }}</NuxtLink>
        <NuxtLink 
            to="/"
            class="header__side-link"
        >{{ t.nav.home }}</NuxtLink>
        <HeaderControls />
        <!--<NuxtLink to="/terms" class="header__side-link">Terms</NuxtLink>-->
    </nav>
</template>

<style lang='scss' scoped>
    .header {
        &__side-nav {
            position: relative !important;
            left: 0 !important;
            transform: translateX(0) !important;

            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
            width: 100%;

            :deep(.header-controls) {
                width: auto;
                margin-left: 8px;
            }
        }

        &__side-link {
            color: var(--color__primary);

            @include desktop {
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: currentColor;
                    clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
                    transition: clip-path $easing;
                }

                @include hover {
                    &::after {
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                    }
                }
            }

            &.active {
                color: var(--color__accent);
            }
        }
    }
</style>
