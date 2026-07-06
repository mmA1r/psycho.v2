<template>
    <div class="header-controls">
        <FunctionalChangeTheme />
        <FunctionalChangeLanguage />
    </div>
</template>

<style lang='scss' scoped>
    .header-controls {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;

        @include mobile {
            width: 100%;

            justify-content: space-between;
        }
    }
</style>
