export default function ({ router }: any) {
  if (typeof window === 'undefined') return

  const supportedLocales = ['pt', 'en', 'es', 'fr']
  const defaultLocale = 'pt'
  const currentPath = window.location.pathname

  // Se já estiver em /pt, /en, etc, não faz nada
  if (supportedLocales.some(locale => currentPath.startsWith(`/${locale}`))) return

  const browserLang = navigator.language.split('-')[0]
  const redirectLocale = supportedLocales.includes(browserLang) ? browserLang : defaultLocale

  router.go(`/${redirectLocale}/`)
}
