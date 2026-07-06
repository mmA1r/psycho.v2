export type Locale = 'ru' | 'en';

const COOKIE_KEY = 'locale';

const messages = {
    ru: {
        language: {
            label: 'English version',
            short: 'EN',
            ariaLabel: 'Switch site language to English',
        },
        theme: {
            ariaLabel: 'Переключить тему',
        },
        modal: {
            close: 'Закрыть модальное окно',
        },
        cookies: {
            text: 'Мы используем cookie, чтобы сохранять выбранные вами язык и тему сайта.',
            privacy: 'Подробнее',
            accept: 'Понятно',
        },
        nav: {
            about: 'Обо мне',
            sportPsychology: 'Спортивная психология',
            consulting: 'Консультация',
            privacy: 'Политика конфиденциальности',
            home: 'Главная',
            close: 'Закрыть',
        },
        hero: {
            name: 'Екатерина Матвеева',
            hiddenSuffix: ' — психолог',
            title: 'Экзистенциальный & спортивный психолог',
        },
        about: {
            sections: {
                personal: 'Обо мне',
                education: 'Образование',
                sportPsychology: 'Спортивная психология',
            },
            personal: [
                'Моя жизнь – это путь от ощущения одиночества и необходимости быть «успешной ради любви» к глубокому пониманию себя и проживанию жизни в согласии с тем, что для меня действительно важно. Я всегда тонко чувствовала мир и людей вокруг, улавливала скрытую глубину за внешними событиями и остро переживала любую несправедливость.',
                'Более 10 лет я профессионально занималась спортивно-бальными танцами, которые научили меня трудолюбию и настойчивости, но также показали цену зависимости самоценности от чужих оценок. Периоды кризиса стали точкой трансформации: я обратилась внутрь и начала исследовать свои чувства, мысли, ограничения и желания. Этот путь самоисследования привел меня к профессии психолога.',
                'Сегодня я психолог-консультант в экзистенциальном подходе. В своей работе я создаю пространство, где человек может исследовать себя, открывать свои ресурсы и строить жизнь, основанную на собственных смыслах и ценностях. Моя задача – сопровождать на пути к цельной, благополучной жизни, в которой есть место и амбициям, и мягкости, и глубокому согласию с собой.',
                'Я верю, что истинное благополучие рождается из целостности – когда человек понимает себя во всей многогранности и создает жизнь, где внешняя реализованность опирается на внутреннюю правду. Моя сила – в чуткости, глубине и верности своему пути. Моя цель – поддерживать других в том, чтобы они чувствовали себя живыми и по-настоящему счастливыми.',
            ],
            education: {
                bachelor: {
                    heading: 'Московский педагогический государственный университет',
                    year: 'Год получения: 2021',
                    specialtyHeading: 'Специальность:',
                    specialtyText: 'психолог-педагог',
                    qualificationHeading: 'Квалификация:',
                    qualificationText: 'бакалавр',
                    alt: 'Диплом бакалавра',
                },
                training: {
                    heading: 'Курсы повышения квалификации «Исследования и консультативная практика в психологии»',
                    year: 'Год получения: 2022',
                    alt: 'Сертификат повышения квалификации',
                },
                master: {
                    heading: 'Федеральное государственное автономное образовательное учреждение высшего образования «Национальный исследовательский университет «Высшая школа экономики»',
                    year: 'Год получения: 2024',
                    specialtyHeading: 'Специальность:',
                    specialtyText: 'экзистенциальный анализ и логотерапия',
                    qualificationHeading: 'Квалификация:',
                    qualificationText: 'магистр',
                    alt: 'Диплом магистра',
                },
                gleCounselling: {
                    heading: 'GLE-International Existential-analytical and logotherapeutic counselling and accompaniment',
                    year: 'Год получения: 2024',
                    alt: 'Сертификат GLE-International',
                },
                glePsychotherapy: {
                    heading: 'GLE-International Existential-analytical and logotherapeutic psychotherapy',
                    year: 'Годы обучения: 2025 - по наст. время',
                },
                diplomaLabel: 'Показать диплом',
            },
            sportPsychology: {
                heading: 'Barça Innovation Hub — Sport psychology for athletes development',
                year: 'Год получения: 2026',
                alt: 'Сертификат Barça Innovation Hub',
                diplomaLabel: 'Показать сертификат',
            },
        },
        consulting: {
            heading: 'Консультация',
            listHeading: 'С чем я работаю',
            requests: [
                'Тревога и потеря внутренней опоры',
                'Эмоциональная перегрузка и выгорание',
                'Сложности в отношениях и близости',
                'Эмоциональная зависимость и трудность отпустить',
                'Самоценность и внутренний критик',
                'Границы и право быть собой',
                'Спорт, соревнования и давление результата',
                'Профессиональная реализация',
                'Кризисы, смысл и поиск своего пути',
            ],
            method: {
                heading: 'О Методе',
                intro: 'Экзистенциальный анализ ставит целью помочь человеку прийти к внутреннему согласию, сказав четыре “ДА”:',
                points: [
                    { heading: 'миру', text: ' — “я могу быть” в тех условиях, которые есть' },
                    { heading: 'жизни', text: ' — “мне нравится жить”' },
                    { heading: 'себе', text: ' — “я имею право быть самим собой”' },
                    { heading: 'смыслу', text: ' — “в этом есть смысл”' },
                ],
                outro: 'И это движение к внутреннему согласию - неотъемлемая часть работы, тот фон и то русло, по которому мы движемся в психотерапевтическом процессе.',
                imageAlt: 'Книга',
            },
            appointment: {
                heading: 'Запись',
                placeTitle: 'Место проведения',
                placeText: 'Онлайн',
                durationTitle: 'Длительность',
                durationText: 'Онлайн-консультация длится 55 минут',
                costTitle: 'Стоимость',
                costText: 'Стоимость сессии — 6000 рублей или эквивалент в евро/долларах.',
                cancelTitle: 'Правила в случае несвоевременной отмены или переноса консультации',
                cancelText: 'Если вы отменяете или переносите консультацию менее, чем за 24 часа, то вы оплачиваете 100% от стоимости консультации',
                paymentTitle: 'Оплата иностранными картами',
                paymentText: 'Оплата консультаций возможна как российскими, так и иностранными картами',
                discountTitle: 'Акции',
                discountText: 'Для постоянных клиентов доступны более выгодные условия.',
                link: 'Записаться',
            },
        },
        footer: {
            terms: 'Условия',
            rights: '© 2026 Екатерина Матвеева.',
        },
        seo: {
            title: 'Екатерина Матвеева — психолог | Онлайн-консультации',
            description: 'Екатерина Матвеева — экзистенциальный и спортивный психолог. Онлайн-консультации: отношения, кризисы, выгорание, самопознание.',
            imageAlt: 'Екатерина Матвеева — экзистенциальный и спортивный психолог',
            schemaName: 'Екатерина Матвеева — психолог',
            jobTitle: 'Экзистенциальный и спортивный психолог',
            services: [
                'Психологические онлайн-консультации',
                'Экзистенциальная психология',
                'Спортивная психология',
            ],
        },
    },
    en: {
        language: {
            label: 'Русская версия',
            short: 'RU',
            ariaLabel: 'Переключить язык сайта на русский',
        },
        theme: {
            ariaLabel: 'Switch theme',
        },
        modal: {
            close: 'Close modal window',
        },
        cookies: {
            text: 'We use cookies to save your selected site language and theme.',
            privacy: 'Learn more',
            accept: 'Got it',
        },
        nav: {
            about: 'About',
            sportPsychology: 'Sport Psychology',
            consulting: 'Consultation',
            privacy: 'Privacy Policy',
            home: 'Home',
            close: 'Close',
        },
        hero: {
            name: 'Ekaterina Matveeva',
            hiddenSuffix: ' — psychologist',
            title: 'Existential & sport psychologist',
        },
        about: {
            sections: {
                personal: 'About',
                education: 'Education',
                sportPsychology: 'Sport Psychology',
            },
            personal: [
                'My life has been a path from feeling lonely and needing to be “successful to be loved” toward a deeper understanding of myself and a life aligned with what truly matters to me. I have always sensed the world and people around me subtly, noticing the hidden depth behind external events and feeling injustice very sharply.',
                'For more than 10 years I practiced competitive ballroom dancing professionally. It taught me diligence and persistence, but it also showed me the cost of tying self-worth to other people’s evaluations. Periods of crisis became a point of transformation: I turned inward and began to explore my feelings, thoughts, limitations, and desires. This path of self-exploration led me to the profession of psychology.',
                'Today I am a consulting psychologist working in the existential approach. In my work, I create a space where a person can explore themselves, discover their resources, and build a life grounded in their own meanings and values. My task is to accompany people on the way to a whole, fulfilling life where there is room for ambition, softness, and deep inner agreement.',
                'I believe that true well-being is born from wholeness: when a person understands themselves in all their complexity and creates a life where external fulfillment rests on inner truth. My strength is sensitivity, depth, and faithfulness to my path. My goal is to support others in feeling alive and genuinely happy.',
            ],
            education: {
                bachelor: {
                    heading: 'Moscow Pedagogical State University',
                    year: 'Year obtained: 2021',
                    specialtyHeading: 'Specialization:',
                    specialtyText: 'educational psychologist',
                    qualificationHeading: 'Qualification:',
                    qualificationText: 'Bachelor’s degree',
                    alt: 'Bachelor diploma',
                },
                training: {
                    heading: 'Advanced training course “Research and Counseling Practice in Psychology”',
                    year: 'Year obtained: 2022',
                    alt: 'Advanced training certificate',
                },
                master: {
                    heading: 'HSE University',
                    year: 'Year obtained: 2024',
                    specialtyHeading: 'Specialization:',
                    specialtyText: 'existential analysis and logotherapy',
                    qualificationHeading: 'Qualification:',
                    qualificationText: 'Master’s degree',
                    alt: 'Master diploma',
                },
                gleCounselling: {
                    heading: 'GLE-International Existential-analytical and logotherapeutic counselling and accompaniment',
                    year: 'Year obtained: 2024',
                    alt: 'GLE-International certificate',
                },
                glePsychotherapy: {
                    heading: 'GLE-International Existential-analytical and logotherapeutic psychotherapy',
                    year: 'Years of study: 2025 - present',
                },
                diplomaLabel: 'Show diploma',
            },
            sportPsychology: {
                heading: 'Barça Innovation Hub — Sport psychology for athletes development',
                year: 'Year obtained: 2026',
                alt: 'Barça Innovation Hub certificate',
                diplomaLabel: 'Show certificate',
            },
        },
        consulting: {
            heading: 'Consultation',
            listHeading: 'What I Work With',
            requests: [
                'Anxiety and loss of inner ground',
                'Emotional overload and burnout',
                'Difficulties in relationships and intimacy',
                'Emotional dependence and difficulty letting go',
                'Self-worth and the inner critic',
                'Boundaries and the right to be yourself',
                'Sport, competition, and performance pressure',
                'Professional fulfillment',
                'Crises, meaning, and finding your own path',
            ],
            method: {
                heading: 'About The Method',
                intro: 'Existential analysis aims to help a person come to inner agreement by saying four “YESes”:',
                points: [
                    { heading: 'to the world', text: ' — “I can be” in the conditions that exist' },
                    { heading: 'to life', text: ' — “I like living”' },
                    { heading: 'to myself', text: ' — “I have the right to be myself”' },
                    { heading: 'to meaning', text: ' — “there is meaning in this”' },
                ],
                outro: 'This movement toward inner agreement is an essential part of the work: the background and the path along which we move in the therapeutic process.',
                imageAlt: 'Book',
            },
            appointment: {
                heading: 'Booking',
                placeTitle: 'Format',
                placeText: 'Online',
                durationTitle: 'Duration',
                durationText: 'An online consultation lasts 55 minutes',
                costTitle: 'Fee',
                costText: 'Session fee — 6000 RUB or equivalent in EUR/USD.',
                cancelTitle: 'Late cancellation or rescheduling policy',
                cancelText: 'If you cancel or reschedule a consultation less than 24 hours before the session, the full consultation fee is charged.',
                paymentTitle: 'Payment with international cards',
                paymentText: 'Consultations can be paid for with both Russian and international cards.',
                discountTitle: 'Special terms',
                discountText: 'More favorable terms are available for regular clients.',
                link: 'Book a session',
            },
        },
        footer: {
            terms: 'Terms',
            rights: '© 2026 Ekaterina Matveeva.',
        },
        seo: {
            title: 'Ekaterina Matveeva — Psychologist | Online Consultations',
            description: 'Ekaterina Matveeva is an existential and sport psychologist. Online consultations for relationships, crises, burnout, and self-exploration.',
            imageAlt: 'Ekaterina Matveeva — existential and sport psychologist',
            schemaName: 'Ekaterina Matveeva — Psychologist',
            jobTitle: 'Existential and sport psychologist',
            services: [
                'Online psychological consultations',
                'Existential psychology',
                'Sport psychology',
            ],
        },
    },
} as const;

export function useLocale() {
    const localeCookie = useCookie<Locale>(COOKIE_KEY, {
        default: () => 'ru',
        sameSite: 'lax',
    });

    const locale = computed<Locale>(() => localeCookie.value ?? 'ru');
    const t = computed(() => messages[locale.value]);

    function toggleLocale() {
        localeCookie.value = locale.value === 'ru' ? 'en' : 'ru';
    }

    return { locale, t, toggleLocale };
}
