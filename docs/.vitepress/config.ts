import { defineConfig } from 'vitepress'
import { ptSidebar } from './sidebar/pt-sidebar'
import slugify from 'slugify'

export default defineConfig({
  title: 'Involves Stage API Reference',
  description: 'Documentação oficial da API do Involves Stage',
  cleanUrls: true,

  markdown: {
    anchor: {
      slugify: (str: string) =>
        slugify(str, {
          lower: true,
          strict: true,
          remove: /[*+~.()'"!?:@，、‥%#📘🔐🌍📥📛📦🔗📚⚠️]/g
        })
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  themeConfig: {
    logo: {
      light: '/logo-involves-dark.png',
      dark: '/logo-involves-light.png',
      alt: 'Logo Involves'
    },
    siteTitle: false
  },

  locales: {
    pt: {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/pt/',
      themeConfig: {
        nav: [
          { text: 'Guia da API', link: '/pt/guia-da-api' },
          { text: 'Endpoints', link: '/pt/endpoints/README' },
          { text: 'Endpoints Descontinuados', link: '/pt/endpoints-descontinuados-sync/README' }
        ],
        sidebar: ptSidebar
      }
    },
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
