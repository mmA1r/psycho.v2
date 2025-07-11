<script lang='ts' setup>

</script>

<template>
    <div class="main__link-wrapper">
        <a class="main__link">
            
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

            width: 2px;
            height: $line-height;

            transition: clip-path $animation-duration ease;

            background-color: var(--color__main);
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
    }
</style>
