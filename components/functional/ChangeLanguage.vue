<script lang='ts' setup>
    const { t, toggleLocale } = useLocale();
</script>

<template>
    <button
        class="change-language-button"
        type="button"
        :aria-label="t.language.ariaLabel"
        @click="toggleLocale"
    >
        <IconsLanguage class="change-language-button__icon" />
        <span>{{ t.language.short }}</span>
    </button>
</template>

<style lang='scss' scoped>
    .change-language-button {
        position: relative;

        width: 52px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        padding: 6px 8px;

        color: var(--color__primary);
        border: 1px solid currentColor;
        border-radius: 666px;
        overflow: hidden;
        transition:
            color var(--hover-transition-duration) ease,
            background-color var(--hover-transition-duration) ease,
            border-color var(--hover-transition-duration) ease;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;

            width: 100%;
            height: 100%;

            background-color: var(--color__primary);
            clip-path: circle(0% at 50% 50%);

            transition: clip-path $easing;
        }

        >* {
            z-index: 1;
        }

        >span {
            font-size: 11px;
            line-height: 1;
            font-weight: 600;
        }

        @include hover {
            color: var(--color__background);

            &::after {
                clip-path: circle(60% at 50% 50%);
            }
        }

        @include focus-visible {
            box-shadow: 0 0 0 2px rgba(var(--color__primary-rgb), .35);
        }
    }

    .change-language-button__icon {
        width: 18px;
        height: 18px;
    }
</style>
