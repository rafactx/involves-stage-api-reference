<template>
  <div class="custom-code-group" role="region" aria-label="Exemplos de código por linguagem">
    <!-- 🔁 Abas de linguagens -->
    <div class="tabs" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: selectedIndex === index }]"
        @click="selectedIndex = index"
        role="tab"
        :aria-selected="selectedIndex === index"
        :tabindex="selectedIndex === index ? 0 : -1"
        :id="`code-tab-${index}`"
        :aria-controls="`code-panel-${index}`"
      >
        <slot :name="'tab-' + index" />
      </button>
    </div>

    <!-- 📄 Painel visível com base no index -->
    <div
      class="panels"
      role="tabpanel"
      :aria-labelledby="`code-tab-${selectedIndex}`"
      :id="`code-panel-${selectedIndex}`"
    >
      <slot :name="'panel-' + selectedIndex" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

// 🔁 Index atual da aba ativa
const selectedIndex = ref(0)

// 📦 Armazena labels registrados (se quiser evoluir para modo dinâmico)
const tabs = ref<string[]>([])

// 💡 Permite que filhos (como TabLabel) se registrem, se precisar no futuro
provide('register-tab', (tab: string) => {
  tabs.value.push(tab)
})
</script>

<style scoped>
.custom-code-group {
  margin-bottom: 1.5rem;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0.75rem;
  overflow-x: auto;
}

.tab {
  appearance: none;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  color: inherit;
}

.tab:hover {
  color: #2563eb;
}

.tab.active {
  border-bottom: 2px solid #3b82f6;
  color: #3b82f6;
}

.tab:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>
