<script lang='ts' setup>
const { locale, t } = useLocale();

const title = computed(() => t.value.seo.title);
const description = computed(() => t.value.seo.description);
const url = 'https://wellbeingwithkate.com/';
const image = 'https://wellbeingwithkate.com/main_desktop/1280.jpg';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    ogLocale: () => locale.value === 'ru' ? 'ru_RU' : 'en_US',
    ogImage: image,
    ogImageWidth: 1280,
    ogImageHeight: 720,
    ogImageAlt: () => t.value.seo.imageAlt,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
});

useHead({
    htmlAttrs: {
        lang: locale,
    },
    titleTemplate: '%s',
    link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: 'ru', href: url },
        { rel: 'alternate', hreflang: 'en', href: url },
        { rel: 'alternate', hreflang: 'x-default', href: url },
    ],
    script: [
        {
            type: 'application/ld+json',
            children: computed(() => JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: t.value.seo.schemaName,
                url,
                image,
                description: description.value,
                areaServed: 'Online',
                serviceType: t.value.seo.services,
                founder: {
                    '@type': 'Person',
                    name: t.value.hero.name,
                    jobTitle: t.value.seo.jobTitle
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    url: 'https://t.me/ekaterina8matveeva'
                }
            }))
        }
    ]
});
</script>

<template>
    <Main />
</template>
