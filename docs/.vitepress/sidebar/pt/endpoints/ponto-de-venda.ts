import type { SidebarGroup } from '../pt-sidebar'

export const pontoDeVendaSidebar: SidebarGroup = [
  {
    text: '🏬 Ponto de Venda',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/ponto-de-venda/README' },

      // GET
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          {
            text: 'Canal PDV',
            collapsed: true,
            items: [
              { text: 'Canal por ID', link: '/pt/endpoints/ponto-de-venda/get/canal-pdv/canal-de-ponto-de-venda-por-id' },
              { text: 'Listar Canais', link: '/pt/endpoints/ponto-de-venda/get/canal-pdv/listar-canais-de-ponto-de-venda' }
            ]
          },
          {
            text: 'Cidade',
            collapsed: true,
            items: [
              { text: 'Buscar Cidade por ID', link: '/pt/endpoints/ponto-de-venda/get/cidade/buscar-cidade-por-id' },
              { text: 'Buscar Cidades', link: '/pt/endpoints/ponto-de-venda/get/cidade/buscar-cidades' }
            ]
          },
          {
            text: 'Endereço',
            collapsed: true,
            items: [
              { text: 'Buscar Bandeira por ID', link: '/pt/endpoints/ponto-de-venda/get/endereco/buscar-bandeira-por-id' },
              { text: 'Buscar Endereço do PDV', link: '/pt/endpoints/ponto-de-venda/get/endereco/buscar-endereco-do-ponto-de-venda' },
              { text: 'Buscar Macrorregional por ID', link: '/pt/endpoints/ponto-de-venda/get/endereco/buscar-macrorregional-por-id' },
              { text: 'Buscar PDV por ID (via endereço)', link: '/pt/endpoints/ponto-de-venda/get/endereco/buscar-ponto-de-venda-por-id' }
            ]
          },
          {
            text: 'Estado',
            collapsed: true,
            items: [
              { text: 'Buscar Estado por ID', link: '/pt/endpoints/ponto-de-venda/get/estado/buscar-estado-por-id' },
              { text: 'Listar Estados', link: '/pt/endpoints/ponto-de-venda/get/estado/listar-estados' }
            ]
          },
          {
            text: 'País',
            collapsed: true,
            items: [
              { text: 'Buscar País por Código', link: '/pt/endpoints/ponto-de-venda/get/pais/buscar-pais-por-codigo' },
              { text: 'Listar Países', link: '/pt/endpoints/ponto-de-venda/get/pais/listar-paises' }
            ]
          },
          {
            text: 'PDV',
            collapsed: true,
            items: [
              { text: 'Buscar PDV por ID', link: '/pt/endpoints/ponto-de-venda/get/pdv/buscar-ponto-de-venda-por-id' },
              { text: 'Listar PDVs v3', link: '/pt/endpoints/ponto-de-venda/get/pdv/listar-pontos-de-venda-v3' },
              { text: 'Listar PDVs', link: '/pt/endpoints/ponto-de-venda/get/pdv/listar-pontos-de-venda' }
            ]
          },
          {
            text: 'Perfil PDV',
            collapsed: true,
            items: [
              { text: 'Listar Perfis de PDV', link: '/pt/endpoints/ponto-de-venda/get/perfil-pdv/listar-perfis-de-pontos-de-venda' }
            ]
          },
          {
            text: 'Rede',
            collapsed: true,
            items: [
              { text: 'Buscar Bandeiras (find)', link: '/pt/endpoints/ponto-de-venda/get/rede/buscar-bandeiras-find' },
              { text: 'Buscar Rede por ID', link: '/pt/endpoints/ponto-de-venda/get/rede/buscar-rede-por-id' },
              { text: 'Listar Bandeiras (chain)', link: '/pt/endpoints/ponto-de-venda/get/rede/listar-bandeiras-chain' }
            ]
          },
          {
            text: 'Regionais',
            collapsed: true,
            items: [
              { text: 'Buscar Regionais (find)', link: '/pt/endpoints/ponto-de-venda/get/regionais/buscar-regionais-find' },
              { text: 'Buscar Regional por ID', link: '/pt/endpoints/ponto-de-venda/get/regionais/buscar-regional-por-id' },
              { text: 'Listar Regionais', link: '/pt/endpoints/ponto-de-venda/get/regionais/listar-regionais' }
            ]
          },
          {
            text: 'Tipo PDV',
            collapsed: true,
            items: [
              { text: 'Buscar Tipo de PDV por ID', link: '/pt/endpoints/ponto-de-venda/get/tipo-pdv/buscar-tipo-de-ponto-de-venda-por-id' },
              { text: 'Listar Tipos de PDV (paginado)', link: '/pt/endpoints/ponto-de-venda/get/tipo-pdv/listar-tipos-de-ponto-de-venda-paginado' }
            ]
          }
        ]
      },

      // POST
      {
        text: '🟢 POST',
        collapsed: true,
        items: [
          {
            text: 'Canal PDV',
            collapsed: true,
            items: [
              { text: 'Criar Canal de PDV', link: '/pt/endpoints/ponto-de-venda/post/canal-pdv/criar-canal-de-ponto-de-venda' }
            ]
          },
          {
            text: 'PDV',
            collapsed: true,
            items: [
              { text: 'Criar PDV', link: '/pt/endpoints/ponto-de-venda/post/pdv/criar-ponto-de-venda' }
            ]
          },
          {
            text: 'Perfil PDV',
            collapsed: true,
            items: [
              { text: 'Criar Perfil de PDV', link: '/pt/endpoints/ponto-de-venda/post/perfil-pdv/criar-perfil-de-ponto-de-venda' }
            ]
          },
          {
            text: 'Rede',
            collapsed: true,
            items: [
              { text: 'Criar Rede', link: '/pt/endpoints/ponto-de-venda/post/rede/criar-rede' }
            ]
          },
          {
            text: 'Região',
            collapsed: true,
            items: [
              { text: 'Criar Regional', link: '/pt/endpoints/ponto-de-venda/post/regiao/criar-regional' }
            ]
          },
          {
            text: 'Tipo PDV',
            collapsed: true,
            items: [
              { text: 'Criar Tipo de PDV', link: '/pt/endpoints/ponto-de-venda/post/tipo-pdv/criar-tipo-de-ponto-de-venda' }
            ]
          }
        ]
      },

      // PUT
      {
        text: '🟡 PUT',
        collapsed: true,
        items: [
          {
            text: 'PDV',
            collapsed: true,
            items: [
              { text: 'Editar PDV', link: '/pt/endpoints/ponto-de-venda/put/pdv/editar-ponto-de-venda' }
            ]
          },
          {
            text: 'Região',
            collapsed: true,
            items: [
              { text: 'Editar Regional', link: '/pt/endpoints/ponto-de-venda/put/regiao/editar-regional' }
            ]
          }
        ]
      },

      // PATCH
      {
        text: '🟠 PATCH',
        collapsed: true,
        items: [
          {
            text: 'PDV',
            collapsed: true,
            items: [
              { text: 'Alterar Propriedades do PDV', link: '/pt/endpoints/ponto-de-venda/patch/pdv/alterar-propriedades-de-um-pdv' }
            ]
          }
        ]
      },

      // DELETE
      {
        text: '🔴 DELETE',
        collapsed: true,
        items: [
          {
            text: 'PDV',
            collapsed: true,
            items: [
              { text: 'Excluir Ponto de Venda', link: '/pt/endpoints/ponto-de-venda/delete/pdv/excluir-ponto-de-venda' }
            ]
          }
        ]
      }
    ]
  }
]
