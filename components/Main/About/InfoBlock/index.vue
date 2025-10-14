<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

defineProps({
    heading: { type: String, required: true },
    text: { type: Array<String>, required: true  },
    //svg: { type: [Object, Function], required: true },
});

// 2) Состояние: раскрыт блок или нет
const isExpanded = ref(false)

// 3) Реф на контейнер с текстом, чтобы мерить overflow
const contentRef = ref<HTMLElement | null>(null)
const needsTruncate = ref(false)

onMounted(async () => {
  await nextTick()
  const el = contentRef.value
  if (el && el.scrollHeight > el.clientHeight) {
    needsTruncate.value = true
  }
})

// 5) Переключение по клику
function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
    <div class="about__info">
        <header class="about__heading">
            <h3>{{ heading }}</h3>
        </header>

        <div
            ref="contentRef"
            class="about__content"
            :class="{ expanded: isExpanded }"
        >
            <p v-for="(p, i) in text" :key="i">{{ p }}</p>
        </div>

        <button
            v-if="needsTruncate"
            class="toggle-btn"
            @click="toggleExpand"
        >
            {{ isExpanded ? 'Показать меньше' : 'Показать больше' }}
        </button>
</div>
</template>

<style lang="scss" scoped>
    .about__info {
        position: relative;
        width: 100%;

        display: flex;
        flex-direction: column;
        flex-grow: 1;

        margin: 12px 0;
    }
    .about-block {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 8px;

        .heading {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            
            h3 {
                margin: 0 0 0 8px;
                font-size: 1.25rem;
            }
        }

        .content {
            overflow: hidden;
            transition: max-height 0.3s ease;
            /* по умолчанию высота фиксирована, например 150px */
            max-height: 150px;

            &.expanded {
                /* при развороте — высота под контент */
                max-height: none;
            }

            p {
                margin: 0 0 8px;
                line-height: 1.5;
            }
        }

        .toggle-btn {
            margin-top: 8px;
            background: none;
            border: none;
            color: #0070f3;
            cursor: pointer;
            font-size: 0.95rem;
            padding: 4px 0;

            &:hover {
                text-decoration: underline;
            }
        }

        .photos {
            margin-top: 12px;
            display: flex;
            gap: 8px;

            img {
                max-width: 100px;
                border-radius: 4px;
                object-fit: cover;
            }
        }
    }
</style>
