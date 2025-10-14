import { defineStore } from 'pinia';
import mitt, { type Emitter, type Handler } from 'mitt';

type Events = {
    heroSectionSettled: boolean;
}

export const useEventStore = defineStore('event', () => {
    const emitter: Emitter<Events> = mitt<Events>();

    function call<K extends keyof Events>(
        event: K,
        payload: Events[K]
    ): void {
        emitter.emit(event, payload);
    }

    function subscribe<K extends keyof Events>(
        event: K,
        handler: Handler<Events[K]>
    ): () => void {
        emitter.on(event, handler);
        return () => emitter.off(event, handler);
    }

    function unsubscribe<K extends keyof Events>(
        event: K,
        handler: Handler<Events[K]>
    ): void {
        emitter.off(event, handler);
    }

    return { call, subscribe, unsubscribe }
});
