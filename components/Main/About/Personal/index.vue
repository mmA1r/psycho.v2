<script lang='ts' setup>
    const contentBlockRef = ref<HTMLElement | null>(null);
    const { isIntersecting } = useIntersectionObserver(contentBlockRef);
</script>

<template>
    <section 
        ref="contentBlockRef"
        :class="['about-info__personal', { settled: isIntersecting }]"
    >
        <p class="personal-info__paragraph">Моя жизнь – это путь от ощущения одиночества и необходимости быть «успешной ради любви» к глубокому пониманию себя и проживанию жизни в согласии с тем, что для меня действительно важно. Я всегда тонко чувствовала мир и людей вокруг, улавливала скрытую глубину за внешними событиями и остро переживала любую несправедливость.</p>
        <p class="personal-info__paragraph">Более 10 лет я профессионально занималась спортивно-бальными танцами, которые научили меня трудолюбию и настойчивости, но также показали цену зависимости самоценности от чужих оценок. Периоды кризиса стали точкой трансформации: я обратилась внутрь и начала исследовать свои чувства, мысли, ограничения и желания. Этот путь самоисследования привел меня к профессии психолога.</p>
        <p class="personal-info__paragraph">Сегодня я психолог-консультант в экзистенциальном подходе. В своей работе я создаю пространство, где человек может исследовать себя, открывать свои ресурсы и строить жизнь, основанную на собственных смыслах и ценностях. Моя задача – сопровождать на пути к цельной, благополучной жизни, в которой есть место и амбициям, и мягкости, и глубокому согласию с собой.</p>
        <p class="personal-info__paragraph">Я верю, что истинное благополучие рождается из целостности – когда человек понимает себя во всей многогранности и создает жизнь, где внешняя реализованность опирается на внутреннюю правду. Моя сила – в чуткости, глубине и верности своему пути. Моя цель – поддерживать других в том, чтобы они чувствовали себя живыми и по-настоящему счастливыми.</p>
    </section>
</template>

<style lang='scss' scoped>
    .about-info__personal {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: $brd-radius;
        overflow: hidden;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 120%;
            transform: translateY(0);
            pointer-events: none;
            z-index: 1;
            background: linear-gradient(
                to top,
                var(--color__background) 80%,
                transparent 100%
            );
            transition: transform $anim;
            transition-delay: calc($ease-duration * 2);
        }

        &.settled {
            &::after {
                transform: translateY(100%);
            }
        }
    }

    .personal-info__paragraph {
        @include adaptive-font(14px, 16px);
    }
</style>
