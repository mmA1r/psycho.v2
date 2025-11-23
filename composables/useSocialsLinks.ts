import { IconsInstagram, IconsTelegram, IconsYoutube } from '#components';

export function useSocialLinks() {
    const links = [
        { href: 'https://www.instagram.com/es8matveeva?igsh=MW9vNjBic3RjNGsyaQ==', component: IconsInstagram },
        { href: 'https://web.tribute.tg/s/F5M', component: IconsTelegram },
        { href: 'https://www.youtube.com/@ekaterina8matveeva', component: IconsYoutube }
    ];

    return { links }
}
