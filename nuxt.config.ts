import { resolve } from 'path'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: false },
    
    css: ['~/assets/scss/index.scss'],

    modules: ['@vueuse/nuxt', '@pinia/nuxt'],

    alias: {
        images: resolve(__dirname, 'assets/img'),
        types: resolve(__dirname, 'assets/types'),
        hooks: resolve(__dirname, 'composables'),
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use '~/assets/scss/_base' as *;
                        @use '~/assets/scss/_responsive' as *;
                        @use '~/assets/scss/_variables' as *;
                        @use '~/assets/scss/_atoms' as *;
                    `
                }
            }
        }
    },
});
