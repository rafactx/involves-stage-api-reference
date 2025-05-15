<script setup lang="ts">
/**
 * Componente BackToTop.vue
 *
 * Exibe um botão flutuante no canto inferior direito da tela
 * que, ao ser clicado, rola suavemente a página para o topo.
 *
 * A visibilidade do botão é controlada com base na rolagem vertical da janela (scrollY > 300).
 * Inclui acessibilidade via `tabindex`, `aria-label` e suporte a teclado (enter/space).
 *
 * Este componente é utilizado dentro do layout principal (MyLayout.vue).
 */

import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue'

/**
 * Estado que controla a visibilidade do botão.
 * Será true quando o usuário tiver rolado mais de 300px.
 */
const isVisible = ref(false)

/**
 * Atualiza o estado `isVisible` com base na posição atual do scroll da janela.
 * Ativado em tempo real pelo listener de scroll.
 */
const toggleButton = () => {
  isVisible.value = window.scrollY > 300
}

/**
 * Executa uma rolagem suave até o topo da página.
 * Acionado ao clicar ou pressionar enter/space no botão.
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * Ao montar o componente:
 * - Adiciona um listener de scroll para monitorar visibilidade
 * - Força verificação imediata do estado para evitar atraso
 */
onMounted(() => {
  window.addEventListener('scroll', toggleButton)
  toggleButton()
})

/**
 * Ao desmontar:
 * - Remove o listener de scroll para evitar memory leaks
 */
onUnmounted(() => {
  window.removeEventListener('scroll', toggleButton)
})
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    @keydown.enter.prevent="scrollToTop"
    @keydown.space.prevent="scrollToTop"
    tabindex="0"
    aria-label="Voltar ao topo"
    class="fixed bottom-6 right-6 z-50 p-3 rounded-full border shadow-md backdrop-blur bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <ArrowUp class="w-5 h-5" />
  </button>
</template>
