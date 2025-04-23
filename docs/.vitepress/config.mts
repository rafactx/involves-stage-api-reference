import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Involves Stage API Reference',
  description: 'Documentação oficial da API do Involves Stage',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg'
  },
  locales: {
    root: {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Guia da API', link: '/pt-BR/guia-da-api' },
          { text: 'Endpoints', link: '/pt-BR/endpoints/README' },
          { text: 'Endpoints Descontinuados', link: '/pt-BR/endpoints-descontinuados-sync/README' }
        ],
        sidebar: {
          '/pt-BR/guia-da-api': [
            {
              text: 'Guia da API',
              items: [{ text: 'Visão Geral', link: '/pt-BR/guia-da-api' }]
            }
          ],
          '/pt-BR/endpoints/': [
            {
              text: 'Colaborador',
              collapsed: false,
              items: [{ text: 'Visão Geral', link: '/pt-BR/endpoints/colaborador/README' }]
            },
            {
              text: 'GET',
              collapsed: true,
              items: [
                { text: 'Afastamento', link: '/pt-BR/endpoints/colaborador/get/afastamento' },
                { text: 'Afastamento por ID', link: '/pt-BR/endpoints/colaborador/get/afastamento-por-id' },
                { text: 'Colaborador por ID (v1)', link: '/pt-BR/endpoints/colaborador/get/colaborador-por-id-v1' },
                { text: 'Colaborador por ID (v3)', link: '/pt-BR/endpoints/colaborador/get/colaborador-por-id-v3' },
                { text: 'Endereço do Colaborador', link: '/pt-BR/endpoints/colaborador/get/endereco-do-colaborador' },
                { text: 'Listar Colaboradores', link: '/pt-BR/endpoints/colaborador/get/listar-colaboradores' },
                { text: 'Perfil de Acesso por ID', link: '/pt-BR/endpoints/colaborador/get/perfil-de-acesso-por-id' },
                { text: 'Visitas Agendadas por Colaborador', link: '/pt-BR/endpoints/colaborador/get/visitas-agendadas-por-colaborador' }
              ]
            },
            {
              text: 'POST',
              collapsed: true,
              items: [
                { text: 'Criar Colaborador', link: '/pt-BR/endpoints/colaborador/post/criar-colaborador' },
                { text: 'Cadastrar Visitas Agendadas', link: '/pt-BR/endpoints/colaborador/post/cadastrar-visitas-agendadas' }
              ]
            },
            {
              text: 'PUT',
              collapsed: true,
              items: [
                { text: 'Editar Colaborador', link: '/pt-BR/endpoints/colaborador/put/editar-colaborador' },
                { text: 'Desativar Colaborador', link: '/pt-BR/endpoints/colaborador/put/desativar-colaborador' }
              ]
            },
            {
              text: 'DELETE',
              collapsed: true,
              items: [
                { text: 'Excluir Colaborador', link: '/pt-BR/endpoints/colaborador/delete/excluir-colaborador' },
                { text: 'Excluir Visitas Agendadas', link: '/pt-BR/endpoints/colaborador/delete/excluir-visitas-agendadas' }
              ]
            },

            // manter os demais grupos de endpoint como estão
            {
              text: 'Pesquisa',
              collapsed: true,
              items: [{ text: 'Todos os endpoints', link: '/pt-BR/endpoints/pesquisa/README' }]
            },
            {
              text: 'Pesquisa Informativa',
              collapsed: true,
              items: [{ text: 'Todos os endpoints', link: '/pt-BR/endpoints/pesquisa-informativa/README' }]
            },
            {
              text: 'Ponto de Venda',
              collapsed: true,
              items: [{ text: 'Todos os endpoints', link: '/pt-BR/endpoints/ponto-de-venda/README' }]
            },
            {
              text: 'Produto',
              collapsed: true,
              items: [{ text: 'Todos os endpoints', link: '/pt-BR/endpoints/produto/README' }]
            },
            {
              text: 'Roteiro',
              collapsed: true,
              items: [{ text: 'Todos os endpoints', link: '/pt-BR/endpoints/roteiro/README' }]
            }

          ],
          '/pt-BR/endpoints-descontinuados-sync/': [
            {
              text: 'Endpoints Sync (Descontinuados)',
              collapsed: false,
              items: [
                { text: 'Categorias de Produto', link: '/pt-BR/endpoints-descontinuados-sync/categorias-de-produto' },
                { text: 'Formulários', link: '/pt-BR/endpoints-descontinuados-sync/formularios' },
                { text: 'Linhas de Produto', link: '/pt-BR/endpoints-descontinuados-sync/linhas-de-produto' },
                { text: 'Marca', link: '/pt-BR/endpoints-descontinuados-sync/marca' },
                { text: 'PDVs', link: '/pt-BR/endpoints-descontinuados-sync/pontos-de-venda' },
                { text: 'Produtos - SKUs', link: '/pt-BR/endpoints-descontinuados-sync/produtos-skus' },
                { text: 'Respostas de Pesquisas', link: '/pt-BR/endpoints-descontinuados-sync/respostas-de-pesquisas' },
                { text: 'Supercategorias de Produto', link: '/pt-BR/endpoints-descontinuados-sync/supercategorias-de-produto' },
                { text: 'Visitas Realizadas', link: '/pt-BR/endpoints-descontinuados-sync/visitas-realizadas' },
                { text: 'Fotos Pesquisa (Ext)', link: '/pt-BR/endpoints-descontinuados-sync/api-de-fotos-de-pesquisa-ext' },
                { text: 'Fotos Pesquisa (Int)', link: '/pt-BR/endpoints-descontinuados-sync/api-de-fotos-de-pesquisa-int' }
              ]
            }
          ]
        }
      }
    },

    // idiomas futuros
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/'
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/'
    }
  }
})
