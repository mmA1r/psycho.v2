import { resolve } from 'path'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',

    css: ['~/assets/scss/main.scss'],

    modules: ['@vueuse/nuxt', '@pinia/nuxt'],

    alias: {
        image: resolve(__dirname, 'assets/img'),
        hooks: resolve(__dirname, 'composables'),
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "~/assets/scss/variables" as *;`
                }
            }
        }
    }
});
