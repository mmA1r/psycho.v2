<script lang='ts' setup>
</script>

<template>
    <footer class="footer">
        <div class="footer__inner ctx">
            <FooterMain />
            <FooterColumn heading="Условия">
                <FooterUserRelated />
            </FooterColumn>
        </div>
        <span class="footer__rights">
            © 2026 Екатерина Матвеева.
        </span>
    </footer>
</template>

<style lang='scss' scoped>
    .footer {
        background-color: var(--color__primary);
        padding: 60px 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 44px;

        @include mobile {
            padding: 30px 0;
            &__inner { flex-direction: column; }
        }

        &__inner {
            width: 100%;
            height: auto;

            display: flex;
            align-items: stretch;
            justify-content: center;
            gap: 20px;

            >* { 
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 12px;
            }

            &::after {
                position: absolute;
                bottom: -24px;
                left: 50%;
                transform: translateX(-50%);
                content: '';
                display: block;
                width: 80%;
                height: 1px;
                background-color: rgba(var(--color__background-rgb), .4);
            }
        }

        &__rights {
            font-size: 12px;
            color: rgba(var(--color__background-rgb), .4);
        }
    }
</style>
