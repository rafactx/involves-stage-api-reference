---
layout: home
title: Guia da API
hero:
  name: 'Guia da API'
  tagline: 'Boas práticas para se conectar com segurança à API do Involves Stage.'
  image:
    src: '/guia-da-api.png'
    alt: 'Guia da API'
  actions:
    - theme: brand
      text: Ver Endpoints →
      link: /pt/endpoints/README
    - theme: alt
      text: Página Inicial
      link: /pt/
features:
  - title: '📘 Introdução Rápida'
    details: 'Entenda o que é o Involves Stage e como a API pode te ajudar.'
    link: '#introducao-rapida'
  - title: '🔐 Autenticação'
    details: 'Como gerar e usar o token de acesso com segurança.'
    link: '#autenticacao'
  - title: '🌍 Ambientes'
    details: 'Saiba como alternar entre produção e homologação.'
    link: '#ambientes'
  - title: '📦 Versionamento'
    details: 'Entenda as diferentes versões disponíveis e escolha a ideal para sua integração.'
    link: '#versionamento'
  - title: '📥 Requisições e Respostas'
    details: 'Monte chamadas completas com headers, corpo e retorno estruturado.'
    link: '#requisicoes-e-respostas'
  - title: '⚠️ Tratamento de Erros'
    details: 'Veja os códigos de erro e como lidar com eles corretamente.'
    link: '#erros-comuns'
  - title: '🔗 HATEOAS'
    details: 'Links automáticos para facilitar a navegação entre recursos.'
    link: '#hateoas'
  - title: '📚 Exemplos por linguagem'
    details: 'cURL, JavaScript (fetch), Python (requests) e Node.js (axios).'
    link: '#exemplos-de-uso-por-linguagem'
---

<style scoped>
:root {
  --vp-home-hero-name-color: #2563eb;
  --vp-home-hero-text-color: #111827;
  --vp-home-hero-image-background-image: radial-gradient(circle, #eff6ff, #fff);
  --vp-home-hero-image-filter: blur(1.5px);
}

.VPHomeHero {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.VPFeature {
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 1rem;
}

.dark .VPFeature {
  background: #1f2937;
  border-color: #374151;
}

.VPFeature:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}
</style>

::: tip 👉 Dica
Você pode rolar a página ou clicar em qualquer card acima para navegar direto para a seção desejada.
:::

## 📘 Introdução Rápida

A API do Involves Stage permite que você integre seu sistema com dados de campo em tempo real, de forma segura e eficiente. Aqui você encontrará tudo o que precisa para começar: desde autenticação até exemplos práticos de consumo.

Explore também os endpoints organizados por recurso e descubra como automatizar tarefas, sincronizar dados e obter insights poderosos diretamente da nossa base.

<hr />

## 🔐 Autenticação

Todas as requisições exigem autenticação via Bearer Token.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
Content-Type: application/json
```

<hr />

## 🌍 Ambientes

O `environmentId` representa o identificador do ambiente que você quer consultar. Você encontra esse ID na URL da área de Administração de Ambientes no Involves Stage Web.

<hr />

## 📦 Versionamento

A API está disponível em múltiplas versões (`v1`, `v2`, `v3`). Sempre confira a versão mais apropriada para o seu caso de uso, conforme especificado no início de cada endpoint.

<hr />

## 📥 Requisições e Respostas

Abaixo estão exemplos de como fazer uma requisição **GET** para listar pontos de venda utilizando diferentes linguagens:

<CodeTabsRequisicao />

<hr />

## ⚠️ Erros comuns

Abaixo estão os erros mais comuns que a API pode retornar em chamadas inválidas:

| Código   | Descrição                |
| -------- | ------------------------ |
| 🔴 `400` | Requisição inválida      |
| 🔐 `401` | **Não autenticado**      |
| 🚫 `403` | Acesso negado            |
| 🔍 `404` | Recurso não encontrado   |
| 💥 `500` | Erro interno no servidor |

::: tip 💡 **Dica**
Sempre verifique o corpo da resposta. Alguns erros trazem detalhes úteis no campo `message` da resposta JSON.
:::

<hr />

## 🔗 HATEOAS

Algumas respostas trazem links diretos para recursos relacionados. Esses links seguem o padrão HATEOAS, o que facilita a navegação entre entidades sem necessidade de montar URLs manualmente.

Exemplo:

```json
"_link": "https://SeuDominio.involves.com/v3/environments/123/pointofsales/456"
```

<hr />

## 📚 Exemplos de uso por linguagem

Todos os endpoints trazem exemplos práticos nos seguintes formatos:

- 🟢 `cURL`
- 🟡 `JavaScript (Fetch)`
- 🔵 `Python (requests)`
- 🟣 `Node.js (axios)`

<hr />

::: tip 💡 **Dica:**
Use ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar suas requisições enquanto desenvolve.
:::
