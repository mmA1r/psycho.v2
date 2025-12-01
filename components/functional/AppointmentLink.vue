<template>
    <NuxtLink
        class="consulting-appointment__link"
        target="_blank"
        rel="noopener noreferrer"
        tabindex="0"
        :href="'https://t.me/ekaterina8matveeva'"
    >
        <IconsWhatsApp />
        <span>Записаться</span>
    </NuxtLink>
</template>

<style lang='scss' scoped>
    .consulting-appointment__link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border-radius: 666px;
        margin-top: 12px;
        
        font-size: 20px;
        gap: 12px;

        border: 1px solid var(--color__primary);
        background-color: var(--color__background);

        transition: 
            opacity $anim,
            transform $anim,
            background-color $easing,
            color $easing,
        !important;

        opacity: 0;
        .settled & { opacity: 1; }

        >svg {
            width: 24px;
            height: 24px;
        }

        @include hover {
            background-color: var(--color__primary);
            color: var(--color__background);
        }

        @include focus-visible;

        &:active {
            color: var(--color__primary);
            background-color: rgba(var(--color__primary-rgb), .5);
        }
    }
</style>
