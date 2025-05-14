import type { SidebarGroup } from '../pt-sidebar'

export const pesquisaInformativaSidebar: SidebarGroup = [
  {
    text: '📊 Pesquisa Informativa',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/pesquisa-informativa/README' },
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          { text: 'Detalhar Pesquisa Informativa', link: '/pt/endpoints/pesquisa-informativa/get/detalhar-pesquisa-informativa' },
          { text: 'Listar Pesquisas Informativas', link: '/pt/endpoints/pesquisa-informativa/get/listar-pesquisas-informativas' }
        ]
      },
      {
        text: '🟢 POST',
        collapsed: true,
        items: [
          { text: 'Cadastrar Pesquisa Informativa', link: '/pt/endpoints/pesquisa-informativa/post/cadastrar-pesquisa-informativa' }
        ]
      }
    ]
  }
]