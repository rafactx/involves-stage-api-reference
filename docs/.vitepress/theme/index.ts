import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import './tokens.css'
import './style.css'

// Componentes globais
import CustomCodeGroup from './components/CustomCodeGroup.vue'
import CustomTabLabel from './components/CustomTabLabel.vue'
import TabSwitcher from './components/TabSwitcher.vue'
import CodeTabsRequisicao from './components/CodeTabsRequisicao.vue'
import Logo from './components/Logo.vue'
import HeroImageMotion from './components/HeroImageMotion.vue' 

// Diretivas
import { intersect } from './directives/intersect'

// Layout personalizado
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }: EnhanceAppContext) {
    // Componentes personalizados
    app.component('CustomCodeGroup', CustomCodeGroup)
    app.component('CustomTabLabel', CustomTabLabel)
    app.component('TabSwitcher', TabSwitcher)
    app.component('CodeTabsRequisicao', CodeTabsRequisicao)
    app.component('Logo', Logo)
    app.component('HeroImageMotion', HeroImageMotion) 

    // Diretivas
    app.directive('intersect', intersect)
  }
}
