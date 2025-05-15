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
/**
 * Componente MyFeature.vue
 *
 * Representa um card visual animado com informações de destaque na home da documentação.
 * Exibe título, descrição e link de navegação, com entrada animada controlada via `@vueuse/motion`.
 * Utilizado dentro do `FeatureList.vue`.
 */

import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

/**
 * Props obrigatórias que descrevem o conteúdo do card.
 *
 * @prop title - Título principal exibido (com ícone embutido, ex: 📘 Guia da API)
 * @prop details - Descrição curta do recurso
 * @prop link - Caminho ou URL de navegação
 * @prop index - Índice usado para escalonar a animação
 */
const props = defineProps<{
  title: string
  details: string
  link: string
  index: number
}>()

/**
 * Elemento DOM que será animado ao entrar na viewport.
 */
const cardEl = ref<HTMLElement | null>(null)

/**
 * Controla a animação de entrada do card usando `useMotion`.
 * Cada card tem um pequeno atraso com base em seu índice,
 * criando efeito de cascata ao renderizar.
 */
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
