<script lang='ts' setup>

</script>

<template>
    <section
        class="about section"
    >

    </section>
</template>

<style lang='scss' scoped>
    .about {
        background-color: var(--color__background);

        &::after {
            $height: 15vh;

            content: '';
            display: block;
            position: absolute;

            top: -$height;
            left: 0;

            width: 100%;
            height: $height;

            pointer-events: none;

            background: linear-gradient(
                to top,
                rgba(var(--color__background-rgb)) 5%,
                rgba(var(--color__background-rgb), .5),
                transparent
            );
        }
    }
</style>
