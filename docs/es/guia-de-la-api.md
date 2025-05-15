---
layout: home
title: Guía de la API
hero:
  name: 'Guía de la API'
  tagline: 'Buenas prácticas para conectarse de forma segura a la API de Involves Stage.'
  image:
    src: '/guia-da-api.png'
    alt: 'Guía de la API'
  actions:
    - theme: brand
      text: Ver Endpoints →
      link: /es/endpoints/README
    - theme: alt
      text: Página de Inicio
      link: /es/
features:
  - title: '📘 Introducción Rápida'
    details: 'Entiende qué es Involves Stage y cómo la API puede ayudarte.'
    link: '#introduccion-rapida'
  - title: '🔐 Autenticación'
    details: 'Cómo generar y usar el token de acceso de forma segura.'
    link: '#autenticacion'
  - title: '🌍 Entornos'
    details: 'Aprende cómo alternar entre producción y homologación.'
    link: '#entornos'
  - title: '📦 Versionado'
    details: 'Entiende las versiones disponibles y elige la ideal para tu integración.'
    link: '#versionado'
  - title: '📥 Solicitudes y Respuestas'
    details: 'Construye llamadas completas con headers, cuerpo y respuestas estructuradas.'
    link: '#solicitudes-y-respuestas'
  - title: '⚠️ Manejo de Errores'
    details: 'Consulta los códigos de error y cómo gestionarlos correctamente.'
    link: '#errores-comunes'
  - title: '🔗 HATEOAS'
    details: 'Enlaces automáticos para facilitar la navegación entre recursos.'
    link: '#hateoas'
  - title: '📚 Ejemplos por lenguaje'
    details: 'cURL, JavaScript (fetch), Python (requests) y Node.js (axios).'
    link: '#ejemplos-de-codigo'
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

::: tip 👉 Consejo
Puedes desplazarte por la página o hacer clic en cualquier tarjeta de arriba para ir directamente a la sección deseada.
:::

## 📘 Introducción Rápida

La API de Involves Stage te permite integrar tu sistema con datos de campo en tiempo real, de forma segura y eficiente. Aquí encontrarás todo lo que necesitas para comenzar: desde la autenticación hasta ejemplos prácticos.

Explora también los endpoints organizados por recurso y descubre cómo automatizar tareas, sincronizar datos y obtener insights directamente desde nuestra base.

<hr />

## 🔐 Autenticación

Todas las solicitudes requieren autenticación vía Bearer Token.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
Content-Type: application/json
```

<hr />

## 🌍 Entornos

El `environmentId` representa el identificador del entorno que deseas consultar. Puedes encontrar este ID en la URL del área de Administración de Entornos en Involves Stage Web.

<hr />

## 📦 Versionado

La API está disponible en múltiples versiones (`v1`, `v2`, `v3`). Consulta siempre la versión más apropiada para tu caso de uso, como se especifica al inicio de cada endpoint.

<hr />

## 📥 Solicitudes y Respuestas

A continuación, se muestran ejemplos de cómo hacer una solicitud **GET** para listar puntos de venta utilizando diferentes lenguajes:

<CodeTabsRequisicao />

<hr />

## ⚠️ Errores comunes

A continuación se presentan los errores más comunes que la API puede devolver en llamadas inválidas:

| Código   | Descripción                |
| -------- | -------------------------- |
| 🔴 `400` | Solicitud inválida         |
| 🔐 `401` | **No autenticado**         |
| 🚫 `403` | Acceso denegado            |
| 🔍 `404` | Recurso no encontrado      |
| 💥 `500` | Error interno del servidor |

::: tip 💡 Consejo
Revisa siempre el cuerpo de la respuesta. Algunos errores contienen mensajes útiles en el campo `message` del JSON.
:::

<hr />

## 🔗 HATEOAS

Algunas respuestas incluyen enlaces directos a recursos relacionados. Estos enlaces siguen el estándar HATEOAS, facilitando la navegación entre entidades sin necesidad de construir URLs manualmente.

Ejemplo:

```json
"_link": "https://tudominio.involves.com/v3/environments/123/pointofsales/456"
```

<hr />

## 📚 Ejemplos de código

Todos los endpoints incluyen ejemplos prácticos en los siguientes formatos:

- 🟢 `cURL`
- 🟡 `JavaScript (Fetch)`
- 🔵 `Python (requests)`
- 🟣 `Node.js (axios)`

<hr />

::: tip 💡 Consejo
Usa herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar tus solicitudes mientras desarrollas.
:::
