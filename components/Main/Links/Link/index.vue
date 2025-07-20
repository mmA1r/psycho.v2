<script lang='ts' setup>
    defineProps({
        href: { type: String, required: true },
        component: { type: [Object, Function], required: true },
    });
</script>

<template>
    <div class="main__link-wrapper">
        <a 
            class="main__link"
            target="_blank"
            rel="noopener noreferrer"
            tabindex="0"
            :href="href"
        >
            <div class="main__link-svg-wrapper">
                <component :is="component"/>
            </div>
        </a>
    </div>
</template>

<style lang='scss' scoped>
    $line-height: 10px;

    .main__link-wrapper {
        position: relative;
        width: 40px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        opacity: 0;
        transform: translateY(10px);

        transition: 
            opacity $animation-duration ease,
            transform $animation-duration ease
        ;

        &::after, &::before {
            content: '';
            display: block;
            position: relative;

            width: 1px;
            height: $line-height;

            transition: clip-path $animation-duration ease;

            background-color: var(--color__primary);
        }

        &:first-child {
            &::before {
                height: calc($line-height * 2);
            }
        }
        &:last-child {
            &::after {
                height: calc($line-height * 2);
            }
        }

        &::after { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
        &::before { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); }

        &.enter {
            opacity: 1;
            transform: translateY(0);

            &::after {
                transition-delay: $animation-duration;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            &::before {
                transition-delay: $animation-duration;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
    }

    .main__link {
        position: relative;
        width: 30px;
        height: 30px;

        border-radius: 50%;

        @include focus-visible;
    }

    .main__link-svg-wrapper {
        position: relative;

        width: 100%;
        height: 100%;

        padding: 4px;

        color: var(--color__primary);

        border-radius: 50%;
        border: 1px solid currentColor;

        overflow: hidden;

        >svg { z-index: 1; position: relative; }

        &::after {
            content: '';
            display: block;

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background-color: var(--color__background);
            transition: clip-path var(--color-transition-duration);

            clip-path: circle(0% at 50% 50%);
            z-index: 0;
        }

        &:hover {
            &::after {
                clip-path: circle(50% at 50% 50%);
            }
        }
    }
</style>
