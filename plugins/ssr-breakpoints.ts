import { provideSSRWidth } from '@vueuse/core';

export default defineNuxtPlugin((nuxtApp) => {
    const headers = useRequestHeaders();
    const userAgent = (headers?.["user-agent"] ?? navigator.userAgent).toString();

    const isMobile = /Mobi|Android|iPhone/.test(userAgent);
  
    const ssrWidth = isMobile ? 768 : 1440;

    provideSSRWidth(ssrWidth, nuxtApp.vueApp);
});
