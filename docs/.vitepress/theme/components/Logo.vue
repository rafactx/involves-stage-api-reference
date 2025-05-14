<template>
  <a href="/" aria-label="Ir para a página inicial">
    <img
      :src="isDark ? darkLogo : lightLogo"
      alt="Logo Involves"
      class="logo"
    />
  </a>
</template>

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()

// Certifique-se que esses arquivos estão em /public/
const lightLogo = '/logo-involves-light.png'
const darkLogo = '/logo-involves-dark.png'
</script>

<style scoped>
.logo {
  height: 32px;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.logo:hover {
  transform: scale(1.03);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
