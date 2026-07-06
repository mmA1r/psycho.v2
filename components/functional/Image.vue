<script lang='ts' setup>
    const props = defineProps<{
        folder: string;
        alt: string;
        widths?: number[];
        sizes?: string;
        loading?: 'lazy' | 'eager';
        fetchpriority?: 'high' | 'low' | 'auto';
        fallback?: boolean;
    }>();

    const folder = computed(() => props.folder.replace(/\/+$/, ''));
    const widths = props.widths ? 
        computed(() => Array.from(new Set(props.widths)).sort((a, b) => a - b)) :
        computed(() => [ 320, 480, 768, 1024, 1280 ])
    ;
    const alt = computed(() => props.alt);
    const sizes = computed(() => props.sizes ?? '(max-width: 767px) 100vw, 50vw');
    const loading = computed(() => props.loading ?? 'lazy');
    const fetchpriority = computed(() => props.fetchpriority ?? 'auto');
    const hasFallback = computed(() => props.fallback ?? true);
    const isLoaded = ref(false);
    const hasError = ref(false);

    function makeSrcset(fmt: string) {
        const base = widths.value;
        const set = new Set<number>();

        base.forEach(width => {
            set.add(width);
            set.add(width * 2);
        });

        const arr = Array.from(set).sort((a, b) => a - b);
        return arr.map(width => `${folder.value}/${width}.${fmt} ${width}w`).join(', ');
    }

    function onLoad() {
        isLoaded.value = true;
    }

    function onError() {
        hasError.value = true;
    }
</script>

<template>
    <div
        class="image-frame"
        :class="{ loaded: isLoaded || !hasFallback, failed: hasError }"
    >
        <div
            v-if="hasFallback && !isLoaded && !hasError"
            class="image-frame__loader"
            aria-hidden="true"
        />
        <div
            v-if="hasFallback && hasError"
            class="image-frame__fallback"
            role="img"
            :aria-label="alt"
        >
            <span>{{ alt }}</span>
        </div>
        <picture
            v-else
            class="nuxt-picture-root"
        >
            <source
                :srcset="makeSrcset('webp')"
                :sizes="sizes"
                type="image/webp"
            />
            <source
                :srcset="makeSrcset('jpg')"
                :sizes="sizes"
                type="image/jpeg"
            />

            <img
                :src="`${folder}/320.jpg`"
                :srcset="makeSrcset('jpg')"
                :sizes="sizes"
                :alt="alt"
                :loading="loading"
                :fetchpriority="fetchpriority"
                decoding="async"
                @load="onLoad"
                @error="onError"
            />
        </picture>
    </div>
</template>

<style lang='scss' scoped>
    .image-frame {
        position: relative;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }

    .image-frame__loader {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;

        width: 36px;
        height: 36px;

        border: 2px solid rgba(var(--color__primary-rgb), .2);
        border-top-color: var(--color__primary);
        border-radius: 50%;

        transform: translate(-50%, -50%);
        animation: image-loader-spin .8s linear infinite;
    }

    .image-frame__fallback {
        position: relative;

        width: 100%;
        min-height: 160px;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 24px;

        color: var(--color__primary);
        background-color: rgba(var(--color__primary-rgb), .06);
        border: 1px solid rgba(var(--color__primary-rgb), .16);
        border-radius: inherit;

        text-align: center;
    }

    .image-frame__fallback > span {
        position: relative;

        @include adaptive-font(12px, 14px);
    }

    .nuxt-picture-root {
        position: relative;

        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        opacity: 0;
        transition: opacity $easing;

        >img {
            display: block;
            object-fit: contain;
            object-position: center;
            width: 100%;
            height: 100%;

            .modal__content & {
                height: 80vh;
                width: 100vw;
            }
        }
    }

    .image-frame.loaded .nuxt-picture-root {
        opacity: 1;
    }

    @keyframes image-loader-spin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>
