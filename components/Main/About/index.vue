<script lang='ts' setup>
    const info = [
        {
            heading: "О компании",
            text: [
                'Мы — ведущая IT-компания...',
                'Наши ценности: качество, инновации, ответственность...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
                'Дополнительный абзац для теста обрезки...',
            ],
            //svg: IconsTelegram
        },
        {
            heading: "О компании",
            text: [
                'Мы — ведущая IT-компания...',
                'Наши ценности: качество, инновации, ответственность...',
                'Дополнительный абзац для теста обрезки...'
            ],
            //svg: IconsTelegram
        },
    ]
</script>

<template>
    <section class="about section">
        <div class="about__inner ctx">
            <AboutInfoBlock
                v-for="(item, index) in info" :key="index"
                :heading="item.heading"
                :text="item.text"
            />
        </div>
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

    .about__inner {
        flex-direction: column;
    }
</style>
