// ~/composables/useShowMore.ts
import { ref, computed } from 'vue'

export function useShowMore(collapsedHeight = '50vh') {
  const expanded = ref(false)
  const style = computed(() => ({
    maxHeight: expanded.value ? 'none' : collapsedHeight,
    overflow: expanded.value ? 'visible' : 'hidden'
  }))
  const toggle = () => {
    expanded.value = !expanded.value
  }
  return { expanded, style, toggle }
}
