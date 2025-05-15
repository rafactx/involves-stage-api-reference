// .vitepress/sidebar/pt-sidebar.ts

/**
 * 🎯 Definição da sidebar em português (pt-BR) para a documentação.
 * 
 * Essa estrutura agrupa os principais blocos da doc, incluindo:
 * - Guia inicial com boas práticas
 * - Endpoints organizados por módulo
 * - Endpoints descontinuados
 * 
 * As seções são construídas a partir de arquivos modulares para facilitar manutenção e versionamento.
 */

import type { DefaultTheme } from 'vitepress'

// 📘 Bloco: Guia da API (ex: autenticação, versionamento)
import { guiaSidebar } from './pt/guia'

// 🧱 Bloco: Endpoints descontinuados
import { descontinuadosSidebar } from './pt/descontinuados'

// 🚀 Blocos: Endpoints ativos por domínio (ex: Colaborador, Produto, PDV)
import {
  colaboradorSidebar,
  pesquisaSidebar,
  pesquisaInformativaSidebar,
  pontoDeVendaSidebar,
  produtoSidebar,
  roteiroSidebar
} from './pt/endpoints'

/**
 * 📚 Estrutura da sidebar da documentação em Português.
 *
 * Agrupada por:
 * - Guia da API
 * - Endpoints REST organizados por módulo
 * - Endpoints descontinuados
 *
 * Cada entrada é representada por uma rota (prefixo) e um conjunto de itens.
 */
export const ptSidebar: DefaultTheme.Sidebar = {
  // 📘 Seção: Guia da API
  '/pt/guia-da-api': guiaSidebar,

  // 🚀 Seção: Endpoints organizados por módulo
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

  // 🧱 Seção: Endpoints descontinuados (mantidos para referência)
  '/pt/endpoints-descontinuados-sync/': descontinuadosSidebar
}

/**
 * 🛡️ Tipo auxiliar para agrupar subgrupos da sidebar.
 * 
 * Garante consistência e suporte a propriedades como `collapsed`.
 * Usado nos arquivos modulares (ex: colaborador.ts, produto.ts).
 */
export type SidebarGroup = DefaultTheme.SidebarItem[]
