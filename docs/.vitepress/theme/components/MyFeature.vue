<template>
  <div ref="cardEl" class="feature">
    <h2>{{ title }}</h2>
    <p>{{ details }}</p>
    <a class="feature-link" :href="link">Acessar →</a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'

const props = defineProps<{
  title: string
  details: string
  link: string
  index: number
}>()

const cardEl = ref(null)

useMotion(cardEl, {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: props.index * 0.1,
      easing: 'ease-out'
    }
  }
})
</script>
