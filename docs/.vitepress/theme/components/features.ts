// /theme/components/features.ts

/**
 * Lista de recursos exibidos na home da documentação, organizados por idioma.
 *
 * Cada item do array representa uma funcionalidade destacada (feature), contendo:
 * - um título com ícone visual
 * - uma descrição curta e objetiva
 * - e um link para navegação interna ou externa
 *
 * Essa estrutura é consumida pelo componente `FeatureList.vue`,
 * que faz o mapeamento dinâmico com base no idioma atual.
 *
 * @type {Record<Lang, Feature[]>}
 */
import type { Feature, Lang } from '../types'

export const features: Record<Lang, Feature[]> = {
  pt: [
    {
      title: '📘 Guia da API',
      details: 'Autenticação, ambientes, erros comuns e boas práticas para começar com segurança.',
      link: '/pt/guia-da-api',
    },
    {
      title: '⚙️ Endpoints REST',
      details: 'Explore todos os endpoints organizados por módulos como Colaborador, Produto, PDV, entre outros.',
      link: '/pt/endpoints/README',
    },
    {
      title: '🧠 Central de Ajuda',
      details: 'Explore materiais complementares, tutoriais e respostas para dúvidas comuns sobre o uso do Involves Stage.',
      link: 'https://help.involves.com/hc/pt-br',
    },
  ],
  en: [
    {
      title: '📘 API Guide',
      details: 'Authentication, environments, common errors and best practices to get started safely.',
      link: '/en/guia-da-api',
    },
    {
      title: '⚙️ REST Endpoints',
      details: 'Browse all endpoints grouped by modules such as Collaborator, Product, POS, and more.',
      link: '/en/endpoints/README',
    },
    {
      title: '🧠 Help Center',
      details: 'Explore tutorials and answers to common questions about using Involves Stage.',
      link: 'https://help.involves.com/hc/en-us',
    },
  ],
  es: [
    {
      title: '📘 Guía de la API',
      details: 'Autenticación, entornos, errores comunes y buenas prácticas para empezar con seguridad.',
      link: '/es/guia-da-api',
    },
    {
      title: '⚙️ Endpoints REST',
      details: 'Explora todos los endpoints organizados por módulos como Colaborador, Producto, PDV y más.',
      link: '/es/endpoints/README',
    },
    {
      title: '🧠 Centro de Ayuda',
      details: 'Consulta tutoriales y respuestas frecuentes sobre el uso de Involves Stage.',
      link: 'https://help.involves.com/hc/es',
    },
  ],
  fr: [
    {
      title: '📘 Guide de l’API',
      details: 'Authentification, environnements, erreurs courantes et bonnes pratiques pour bien démarrer.',
      link: '/fr/guia-da-api',
    },
    {
      title: '⚙️ Endpoints REST',
      details: 'Explorez tous les endpoints organisés par modules comme Collaborateur, Produit, PDV, etc.',
      link: '/fr/endpoints/README',
    },
    {
      title: '🧠 Centre d’Aide',
      details: 'Accédez à des tutoriels et réponses fréquentes sur l’utilisation d’Involves Stage.',
      link: 'https://help.involves.com/hc/fr',
    },
  ]
}
