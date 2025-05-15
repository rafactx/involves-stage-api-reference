// .vitepress/theme/index.ts

/**
 * Extensão do tema padrão do VitePress.
 *
 * Este arquivo:
 * - Aplica estilos globais customizados
 * - Registra componentes Vue reutilizáveis
 * - Define diretivas personalizadas
 * - Substitui o layout padrão pelo layout customizado (MyLayout)
 */

import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'

// 🎨 Estilos globais aplicados a toda a doc
import './tokens.css'
import './style.css'

// 🧩 Componentes globais reutilizáveis (ex: abas de código, logo, animações)
import CustomCodeGroup from './components/CustomCodeGroup.vue'
import CustomTabLabel from './components/CustomTabLabel.vue'
import TabSwitcher from './components/TabSwitcher.vue'
import CodeTabsRequisicao from './components/CodeTabsRequisicao.vue'
import Logo from './components/Logo.vue'
import HeroImageMotion from './components/HeroImageMotion.vue'

// 🎯 Diretiva personalizada para animações ao entrar na viewport
import { intersect } from './directives/intersect'

// 🧱 Layout customizado (substitui o padrão do VitePress)
import MyLayout from './MyLayout.vue'

export default {
  // 🔁 Baseia-se no tema padrão e adiciona extensões
  ...DefaultTheme,

  /**
   * Substitui o layout principal pelo layout customizado.
   * O layout é responsável por exibir a home estilizada e a estrutura visual base.
   */
  Layout: MyLayout,

  /**
   * Função chamada ao inicializar o app Vue do VitePress.
   * Permite registrar componentes e diretivas globais.
   *
   * @param {EnhanceAppContext} app - Contexto com acesso ao app Vue
   */
  enhanceApp({ app }: EnhanceAppContext) {
    // 🧩 Registro de componentes usados nos arquivos .md
    app.component('CustomCodeGroup', CustomCodeGroup)
    app.component('CustomTabLabel', CustomTabLabel)
    app.component('TabSwitcher', TabSwitcher)
    app.component('CodeTabsRequisicao', CodeTabsRequisicao)
    app.component('Logo', Logo)
    app.component('HeroImageMotion', HeroImageMotion)

    // ⚙️ Diretiva v-intersect (ex: para animações com scroll)
    app.directive('intersect', intersect)
  }
}
