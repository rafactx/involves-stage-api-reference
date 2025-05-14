import type { DefaultTheme } from 'vitepress'

// 📘 Guia da API
import { guiaSidebar } from './pt/guia'

// 🧱 Endpoints Descontinuados
import { descontinuadosSidebar } from './pt/descontinuados'

// 🚀 Endpoints Modulares
import {
  colaboradorSidebar,
  pesquisaSidebar,
  pesquisaInformativaSidebar,
  pontoDeVendaSidebar,
  produtoSidebar,
  roteiroSidebar
} from './pt/endpoints'

/**
 * 📚 Sidebar da documentação em Português.
 */
export const ptSidebar: DefaultTheme.Sidebar = {
  // 📘 Guia da API
  '/pt/guia-da-api': guiaSidebar,

  // 🚀 Endpoints principais
  '/pt/endpoints/': [
    {
      text: '📂 Endpoints',
      collapsed: false,
      items: [
        { text: 'Visão Geral', link: '/pt/endpoints/README' }
      ]
    },
    ...colaboradorSidebar,
    ...pesquisaSidebar,
    ...pesquisaInformativaSidebar,
    ...pontoDeVendaSidebar,
    ...produtoSidebar,
    ...roteiroSidebar
  ],

  // 🧱 Endpoints descontinuados
  '/pt/endpoints-descontinuados-sync/': descontinuadosSidebar
}

/**
 * 🛡️ Tipagem auxiliar para garantir consistência nos arquivos modulares.
 */
export type SidebarGroup = DefaultTheme.SidebarItem & {
  collapsed?: boolean
  items: DefaultTheme.SidebarItem[]
}[]
