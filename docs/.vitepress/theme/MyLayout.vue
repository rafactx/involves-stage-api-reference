<template>
  <Layout>
    <!-- 🌟 Seção personalizada da home com hero, animação e destaques -->
    <main v-if="showHome" class="home home-container">
      <HeroImageMotion class="z-10" />
      <MyHero />
      <section class="features">
        <FeatureList />
      </section>
    </main>

    <!-- 📄 Renderização padrão dos conteúdos Markdown -->
    <slot />

    <!-- 🔝 Botão global para voltar ao topo -->
    <BackToTop v-if="scrolled" />
  </Layout>
</template>

<script setup lang="ts">
/**
 * MyLayout.vue
 *
 * Substitui o layout padrão do VitePress para permitir:
 * - Exibição personalizada da home (com Hero, animações e features)
 * - Redirecionamento automático baseado no idioma do navegador
 * - Detecção de rolagem para exibir botão flutuante de "voltar ao topo"
 *
 * Utiliza componentes visuais customizados e integrações com o tema base.
 */

import DefaultTheme from 'vitepress/theme'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRouter, useRoute } from 'vitepress'

// 🧩 Componentes visuais customizados reutilizados na home
import FeatureList from './components/FeatureList.vue'
import MyHero from './components/MyHero.vue'
import MyFeature from './components/MyFeature.vue'
import HeroImageMotion from './components/HeroImageMotion.vue'
import BackToTop from './components/BackToTop.vue'

// 🎨 Extração do layout base do VitePress
const { Layout } = DefaultTheme

// 📄 Dados do frontmatter da página atual
const { frontmatter } = useData()

// 🧭 Hooks de navegação
const router = useRouter()
const route = useRoute()

/**
 * Determina se a página atual é a home.
 * Exibe a seção hero apenas quando o layout for `home`.
 */
const showHome = computed(() => frontmatter.value.layout === 'home')

/**
 * Flag que controla a exibição do botão flutuante "voltar ao topo".
 * Ativada apenas se a rolagem vertical passar de 300px.
 */
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 300
}

/**
 * Detecta o idioma do navegador e redireciona automaticamente
 * para a versão localizada da documentação (ex: /pt, /en, /fr).
 * Executado apenas na home raiz ("/").
 */
const handleLanguageRedirect = () => {
  if (route.path === '/') {
    const lang = navigator.language?.toLowerCase().slice(0, 2) || 'pt'
    const supported = ['pt', 'en', 'es', 'fr']
    const fallback = 'pt'
    const targetLang = supported.includes(lang) ? lang : fallback
    router.go(`/${targetLang}/`)
  }
}

/**
 * Inicializa os listeners de scroll e o redirecionamento por idioma.
 */
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleLanguageRedirect()
})

/**
 * Remove o listener de scroll ao desmontar o componente.
 */
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
