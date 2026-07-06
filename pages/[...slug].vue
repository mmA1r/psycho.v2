<script lang='ts' setup>
    const { locale } = useLocale();

    setResponseStatus(404);

    const title = computed(() => locale.value === 'ru'
        ? 'Страница не найдена'
        : 'Page not found'
    );
    const text = computed(() => locale.value === 'ru'
        ? 'Такой страницы нет или она была перенесена.'
        : 'This page does not exist or has been moved.'
    );
    const link = computed(() => locale.value === 'ru'
        ? 'На главную'
        : 'Back home'
    );

    useSeoMeta({
        title,
        robots: 'noindex, follow',
    });
</script>

<template>
    <section class="not-found">
        <div class="not-found__inner">
            <IconsAnimatedLotus class="not-found__logo" />
            <p class="not-found__code">404</p>
            <h1 class="not-found__heading">{{ title }}</h1>
            <p class="not-found__text">{{ text }}</p>
            <NuxtLink class="not-found__link" to="/">
                {{ link }}
            </NuxtLink>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    .not-found {
        position: relative;

        width: 100%;
        max-width: none !important;
        min-height: 100vh;
        min-height: 100dvh;

        display: grid;
        place-items: center;
        align-self: stretch;

        padding: 90px 24px 40px;

        background-color: var(--color__background);
    }

    .not-found__inner {
        position: relative;

        width: min(100%, 560px);
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;

        padding: 0;
        margin: auto;

        text-align: center;
        color: var(--color__primary);
    }

    .not-found__logo {
        position: relative;

        width: 72px;
        height: 72px;
    }

    .not-found__code {
        position: relative;

        color: rgba(var(--color__primary-rgb), .54);
        font-family: $font-main;
        font-size: 64px;
        line-height: 1;
        font-weight: 600;
    }

    .not-found__heading {
        position: relative;

        max-width: 560px;

        font-family: $font-main;
        font-size: 28px;
        line-height: 1.2;
        font-weight: 600;

        @include mobile {
            font-size: 24px;
        }
    }

    .not-found__text {
        position: relative;

        max-width: 520px;

        color: rgba(var(--color__primary-rgb), .72);

        @include adaptive-font(14px, 16px);
    }

    .not-found__link {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 12px 20px;
        margin-top: 8px;

        color: var(--color__background);
        background-color: var(--color__primary);
        border: 1px solid var(--color__primary);
        border-radius: 666px;

        @include adaptive-font(14px, 16px);

        @include hover {
            color: var(--color__primary);
            background-color: var(--color__background);
        }

        @include focus-visible {
            box-shadow: 0 0 0 2px rgba(var(--color__primary-rgb), .35);
        }
    }
</style>
