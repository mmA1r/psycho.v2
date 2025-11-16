<script lang='ts' setup>
    const route = useRoute();

    const routeName = computed(() => route.name);
</script>

<template>
    <nav class="header__side-nav">
        <NuxtLink 
            to="/privacy"
            class="header__side-link"
            :class="{ 'active': routeName === 'privacy' }"
        >Политика конфидециальности</NuxtLink>
        <NuxtLink 
            to="/"
            class="header__side-link"
        >Главная</NuxtLink>
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
        }

        &__side-link {
            color: var(--color__primary);
            transition: color $easing;

            &.active {
                color: var(--color__accent);
            }
        }
    }
</style>
