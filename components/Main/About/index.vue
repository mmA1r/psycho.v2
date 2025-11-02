<script lang='ts' setup>
    import { IconsEducation, IconsPerson } from '#components';

    const info: Array<{
        iconComponent: Component;
        title: string;
        content: string;
        reverse?: boolean;
    }> = [
        {
            iconComponent: IconsPerson,
            title: 'Обо мне',
            content: `
                <p>
                    Моя жизнь – это путь от ощущения одиночества и необходимости быть «успешной ради любви» к глубокому пониманию себя и проживанию жизни в согласии с тем, что для меня действительно важно. Я всегда тонко чувствовала мир и людей вокруг, улавливала скрытую глубину за внешними событиями и остро переживала любую несправедливость.
                </p>
                <p>
                    Более 10 лет я профессионально занималась спортивно-бальными танцами, которые научили меня трудолюбию и настойчивости, но также показали цену зависимости самоценности от чужих оценок. Периоды кризиса стали точкой трансформации: я обратилась внутрь и начала исследовать свои чувства, мысли, ограничения и желания. Этот путь самоисследования привел меня к профессии психолога.
                </p>
                <p>
                    Сегодня я психолог-консультант в экзистенциальном подходе. В своей работе я создаю пространство, где человек может исследовать себя, открывать свои ресурсы и строить жизнь, основанную на собственных смыслах и ценностях. Моя задача – сопровождать на пути к цельной, благополучной жизни, в которой есть место и амбициям, и мягкости, и глубокому согласию с собой.
                </p>
                <p>
                    Я верю, что истинное благополучие рождается из целостности – когда человек понимает себя во всей многогранности и создает жизнь, где внешняя реализованность опирается на внутреннюю правду. Моя сила – в чуткости, глубине и верности своему пути. Моя цель – поддерживать других в том, чтобы они чувствовали себя живыми и по-настоящему счастливыми.
                </p>
            `
        },
        {
            iconComponent: IconsEducation,
            title: 'Образование',
            content: '<p>Контент2</p>',
            reverse: true
        }
    ];
</script>

<template>
    <article class="about section">
        <div class="about__inner ctx">
            <MainAboutSection v-for="(item, index) in info" :key="index" v-bind="item"/>
        </div>
    </article>
</template>

<style lang='scss' scoped>
    .about {
        background-color: var(--color__background);
        z-index: 1;

        &::after {
            $height: 15vh;

            content: '';
            display: block;
            position: absolute;

            top: -$height;
            left: 0;

            width: 100%;
            height: $height;

            pointer-events: none;

            background: linear-gradient(
                to top,
                rgba(var(--color__background-rgb)) 5%,
                rgba(var(--color__background-rgb), .3),
                transparent
            );
        }
    }

    .about__inner {
        display: flex;
        flex-direction: column;
        gap: 36px;
        padding: 60px 36px;
        
        @include mobile {
            padding: 30px 16px;
        }
    }
</style>
