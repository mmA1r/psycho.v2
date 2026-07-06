<script lang='ts' setup>
    const infoRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(infoRef, { threshold: .5 });
    const { t } = useLocale();
</script>

<template>
    <section 
        ref="infoRef"
        :class="['consulting__info', { settled: isIntersecting }]"
    >
        <div class="consulting-info__text-block">
            <h3>{{ t.consulting.method.heading }}</h3>
            <div class="consulting-info__paragraphs">
                <p>{{ t.consulting.method.intro }}</p>
                <ul>
                    <li
                        v-for="(item, index) in t.consulting.method.points"
                        :key="index"
                    ><p><strong>{{ item.heading }}</strong>{{ item.text }}</p></li>
                </ul>
                <p>{{ t.consulting.method.outro }}</p>
            </div>
        </div>
        <div class="consulting-info__image-block">
            <FunctionalImage
                folder="/method"
                :widths="[320, 480, 640]"
                sizes="(max-width: 767px) calc(100vw - 64px), 400px"
                :alt="t.consulting.method.imageAlt"
                loading="eager"
                fetchpriority="high"
                :fallback="false"
            />
        </div>
    </section>
</template>

<style lang='scss' scoped>
    .consulting__info {
        --consulting-info-border-color: rgba(var(--color__primary-rgb), .12);

        position: relative;

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
            border: 1px solid var(--consulting-info-border-color);
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
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            max-width: 400px;
            border-radius: inherit;
            background-color: var(--color__background);
            padding: 16px;

            :deep(.image-frame) {
                border-radius: calc(#{$brd-radius} - 8px);
            }

            :deep(picture) {
                overflow: hidden;
                border-radius: inherit;
                width: 100%;
                height: 100%;

                >img { object-fit: cover; }
            }
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
