// .vitepress/theme/types.ts

/**
 * Lista de idiomas suportados pela documentação.
 *
 * Essa constante serve como base para validação e fallback de idioma
 * ao renderizar conteúdos dinâmicos (ex: `features.ts`, menus laterais).
 *
 * @type {readonly ['pt', 'en', 'es', 'fr']}
 */
export const supportedLangs = ['pt', 'en', 'es', 'fr'] as const

/**
 * Tipo utilitário que representa os idiomas aceitos.
 *
 * Derivado automaticamente da constante `supportedLangs` para manter
 * consistência entre os valores reais e os tipos inferidos.
 *
 * Exemplo: 'pt' | 'en' | 'es' | 'fr'
 *
 * @type {Lang}
 */
export type Lang = typeof supportedLangs[number]

/**
 * Tipo que representa uma feature exibida na home da documentação.
 *
 * Cada feature inclui:
 * - `title`: título curto com ícone (ex: "📘 Guia da API")
 * - `details`: descrição explicativa resumida
 * - `link`: URL interna ou externa de navegação
 *
 * Utilizado principalmente em:
 * - `features.ts`
 * - `FeatureList.vue`
 *
 * @type {Feature}
 */
export type Feature = {
  title: string
  details: string
  link: string
}
