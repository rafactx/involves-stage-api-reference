<template>
  <!-- 🔗 Link para a home com rótulo acessível -->
  <a href="/" aria-label="Ir para a página inicial" class="logo-link">
    <img
      :src="isDark ? darkLogo : lightLogo"
      alt="Logo Involves"
      class="logo"
      width="120"
      height="32"
      loading="eager"
      decoding="async"
    />
  </a>
</template>

<script setup lang="ts">
// 🎯 Detecta modo escuro via VitePress
import { useData } from 'vitepress'
const { isDark } = useData()

// 🖼️ Caminhos das logos (pasta public/)
const lightLogo = '/logo-involves-light.png'
const darkLogo = '/logo-involves-dark.png'
</script>

<style scoped>
.logo-link {
  display: inline-block;
  line-height: 0; /* remove espaço extra ao redor da img */
}

.logo {
  display: block;
  height: auto;
  max-height: 32px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.04);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
