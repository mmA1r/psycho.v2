export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    //devtools: { enabled: true },
    alias: {
        image: '/<rootDir>/assets/img/'
    },

    css: ['~/assets/scss/main.scss'],
    modules: ['@vueuse/nuxt'],

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
