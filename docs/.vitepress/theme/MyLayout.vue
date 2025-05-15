<template>
  <Layout>
    <!-- 🌟 Home personalizada com Hero + destaques -->
    <main v-if="showHome" class="home home-container">
      <HeroImageMotion class="z-10" />
      <MyHero />
      <section class="features">
        <FeatureList />
      </section>
    </main>

    <!-- 📄 Conteúdo Markdown (renderizado via slot) -->
    <slot />

    <!-- 🔝 Botão "voltar ao topo" global -->
    <BackToTop v-if="scrolled" />
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { useRouter, useRoute } from 'vitepress'

// 🧩 Componentes customizados do tema
import FeatureList from './components/FeatureList.vue'
import MyHero from './components/MyHero.vue'
import MyFeature from './components/MyFeature.vue'
import HeroImageMotion from './components/HeroImageMotion.vue'
import BackToTop from './components/BackToTop.vue'

// 🎨 Layout base do VitePress
const { Layout } = DefaultTheme
const { frontmatter } = useData()
const router = useRouter()
const route = useRoute()

// 📌 Mostrar layout customizado se for página home
const showHome = computed(() => frontmatter.value.layout === 'home')

// 📌 Detecta rolagem para mostrar botão flutuante
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 300
}

// 🌍 Redirecionamento automático com base no idioma do navegador
const handleLanguageRedirect = () => {
  if (route.path === '/') {
    const lang = navigator.language?.toLowerCase().slice(0, 2) || 'pt'
    const supported = ['pt', 'en', 'es', 'fr']
    const fallback = 'pt'
    const targetLang = supported.includes(lang) ? lang : fallback
    router.go(`/${targetLang}/`)
  }
}

// 📦 Lista de recursos visuais na home
// 🚀 Inicializa listeners e redirecionamento
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleLanguageRedirect()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
