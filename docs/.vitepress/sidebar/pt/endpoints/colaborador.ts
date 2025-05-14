import type { SidebarGroup } from '../pt-sidebar'

export const colaboradorSidebar: SidebarGroup = [
  {
    text: '👤 Colaborador',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/colaborador/README' },
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          { text: 'Afastamento', link: '/pt/endpoints/colaborador/get/afastamento' },
          { text: 'Afastamento por ID', link: '/pt/endpoints/colaborador/get/afastamento-por-id' },
          { text: 'Colaborador por ID (v1)', link: '/pt/endpoints/colaborador/get/colaborador-por-id-v1' },
          { text: 'Colaborador por ID (v3)', link: '/pt/endpoints/colaborador/get/colaborador-por-id-v3' },
          { text: 'Endereço do Colaborador', link: '/pt/endpoints/colaborador/get/endereco-do-colaborador' },
          { text: 'Listar Colaboradores', link: '/pt/endpoints/colaborador/get/listar-colaboradores' },
          { text: 'Perfil de Acesso por ID', link: '/pt/endpoints/colaborador/get/perfil-de-acesso-por-id' },
          { text: 'Visitas Agendadas por Colaborador', link: '/pt/endpoints/colaborador/get/visitas-agendadas-por-colaborador' }
        ]
      },
      {
        text: '🟢 POST',
        collapsed: true,
        items: [
          { text: 'Criar Colaborador', link: '/pt/endpoints/colaborador/post/criar-colaborador' },
          { text: 'Cadastrar Visitas Agendadas', link: '/pt/endpoints/colaborador/post/cadastrar-visitas-agendadas' }
        ]
      },
      {
        text: '🟡 PUT',
        collapsed: true,
        items: [
          { text: 'Editar Colaborador', link: '/pt/endpoints/colaborador/put/editar-colaborador' },
          { text: 'Desativar Colaborador', link: '/pt/endpoints/colaborador/put/desativar-colaborador' }
        ]
      },
      {
        text: '🔴 DELETE',
        collapsed: true,
        items: [
          { text: 'Excluir Colaborador', link: '/pt/endpoints/colaborador/delete/excluir-colaborador' },
          { text: 'Excluir Visitas Agendadas', link: '/pt/endpoints/colaborador/delete/excluir-visitas-agendadas' }
        ]
      }
    ]
  }
]
