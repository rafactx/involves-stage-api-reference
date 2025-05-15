<template>
  <div ref="cardEl" class="feature-card">
    <h2 class="feature-title">{{ title }}</h2>
    <p class="feature-description">{{ details }}</p>
    <a
      class="feature-link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Acessar →
    </a>
  </div>
</template>

<script setup lang="ts">
// 🎯 Props bem definidas com tipagem explícita
const props = defineProps<{
  title: string
  details: string
  link: string
  index: number
}>()

// 📦 Ref do card animado
import { ref } from 'vue'
const cardEl = ref<HTMLElement | null>(null)

// ✨ Animação ao entrar na viewport
import { useMotion } from '@vueuse/motion'

useMotion(cardEl, {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: props.index * 0.1,
      easing: 'ease-out'
    }
  }
})
</script>

<style scoped>
.feature-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.feature-link {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.feature-link:hover {
  text-decoration: underline;
}
</style>
