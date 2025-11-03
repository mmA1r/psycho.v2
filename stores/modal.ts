import { type ComponentCustomProps } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);
    const contentComponent = shallowRef<Component | null>(null);
    const contentProps = ref<Record<string, any>>({});

    function open<T extends Component>(component: T, props: ComponentCustomProps = {}) {
        contentComponent.value = component;
        contentProps.value = props;
        isOpen.value = true;
    }

    function close() { isOpen.value = false; }

    if (typeof window !== 'undefined') {
        watch(isOpen, (open) => {
            document.body.classList.toggle('no-scroll', open);
        });
        window.addEventListener('beforeunload', () => {
            document.body.classList.remove('no-scroll');
        });
    }

    return {
        isOpen,
        contentComponent,
        contentProps,
        open,
        close
    };
});
