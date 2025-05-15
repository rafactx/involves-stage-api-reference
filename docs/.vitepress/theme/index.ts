// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'

// 🎨 Estilos globais
import './tokens.css'
import './style.css'

// 🧩 Componentes globais personalizados
import CustomCodeGroup from './components/CustomCodeGroup.vue'
import CustomTabLabel from './components/CustomTabLabel.vue'
import TabSwitcher from './components/TabSwitcher.vue'
import CodeTabsRequisicao from './components/CodeTabsRequisicao.vue'
import Logo from './components/Logo.vue'
import HeroImageMotion from './components/HeroImageMotion.vue'

// 🎯 Diretivas personalizadas
import { intersect } from './directives/intersect'

// 🧱 Layout customizado com animações e home especial
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,

  // 🔁 Substitui o layout padrão do VitePress pelo seu
  Layout: MyLayout,

  // 🚀 Registro de componentes/diretivas globais
  enhanceApp({ app }: EnhanceAppContext) {
    // 🧩 Componentes reutilizáveis em qualquer .md ou template
    app.component('CustomCodeGroup', CustomCodeGroup)
    app.component('CustomTabLabel', CustomTabLabel)
    app.component('TabSwitcher', TabSwitcher)
    app.component('CodeTabsRequisicao', CodeTabsRequisicao)
    app.component('Logo', Logo)
    app.component('HeroImageMotion', HeroImageMotion)

    // ⚙️ Diretiva v-intersect (ex: fade-in, reveal, etc.)
    app.directive('intersect', intersect)
  }
}
