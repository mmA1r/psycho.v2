<script lang='ts' setup>
    const props = defineProps<{
        folder: string;
        alt: string;
        widths?: number[];
    }>();

    const folder = computed(() => props.folder.replace(/\/+$/, ''));
    const widths = props.widths ? 
        computed(() => Array.from(new Set(props.widths)).sort((a, b) => a - b)) :
        computed(() => [ 320, 480, 768, 1024, 1280 ])
    ;
    const alt = computed(() => props.alt);

    function makeSrcset(fmt: string) {
        const base = widths.value;
        const set = new Set<number>();

        base.forEach(w => {
            set.add(w)
            set.add(w * 2)
        });

        const arr = Array.from(set).sort((a, b) => a - b);
        return arr.map(w => `${props.folder}/${w}.${fmt} ${w}w`).join(', ');
    }
</script>

<template>
    <picture class="nuxt-picture-root">
        <source
            :srcset="makeSrcset('webp')"
            type="image/webp"
        />
        <source
            :srcset="makeSrcset('jpg')"
            type="image/jpeg"
        />

        <img
            :src="`${folder}/320.jpg`"
            :srcset="makeSrcset('jpg')"
            :alt="alt"
            loading="lazy"
            decoding="async"
        />
    </picture>
</template>

<style lang='scss' scoped>
    .nuxt-picture-root {
        display: block;
        max-width: 100%;
        max-height: 100%;

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
</style>
