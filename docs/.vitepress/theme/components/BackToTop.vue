<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue'

const isVisible = ref(false)

const toggleButton = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleButton)
    toggleButton()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', toggleButton)
  }
})
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    @keydown.enter.prevent="scrollToTop"
    @keydown.space.prevent="scrollToTop"
    tabindex="0"
    class="fixed bottom-6 right-6 z-50 p-3 rounded-full border shadow-md backdrop-blur bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Voltar ao topo"
  >
    <ArrowUp class="w-5 h-5" />
  </button>
</template>
