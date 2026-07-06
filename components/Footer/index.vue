<script lang='ts' setup>
    const { t } = useLocale();
</script>

<template>
    <footer class="footer">
        <div class="footer__inner ctx">
            <FooterMain />
            <FooterColumn :heading="t.footer.terms">
                <FooterUserRelated />
            </FooterColumn>
        </div>
        <span class="footer__rights">
            {{ t.footer.rights }}
        </span>
    </footer>
</template>

<style lang='scss' scoped>
    .footer {
        position: relative;

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 26px;

        padding: 48px 0 28px;

        color: var(--color__background);
        background:
            linear-gradient(
                135deg,
                rgba(var(--color__primary-rgb), 1),
                rgba(var(--color__primary-rgb), .92)
            );

        @include mobile {
            padding: 36px 0;
        }
    }

    .footer__inner {
        position: relative;

        width: 100%;
        max-width: 980px;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;

        padding: 0 36px 26px;

        @include mobile {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;

            padding: 0 16px 26px;
        }
    }

    .footer__inner::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 36px;

        width: calc(100% - 72px);
        height: 1px;

        background-color: rgba(var(--color__background-rgb), .28);

        @include mobile {
            left: 16px;

            width: calc(100% - 32px);
        }
    }

    .footer__rights {
        position: relative;

        width: 100%;
        max-width: 980px;

        padding: 0 36px;

        color: rgba(var(--color__background-rgb), .54);
        text-align: center;

        @include adaptive-font(11px, 12px);

        @include mobile {
            padding: 0 16px;
        }
    }
</style>
