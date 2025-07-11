<script lang='ts' setup>
    import { useEventStore } from 'stores/events';

    const events = useEventStore();

    const nav = ref<HTMLElement|null>(null);

    const onHeroSettled = async () => {
        if (!nav.value) return;

        const elems = Array.from(nav.value.children) as HTMLElement[];

        elems.forEach(el => {
            el.classList.add('enter');
        });
    }

    onMounted(() => {
        events.subscribe('heroSectionSettled', onHeroSettled);
    });

    onUnmounted(() => {
        events.unsubscribe('heroSectionSettled', onHeroSettled);
    });
</script>

<template>
    <nav 
        class="main__nav"
        ref="nav"
    >
        <MainLinksLink />
        <MainLinksLink />
    </nav>
</template>

<style lang='scss' scoped>
    .main__nav {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 40px;
    }
</style>
