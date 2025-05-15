<template>
  <v-motion
    tag="img"
    class="hero-img"
    :alt="alt"
    :initial="initial"
    :enter="enter"
    :transition="transition"
    :props="{ src: imageSrc }"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup lang="ts">
// 📸 Fonte da imagem e alt descritivo para SEO/acessibilidade
const imageSrc = '/involves-stage-home.png'
const alt = 'Visual do painel de controle da API Involves Stage'

// 🔁 Animação suave de entrada (spring-style)
const initial = { opacity: 0, y: 40, scale: 0.95 }
const enter = { opacity: 1, y: 0, scale: 1 }
const transition = { type: 'spring', stiffness: 180, damping: 20 }
</script>

<style scoped>
.hero-img {
  display: block;
  max-width: 100%;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease-in-out;
}

.hero-img:hover {
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .hero-img {
    max-width: 90%;
  }
}
</style>
