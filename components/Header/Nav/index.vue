<script setup>
    import { useBreakpoint } from 'hooks/useBreakpoints';
    import { useMenuStore } from 'stores/menu';
    
    const { isMobile } = useBreakpoint();
    const menu = useMenuStore();

    const list = [
        { title: 'Обо мне' },
        { title: 'Консультация' },
        { title: 'Контакты' },
    ];
</script>

<template>
    <nav 
        class="header__nav"
        :class="{ 'open': menu.isOpen }"
    >
        <ul class="header__navigation-list">
            <div v-if="isMobile">
                <HeaderNavLi
                    v-for="(item, index) in list"
                    v-bind="item"
                    :key="index"
                />
            </div>

            <HeaderNavLi
                v-else
                v-for="(item, index) in list"
                v-bind="item"
                :key="index"
            />

            <ChangeThemeButton />
        </ul>
    </nav>

    <HeaderNavToggleButton v-if="isMobile"/>
    <ChangeThemeButton v-else/>
</template>


<style lang="scss">
    .header__nav {
        display: flex;

        transition: transform .3s ease-in;

        @include mobile {
            position: absolute;
            right: 0;
            top: 0;

            height: 100vh;
            width: 60vw;

            padding: $header-height 16px;

            transform: translateX(100%);

            @include visual_fading-blur(3px, to right, 50%);

            &.open { transform: translateX(0); }
        }

        @include desktop { 
            position: relative;
            height: 100%;
            flex: 1;
        }
    }

    .header__navigation-list {
        @include mobile {
            position: relative;
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            >div {
                position: relative;
                width: 100%;
                flex: 1;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }
        
        @include desktop {
            position: relative;

            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
