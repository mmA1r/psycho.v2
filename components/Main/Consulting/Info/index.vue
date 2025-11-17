<script lang='ts' setup>
    const infoRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(infoRef, { threshold: .5 });
</script>

<template>
    <section 
        ref="infoRef"
        :class="['consulting__info', { settled: isIntersecting }]"
    >
        <div class="consulting-info__text-block">
            <h3>О Методе</h3>
            <div class="consulting-info__paragraphs">
                <p>Экзистенциальный анализ ставит целью помочь человеку прийти к внутреннему согласию, сказав четыре “ДА”:</p>
                <ul>
                    <li><p><strong>миру</strong> — “я могу быть” в тех условиях, которые есть</p></li>
                    <li><p><strong>жизни</strong> — “мне нравится жить”</p></li>
                    <li><p><strong>себе</strong> — “я имею право быть самим собой”</p></li>
                    <li><p><strong>смыслу</strong> — “в этом есть смысл”</p></li>
                </ul>
                <p>И это движение к внутреннему согласию - неотъемлемая часть работы, тот фон и то русло, по которому мы движемся в психотерапевтическом процессе.</p>
            </div>
        </div>
        <div class="consulting-info__image-block">
            <NuxtImg
                class="consulting-info__image"
                src="" 
                :alt="''" 
            />
        </div>
    </section>
</template>

<style lang='scss' scoped>
    .consulting__info {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 24px;
        
        width: 100%;
        max-width: 990px;
        border-radius: $brd-radius;

        &.settled {
            >div { opacity: 1; }
        }

        >div { 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: opacity $anim;
            opacity: 0;
        }

        @include mobile {
            flex-direction: column;
        }
    }

    .consulting-info {
        &__text-block {
            display: flex;
            flex-direction: column;
            gap: 12px;

            width: 100%;
            max-width: 600px;
            padding: 24px;
            background-color: var(--color__background);
            z-index: 1;

            border-radius: inherit;
        }

        &__paragraphs {
            display: flex;
            flex-direction: column;
            gap: 8px;

            >ul {
                padding-left: 20px;

                & strong {
                    font-weight: 600;
                }
            }
        }

        &__image-block {
            width: 100%;
            max-width: 400px;
            border-radius: inherit;
            background-color: var(--color__background);
            padding: 16px;
        }

        &__image {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            object-fit: cover;
        }
    }
</style>
