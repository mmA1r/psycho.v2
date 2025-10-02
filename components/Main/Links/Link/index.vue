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
            <UiButton>
                <component :is="component"/>
            </UiButton>
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
            opacity $easing,
            transform $easing
        ;

        &::after, &::before {
            content: '';
            display: block;
            position: relative;

            width: 1px;
            height: $line-height;

            transition: clip-path $easing;

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
                transition-delay: $anim-duration;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
            &::before {
                transition-delay: $anim-duration;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
        }
    }
</style>
