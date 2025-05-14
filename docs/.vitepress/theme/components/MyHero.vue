<template>
  <section class="hero">
    <div class="hero-content">
      <div ref="textEl" class="hero-text">
        <h1>
          <span style="color: var(--color-involves)">Involves Stage API</span>
        </h1>
        <p class="tagline">Documentação oficial da plataforma Involves Stage</p>
        <p class="tagline">Tudo o que você precisa para integrar com nossa plataforma de trade marketing.</p>
        <div class="actions">
          <a class="button brand" href="/pt/guia-da-api">Começar Agora →</a>
          <a class="button alt" href="/pt/endpoints/README">Ver Endpoints →</a>
        </div>
      </div>
      <div ref="imageEl" class="hero-image">
        <img src="/involves-stage-home.png" alt="Imagem Involves Stage" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const textEl = ref(null)
const imageEl = ref(null)

useMotion(textEl, {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8 } }
})

useMotion(imageEl, {
  initial: { opacity: 0, scale: 0.95 },
  enter: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }
})
</script>

<style scoped>
.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1;
  min-width: 280px;
}

.hero-image img {
  max-width: 640px;
  width: 100%;
  height: auto;
  display: block;
}
</style>
