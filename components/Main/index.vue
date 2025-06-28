<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    const section = ref<HTMLElement | null>(null);
    const speed = 0.3;

    let onScroll: () => void;

    onMounted(() => {
        onScroll = () => {
            const y = window.scrollY;
            const offset = y * speed;
            if (section.value) {
                section.value.style.transform = `translateY(${offset}px)`;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    });
</script>

<template>
    <section class="main-section" :class="{ 'parallax': true }" ref="section">
        <div class="overlay"/>

        <div class="content">
            <h1 class="title">Психолог</h1>
            <p class="subtitle">Екатерина Матвеева</p>
        </div>
    </section>
</template>
  
  
<style scoped lang="scss">
    .main-section {
        position: relative;
        width: 100%;
        height: 100vh;

        background-color: #0C1E28;
        color: white;

        overflow: hidden;
        will-change: transform;
    }
  
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 0 20px;
    }
  
    .title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold;
        color: #ffffff;
        line-height: 1.2;
    }
</style>
  