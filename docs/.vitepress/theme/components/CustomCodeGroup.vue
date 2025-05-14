<template>
  <div class="custom-code-group">
    <div class="tabs" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: selectedIndex === index }]"
        @click="selectedIndex = index"
        role="tab"
        :aria-selected="selectedIndex === index"
      >
        <slot :name="'tab-' + index" />
      </button>
    </div>
    <div class="panels" role="tabpanel">
      <slot :name="'panel-' + selectedIndex" />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
const selectedIndex = ref(0)
const tabs = ref([])
provide('register-tab', (tab) => {
  tabs.value.push(tab)
})
</script>

<style scoped>
.custom-code-group {
  margin-bottom: 1rem;
}
.tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
}
.tab {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;
}
.tab.active {
  border-bottom: 2px solid #3b82f6;
  color: #3b82f6;
}
.tab .icon {
  display: inline-flex;
  align-items: center;
}
</style>
