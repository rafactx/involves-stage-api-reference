<template>
  <!-- 🧩 Rótulo da aba com ícone e texto -->
  <span class="tab-label">
    <img
      :src="src"
      :alt="alt"
      width="16"
      height="16"
      loading="lazy"
      class="tab-icon"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
// 🔧 Props tipadas e explícitas
defineProps<{
  src: string
  alt: string
}>()
</script>

<style scoped>
.tab-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.tab-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
</style>
