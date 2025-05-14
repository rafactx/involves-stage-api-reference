import type { SidebarGroup } from '../pt-sidebar'

export const pesquisaSidebar: SidebarGroup = [
  {
    text: '📝 Pesquisa',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/pesquisa/README' },
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          { text: 'Download de Imagem do Formulário', link: '/pt/endpoints/pesquisa/get/download-de-imagem-do-formulario' },
          { text: 'Formulário por ID', link: '/pt/endpoints/pesquisa/get/formulario-por-id' },
          { text: 'Formulários Ativos', link: '/pt/endpoints/pesquisa/get/formularios-ativos' },
          { text: 'Listar Campos do Formulário', link: '/pt/endpoints/pesquisa/get/listar-campos-do-formulario' }
        ]
      }
    ]
  }
]
