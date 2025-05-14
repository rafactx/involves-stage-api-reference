<template>
  <div class="tab-switcher">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: index === selected }]"
        @click="selected = index"
      >
        <img v-if="tab.icon" :src="tab.icon" :alt="tab.label" class="icon" />
        {{ tab.label }}
      </button>
    </div>
    <div class="panel">
      <slot :name="`panel-${selected}`" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ tabs: Array })
const selected = ref(0)
</script>

<style scoped>
.tab-switcher {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}
.tabs {
  display: flex;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}
.tab {
  flex: 1;
  padding: 0.6rem 1rem;
  background: transparent;
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  transition: background 0.2s;
}
.tab.active {
  background-color: white;
  border-bottom: 2px solid #3b82f6;
}
.tab:hover {
  background-color: #f3f4f6;
}
.icon {
  width: 16px;
  height: 16px;
}
.panel {
  padding: 1rem;
  background-color: white;
}
</style>
