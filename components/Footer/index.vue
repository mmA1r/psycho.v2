<script lang='ts' setup>
</script>

<template>
    <footer class="footer">
        <div class="footer__inner ctx">
            <FooterMain />
            <FooterColumn heading="Политика">
                <FooterUserRelated />
            </FooterColumn>
        </div>
    </footer>
</template>

<style lang='scss' scoped>
    .footer {
        background-color: var(--color__primary);
        padding: 60px 0;

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
        }
    }
</style>
