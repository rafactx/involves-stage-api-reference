import type { SidebarGroup } from '../pt-sidebar'

export const roteiroSidebar: SidebarGroup = [
  {
    text: '🗓️ Roteiro',
    collapsed: true,
    items: [
      { text: 'Visão Geral', link: '/pt/endpoints/roteiro/README' },

      // 🔵 GET
      {
        text: '🔵 GET',
        collapsed: true,
        items: [
          { text: 'Itinerário de Visitas por Colaborador', link: '/pt/endpoints/roteiro/get/itinerario-de-visitas-por-colaborador' },
          { text: 'Justificativa de Falta da Visita', link: '/pt/endpoints/roteiro/get/justificativa-de-falta-da-visita' },
          { text: 'Listar Visitas Agendadas por Colaborador', link: '/pt/endpoints/roteiro/get/listar-visitas-agendadas-por-colaborador' },
          { text: 'Listar Visitas por Colaborador', link: '/pt/endpoints/roteiro/get/listar-visitas-por-colaborador' }
        ]
      },

      // 🟢 POST
      {
        text: '🟢 POST',
        collapsed: true,
        items: [
          { text: 'Agendar Múltiplas Visitas', link: '/pt/endpoints/roteiro/post/agendar-multiplas-visitas' }
        ]
      },

      // 🔴 DELETE
      {
        text: '🔴 DELETE',
        collapsed: true,
        items: [
          { text: 'Excluir Visitas Agendadas de um Colaborador', link: '/pt/endpoints/roteiro/delete/excluir-visitas-agendadas-de-um-colaborador' }
        ]
      }
    ]
  }
]
