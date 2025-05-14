import type { SidebarGroup } from '../pt-sidebar'

export const descontinuadosSidebar: SidebarGroup = [
  {
    text: '🧱 Endpoints Sync (Descontinuados)',
    collapsed: false,
    items: [
      { text: 'Categorias de Produto', link: '/pt/endpoints-descontinuados-sync/categorias-de-produto' },
      { text: 'Formulários', link: '/pt/endpoints-descontinuados-sync/formularios' },
      { text: 'Linhas de Produto', link: '/pt/endpoints-descontinuados-sync/linhas-de-produto' },
      { text: 'Marca', link: '/pt/endpoints-descontinuados-sync/marca' },
      { text: 'PDVs', link: '/pt/endpoints-descontinuados-sync/pontos-de-venda' },
      { text: 'Produtos - SKUs', link: '/pt/endpoints-descontinuados-sync/produtos-skus' },
      { text: 'Respostas de Pesquisas', link: '/pt/endpoints-descontinuados-sync/respostas-de-pesquisas' },
      { text: 'Supercategorias de Produto', link: '/pt/endpoints-descontinuados-sync/supercategorias-de-produto' },
      { text: 'Visitas Realizadas', link: '/pt/endpoints-descontinuados-sync/visitas-realizadas' },
      { text: 'Fotos Pesquisa (Ext)', link: '/pt/endpoints-descontinuados-sync/api-de-fotos-de-pesquisa-ext' },
      { text: 'Fotos Pesquisa (Int)', link: '/pt/endpoints-descontinuados-sync/api-de-fotos-de-pesquisa-int' }
    ]
  }
]
