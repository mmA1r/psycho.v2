<script setup lang="ts">
    import { useCssVar } from '@vueuse/core';

    const id = useId().replace(/-/g, '_');
    const beginId = `${id}.end`;
    const mounted = ref<boolean>(false);

    defineProps<{ 
        appearValues: string;
        floatValues: string;
    }>();

    onMounted(() => {
        mounted.value = true;
    });
</script>

<template>
    <animate
        :id="id"
        v-if="mounted"
        attributeName="d"
        :values="appearValues"
        :dur="useCssVar('--anim-duration').value"
        begin="0.1s"
        fill="freeze"
        keyTimes="0;.5;1"
        keySplines=".1 .5 .8 .9;.1 .5 .8 .9"
    />
    <animate
        attributeName="d"
        v-if="mounted"
        :values="floatValues"
        :begin="beginId"
        dur="10s"
        repeatCount="indefinite"
    />
</template>
