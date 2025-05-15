// vitepress/config.ts

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

  // 🌍 Configuração por idioma
  locales: {
    pt: {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/pt/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
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
      link: '/en/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Involves Logo'
        },
        nav: [
          { text: 'API Guide', link: '/en/api-guide' },
          { text: 'Endpoints', link: '/en/endpoints/README' },
          { text: 'Deprecated Endpoints', link: '/en/endpoints-descontinuados-sync/README' }
        ]
      }
    },

    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
        nav: [
          { text: 'Guía de la API', link: '/es/guia-de-la-api' },
          { text: 'Endpoints', link: '/es/endpoints/README' },
          { text: 'Endpoints Obsoletos', link: '/es/endpoints-descontinuados-sync/README' }
        ]
      }
    },

    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      themeConfig: {
        siteTitle: false,
        logo: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
          alt: 'Logo Involves'
        },
        nav: [
          { text: "Guide de l'API", link: '/fr/guide-de-l-api' },
          { text: 'Endpoints', link: '/fr/endpoints/README' },
          { text: 'Endpoints Obsolètes', link: '/fr/endpoints-descontinuados-sync/README' }
        ]
      }
    }
  }
})
