<script setup lang="ts">
const modal = useModalStore();
const modalRef = ref<HTMLElement | null>(null);

watch(() => modal.isOpen, (isOpen) => {
    if (isOpen) {
        nextTick(() => {
            modalRef.value?.focus();
        });
    }
});
</script>

<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div
                v-if="modal.isOpen"
                ref="modalRef"
                class="modal"
                role="dialog"
                aria-modal="true"
                tabindex="-1"
                @click.self="modal.close"
                @keydown.esc="modal.close"
            >
                <div class="modal__container" role="document">
                    <button
                        class="modal__close-button"
                        aria-label="Закрыть модальное окно"
                        @click="modal.close"
                    >
                        <IconsCross />
                    </button>
                    <div class="modal__content">
                        <component
                            :is="modal.contentComponent" 
                            v-bind="modal.contentProps"
                        />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        z-index: 1000;
        outline: none;

        &__container {
            position: relative;
            padding: 20px;

            border-radius: $brd-radius;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
            gap: 12px;

            width: 95%;
            height: 95%;
            background-color: var(--color__background);
        }

        &__close-button {
            position: relative;
            width: 50px;
            height: 50px;
            background-color: var(--color__primary);
            border-radius: 16px;
            padding: 8px;
            color: var(--color__background);

            @include mobile {
                width: 40px;
                height: 40px;
                border-radius: 12px;
            }
        }

        &__content {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    }

.modal-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--color__primary);
    padding: 0;
    line-height: 1;
}

/* Анимация */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity $easing;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>
