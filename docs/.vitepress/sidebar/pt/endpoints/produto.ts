import type { SidebarGroup } from '../pt-sidebar'

export const produtoSidebar: SidebarGroup = [
  {
    text: '📦 Produto',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/produto/README' },

      // GET
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          { text: 'Buscar Linha de Produto por ID', link: '/pt/endpoints/produto/get/buscar-linha-de-produto-por-id' },
          { text: 'Buscar Linhas de Produto', link: '/pt/endpoints/produto/get/buscar-linhas-de-produto' },
          { text: 'Categoria da Linha de Produto', link: '/pt/endpoints/produto/get/categoria-da-linha-de-produto' },
          { text: 'Detalhar Supercategoria por ID', link: '/pt/endpoints/produto/get/detalhar-supercategoria-id' },
          { text: 'Detalhes da Categoria', link: '/pt/endpoints/produto/get/detalhes-da-categoria' },
          { text: 'Detalhes da Linha de Produto', link: '/pt/endpoints/produto/get/detalhes-da-linha-de-produto' },
          { text: 'Detalhes de Marca por ID', link: '/pt/endpoints/produto/get/detalhes-de-marca-id' },
          { text: 'Detalhes de um SKU', link: '/pt/endpoints/produto/get/detalhes-de-um-sku' },
          { text: 'Detalhes do SKU', link: '/pt/endpoints/produto/get/detalhes-do-sku' },
          { text: 'Lista de SKUs', link: '/pt/endpoints/produto/get/lista-de-skus' },
          { text: 'Listar Marcas', link: '/pt/endpoints/produto/get/listar-marcas' },
          { text: 'Listar Supercategorias', link: '/pt/endpoints/produto/get/listar-supercategorias' },
          { text: 'Supercategoria da Linha de Produto', link: '/pt/endpoints/produto/get/supercategoria-da-linha-de-produto' }
        ]
      },

      // POST
      {
        text: '🟢 POST',
        collapsed: true,
        items: [
          { text: 'Criar SKU', link: '/pt/endpoints/produto/post/criar-sku' },
          { text: 'Linha de Produto', link: '/pt/endpoints/produto/post/linha-de-produto' }
        ]
      },

      // PATCH
      {
        text: '🟠 PATCH',
        collapsed: true,
        items: [
          { text: 'Atualizar Linha de Produto', link: '/pt/endpoints/produto/patch/atualizar-linha-de-produto' },
          { text: 'Atualizar SKU', link: '/pt/endpoints/produto/patch/atualizar-sku' }
        ]
      }
    ]
  }
]