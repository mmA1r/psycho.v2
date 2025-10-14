<template>
    <Header />
    <main class="page-container">
        <slot />
    </main>
    <Footer />
</template>

<style lang='scss' scoped>
    .page-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 100vw;
        
        height: auto;
        min-height: 100vh;

        >* { max-width: 1440px; }
    }
</style>
