<script setup>
    import { ref } from 'vue'
    import { useEventListener, useThrottle } from '@vueuse/core'
  
    const isHidden = ref(false)
    let lastScrollY = 0
  
    const onScroll = useThrottle(() => {
        const y = window.scrollY;
        isHidden.value = (y > lastScrollY && y > 50);
        lastScrollY = y;
    }, 100);
  
    useEventListener('scroll', onScroll, { target: window });
</script>

<template>
    <header class="main__header">
        <div class="main__logo"></div>
        <nav class="main__nav">
            <a class="main__link" href="#about">Обо мне</a>
            <a class="main__link" href="#education">Образование</a>
            <a class="main__link" href="#consulting">Консультации</a>
            <a class="main__link" href="#contacts">Контакты</a>
        </nav>
    </header>
</template>
  
<style scoped>
    .main__header {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 50px;

        background-color: transparent;
    }

    .main__nav {
        position: relative;

        display: flex;
    }

    .main__link {
        position: inherit;
        margin: 4px;
    }
</style>
  