---
layout: home
title: API Guide
hero:
  name: 'API Guide'
  tagline: 'Best practices to connect securely to the Involves Stage API.'
  image:
    src: '/guia-da-api.png'
    alt: 'API Guide'
  actions:
    - theme: brand
      text: View Endpoints →
      link: /en/endpoints/README
    - theme: alt
      text: Home Page
      link: /en/
features:
  - title: '📘 Quick Introduction'
    details: 'Understand what Involves Stage is and how the API can help you.'
    link: '#quick-introduction'
  - title: '🔐 Authentication'
    details: 'How to generate and use the access token securely.'
    link: '#authentication'
  - title: '🌍 Environments'
    details: 'Learn how to switch between production and staging.'
    link: '#environments'
  - title: '📦 Versioning'
    details: 'Understand the available versions and choose the right one for your integration.'
    link: '#versioning'
  - title: '📥 Requests and Responses'
    details: 'Build complete calls with headers, body, and structured returns.'
    link: '#requests-and-responses'
  - title: '⚠️ Error Handling'
    details: 'Check the error codes and how to handle them properly.'
    link: '#common-errors'
  - title: '🔗 HATEOAS'
    details: 'Automatic links to simplify navigation between resources.'
    link: '#hateoas'
  - title: '📚 Code Examples'
    details: 'cURL, JavaScript (fetch), Python (requests) and Node.js (axios).'
    link: '#code-examples'
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

::: tip 👉 Tip
You can scroll down or click any card above to jump to the desired section.
:::

## 📘 Quick Introduction

The Involves Stage API allows you to integrate your system with field data in real time, securely and efficiently. Here you'll find everything you need to get started: from authentication to practical usage examples.

You can also explore the endpoints organized by resource and learn how to automate tasks, sync data, and gain valuable insights from our platform.

<hr />

## 🔐 Authentication

All requests require Bearer Token authentication.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
Content-Type: application/json
```

<hr />

## 🌍 Environments

The `environmentId` represents the identifier of the environment you want to query. You can find this ID in the URL of the Environment Administration area in Involves Stage Web.

<hr />

## 📦 Versioning

The API is available in multiple versions (`v1`, `v2`, `v3`). Always check the most appropriate version for your use case as specified at the top of each endpoint.

<hr />

## 📥 Requests and Responses

Below are examples of how to make a **GET** request to list point-of-sale entries using different languages:

<CodeTabsRequisicao />

<hr />

## ⚠️ Common Errors

Here are the most common errors the API may return for invalid calls:

| Code     | Description           |
| -------- | --------------------- |
| 🔴 `400` | Invalid request       |
| 🔐 `401` | **Not authenticated** |
| 🚫 `403` | Access denied         |
| 🔍 `404` | Resource not found    |
| 💥 `500` | Internal server error |

::: tip 💡 Tip
Always check the response body. Some errors include helpful messages in the `message` field of the JSON response.
:::

<hr />

## 🔗 HATEOAS

Some responses include direct links to related resources. These follow the HATEOAS pattern, which simplifies navigation between entities without manually building URLs.

Example:

```json
"_link": "https://yourdomain.involves.com/v3/environments/123/pointofsales/456"
```

<hr />

## 📚 Code Examples

All endpoints include practical examples in the following formats:

- 🟢 `cURL`
- 🟡 `JavaScript (Fetch)`
- 🔵 `Python (requests)`
- 🟣 `Node.js (axios)`

<hr />

::: tip 💡 Tip
Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test your requests while developing.
:::
