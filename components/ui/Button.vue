<script lang='ts' setup>
defineProps<{

}>()
</script>

<template>
    <button
        class="button"
        ontouchstart=""
    >
        <slot />
    </button>
</template>

<style lang='scss' scoped>
    .button {
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--color__primary);
        background-color: transparent;

        border-radius: 50%;
        border: 1px solid currentColor;

        padding: 8px;

        overflow: hidden;
        transition: color $easing;

        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        -webkit-user-select: none;
        user-select: none;
        outline: none;

        >* { z-index: 2 }

        &::after, &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--color__primary);
            pointer-events: none;
        }

        &::after {
            transition: clip-path $easing;
            clip-path: circle(0% at 50% 50%);
            background-color: var(--color__primary);
            z-index: 0 !important;
        }

        &::before {
            opacity: 0;
            background-color: var(--color__background);
            z-index: 1 !important;
        }

        &:active {
            &::before {
                opacity: .4;
            }
        }

        @include hover {
            color: var(--color__background);
            &::after {
                clip-path: circle(50% at 50% 50%);
            }
        }

        @include focus-visible {
            box-shadow: 0 0 0 2px rgba(0,0,0, .5);
        }
    }
</style>
