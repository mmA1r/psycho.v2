<script lang='ts' setup>
    const COOKIE_KEY = 'cookie_notice_accepted';

    const { t } = useLocale();
    const consentCookie = useCookie<string>(COOKIE_KEY, {
        path: '/',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365,
    });

    const isAccepted = ref(consentCookie.value === 'true');
    const isVisible = computed(() => !isAccepted.value);

    function getStoredAcceptance() {
        try {
            return localStorage.getItem(COOKIE_KEY) === 'true';
        } catch {
            return false;
        }
    }

    function setStoredAcceptance() {
        try {
            localStorage.setItem(COOKIE_KEY, 'true');
        } catch {
            return;
        }
    }

    onMounted(() => {
        const storedAcceptance = getStoredAcceptance();

        if (consentCookie.value === 'true' || storedAcceptance) {
            consentCookie.value = 'true';
            setStoredAcceptance();
            isAccepted.value = true;
        }
    });

    function acceptCookies() {
        consentCookie.value = 'true';
        setStoredAcceptance();
        isAccepted.value = true;
    }
</script>

<template>
    <aside
        v-if="isVisible"
        class="cookie-notice"
        aria-live="polite"
    >
        <p class="cookie-notice__text">
            {{ t.cookies.text }}
        </p>
        <div class="cookie-notice__actions">
            <button
                class="cookie-notice__button"
                type="button"
                @click="acceptCookies"
            >
                {{ t.cookies.accept }}
            </button>
        </div>
    </aside>
</template>

<style lang='scss' scoped>
    .cookie-notice {
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 60;

        width: min(420px, calc(100% - 32px));

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        padding: 14px 16px;

        color: var(--color__primary);
        background-color: rgba(var(--color__background-rgb), .9);
        border: 1px solid rgba(var(--color__primary-rgb), .24);
        border-radius: $brd-radius;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .12);

        @include glass(8px, $brd-radius);

        @include mobile {
            right: 12px;
            bottom: 12px;

            width: calc(100% - 24px);

            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
        }
    }

    .cookie-notice__text {
        position: relative;
        z-index: 1;

        @include adaptive-font(12px, 14px);
    }

    .cookie-notice__actions {
        position: relative;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;

        flex-shrink: 0;

        @include mobile {
            width: 100%;

            justify-content: space-between;
        }
    }

    .cookie-notice__button {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 8px 14px;

        color: var(--color__background);
        background-color: var(--color__primary);
        border-radius: 666px;
        font-weight: 600;

        @include adaptive-font(12px, 14px);

        @include hover {
            color: var(--color__primary);
            background-color: var(--color__background);
        }

        @include focus-visible {
            box-shadow: 0 0 0 2px rgba(var(--color__primary-rgb), .35);
        }
    }
</style>
