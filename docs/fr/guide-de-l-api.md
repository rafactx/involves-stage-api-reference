---
layout: home
title: Guide de l’API
hero:
  name: 'Guide de l’API'
  tagline: 'Bonnes pratiques pour se connecter en toute sécurité à l’API Involves Stage.'
  image:
    src: '/guia-da-api.png'
    alt: 'Guide de l’API'
  actions:
    - theme: brand
      text: Voir les Endpoints →
      link: /fr/endpoints/README
    - theme: alt
      text: Page d’accueil
      link: /fr/
features:
  - title: '📘 Introduction Rapide'
    details: 'Comprenez ce qu’est Involves Stage et comment l’API peut vous aider.'
    link: '#introduction-rapide'
  - title: '🔐 Authentification'
    details: 'Comment générer et utiliser le token d’accès en toute sécurité.'
    link: '#authentification'
  - title: '🌍 Environnements'
    details: 'Apprenez à basculer entre production et test.'
    link: '#environnements'
  - title: '📦 Versionnage'
    details: 'Comprenez les versions disponibles et choisissez celle qui convient à votre intégration.'
    link: '#versionnage'
  - title: '📥 Requêtes et Réponses'
    details: 'Construisez des appels complets avec headers, body et réponses structurées.'
    link: '#requetes-et-reponses'
  - title: '⚠️ Gestion des Erreurs'
    details: 'Consultez les codes d’erreur et comment les traiter correctement.'
    link: '#erreurs-courantes'
  - title: '🔗 HATEOAS'
    details: 'Liens automatiques pour faciliter la navigation entre les ressources.'
    link: '#hateoas'
  - title: '📚 Exemples de Code'
    details: 'cURL, JavaScript (fetch), Python (requests) et Node.js (axios).'
    link: '#exemples-de-code'
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

::: tip 👉 Astuce
Vous pouvez faire défiler la page ou cliquer sur une carte ci-dessus pour accéder directement à la section souhaitée.
:::

## 📘 Introduction Rapide

L’API Involves Stage vous permet d’intégrer votre système avec les données terrain en temps réel, de manière sécurisée et efficace. Vous trouverez ici tout ce dont vous avez besoin pour démarrer : de l’authentification aux exemples pratiques.

Explorez également les endpoints organisés par ressource et découvrez comment automatiser des tâches, synchroniser des données et obtenir des insights puissants.

<hr />

## 🔐 Authentification

Toutes les requêtes nécessitent une authentification par Bearer Token.

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
Content-Type: application/json
```

<hr />

## 🌍 Environnements

Le `environmentId` représente l’identifiant de l’environnement que vous souhaitez interroger. Vous pouvez trouver cet ID dans l’URL de la zone d’administration des environnements sur Involves Stage Web.

<hr />

## 📦 Versionnage

L’API est disponible en plusieurs versions (`v1`, `v2`, `v3`). Consultez toujours la version la plus appropriée à votre cas d’usage comme indiqué en haut de chaque endpoint.

<hr />

## 📥 Requêtes et Réponses

Voici des exemples de requêtes **GET** pour lister les points de vente avec différents langages :

<CodeTabsRequisicao />

<hr />

## ⚠️ Erreurs courantes

Voici les erreurs les plus fréquentes que l’API peut retourner en cas de requêtes invalides :

| Code     | Description               |
| -------- | ------------------------- |
| 🔴 `400` | Requête invalide          |
| 🔐 `401` | **Non authentifié**       |
| 🚫 `403` | Accès refusé              |
| 🔍 `404` | Ressource non trouvée     |
| 💥 `500` | Erreur interne du serveur |

::: tip 💡 Astuce
Vérifiez toujours le corps de la réponse. Certains messages d’erreur contiennent des informations utiles dans le champ `message` du JSON.
:::

<hr />

## 🔗 HATEOAS

Certaines réponses incluent des liens directs vers des ressources associées. Ces liens suivent le modèle HATEOAS, ce qui facilite la navigation sans construire les URLs manuellement.

Exemple :

```json
"_link": "https://votredomaine.involves.com/v3/environments/123/pointofsales/456"
```

<hr />

## 📚 Exemples de Code

Tous les endpoints proposent des exemples pratiques dans les formats suivants :

- 🟢 `cURL`
- 🟡 `JavaScript (Fetch)`
- 🔵 `Python (requests)`
- 🟣 `Node.js (axios)`

<hr />

::: tip 💡 Astuce
Utilisez des outils comme [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) pour tester vos requêtes pendant le développement.
:::
