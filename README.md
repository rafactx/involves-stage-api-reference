# 🚀 Involves Stage API Reference

Bem-vindo à documentação oficial da **API do Involves Stage**!  
Esta plataforma foi criada com foco em desenvolvedores, oferecendo uma referência clara, responsiva e multilíngue para facilitar a integração com nossos serviços.

## 📚 Sobre

A API do Involves Stage permite conectar sistemas externos de forma segura e escalável, suportando:

- Integração de **colaboradores**, **pontos de venda**, **produtos** e outros recursos.
- Roteirização, coleta e sincronização de **visitas** e **pesquisas**.
- Controle completo via endpoints RESTful organizados por módulo.
- Padrões como autenticação via token, versionamento e boas práticas REST.

## 🧱 Tecnologias Utilizadas

- [VitePress](https://vitepress.dev/) — site estático leve e rápido baseado em Vue 3
- [TypeScript](https://www.typescriptlang.org/)
- [VueUse Motion](https://motion.vueuse.org/) — animações suaves e interativas
- [Lucide Vue](https://lucide.dev/) — ícones modernos
- [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) — padronização de código
- Suporte multilíngue (pt-BR, en, es, fr)

## 📂 Estrutura do Projeto

```bash
docs/
├── .vitepress/          # Configurações e tema personalizado
│   ├── theme/           # Componentes customizados (Hero, BackToTop, etc)
│   ├── sidebar/         # Organização do menu lateral
│   └── client.ts        # Script de redirecionamento por idioma
├── public/              # Assets públicos como imagens e logos
├── pt/                  # Conteúdo em Português-BR (ativo)
│   ├── guia-da-api.md
│   └── endpoints/
├── en/ es/ fr/          # Idiomas adicionais (em breve)
└── index.md             # Fallback ou redirecionador
```

## 📦 Requisitos

- Node.js `>=18 <=22.14`
- pnpm `>=8.0.0`

> ⚠️ Versões fora do intervalo oficial podem causar avisos ou quebras ao instalar algumas dependências.

## 🛠️ Scripts úteis

```bash
pnpm docs:dev        # Inicia servidor local com VitePress
pnpm docs:build      # Gera os arquivos estáticos para produção
pnpm docs:preview    # Pré-visualiza a build final
pnpm format          # Formata os arquivos com Prettier
```

## 🌍 Suporte a Idiomas

- 🇧🇷 pt-BR — **ativo**
- 🇺🇸 en-US — em breve
- 🇪🇸 es-ES — em breve
- 🇫🇷 fr-FR — em breve

## 🧪 Funcionalidades

- 🔎 Menu lateral por seção com Scrollspy
- 🌙 Dark Mode automático
- 📎 Navegação com redirecionamento por idioma do navegador
- 📱 Design responsivo com componentes otimizados
- 🪄 Animações suaves com `@vueuse/motion`
- 🔝 Botão flutuante “voltar ao topo”

## 🤝 Contribuição

Pull requests são bem-vindos.
Abra uma [issue](https://github.com/rafactx/involves-stage-api-reference/issues) com sugestões, bugs ou melhorias.

## 🗂️ Licença

[MIT](LICENSE)

---

> Feito com ❤️ por Rafael Teixeira — [@rafactx](https://github.com/rafactx)