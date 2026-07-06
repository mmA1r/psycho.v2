import { resolve } from 'path'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: false },

    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            title: 'Екатерина Матвеева — психолог | Онлайн-консультации',
            titleTemplate: '%s | Wellbeing with Kate',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'author', content: 'Екатерина Матвеева' },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:site_name', content: 'Екатерина Матвеева — психолог' },
                { property: 'og:locale', content: 'ru_RU' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },

    css: ['~/assets/scss/index.scss'],

    modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxt/image'],

    alias: {
        images: resolve(__dirname, 'assets/img'),
        types: resolve(__dirname, 'types'),
        hooks: resolve(__dirname, 'composables'),
        stores: resolve(__dirname, 'stores'),
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
