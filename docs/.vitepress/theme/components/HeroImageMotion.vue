<template>
  <v-motion
    tag="img"
    class="hero-img"
    alt="Dashboard Involves Stage"
    :initial="initial"
    :enter="enter"
    :transition="transition"
    :props="{ src: imageSrc }"
  />
</template>

<script setup lang="ts">
const imageSrc = '/involves-stage-home.png'

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
}

@media (max-width: 768px) {
  .hero-img {
    max-width: 90%;
  }
}
</style>
