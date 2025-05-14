<template>
  <Layout>
    <!-- 🌟 Hero + features (home personalizada) -->
    <main v-if="showHome" class="home home-container">
      <HeroImageMotion class="z-10" />
      <MyHero />

      <section class="features">
        <MyFeature
          v-for="(feature, index) in features"
          :key="feature.title"
          :title="feature.title"
          :details="feature.details"
          :link="feature.link"
          :index="index"
        />
      </section>
    </main>

    <!-- 📄 Conteúdo renderizado da página (markdown) -->
    <slot />

    <!-- 🔝 Botão de voltar ao topo (exibido globalmente se rolar) -->
    <BackToTop />
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

// Componentes personalizados
import MyHero from './components/MyHero.vue'
import MyFeature from './components/MyFeature.vue'
import HeroImageMotion from './components/HeroImageMotion.vue'
import BackToTop from './components/BackToTop.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// Exibe a home personalizada apenas se layout === 'home'
const showHome = computed(() => frontmatter.value.layout === 'home')

// Estado para controle de rolagem (caso precise futuramente)
const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Cards da home (com delay animado por index)
const features = ref([
  {
    title: '📘 Guia da API',
    details: 'Autenticação, ambientes, erros comuns e boas práticas para começar com segurança.',
    link: '/pt/guia-da-api'
  },
  {
    title: '⚙️ Endpoints REST',
    details: 'Explore todos os endpoints organizados por módulos como Colaborador, Produto, PDV, entre outros.',
    link: '/pt/endpoints/README'
  },
  {
    title: '🧠 Central de Ajuda',
    details: 'Explore materiais complementares, tutoriais e respostas para dúvidas comuns sobre o uso do Involves Stage.',
    link: 'https://help.involves.com/hc/pt-br'
  }
])
</script>
