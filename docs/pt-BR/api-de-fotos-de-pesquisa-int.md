---
description: '[INTERNO] NÃO COMPARTILHAR'
---

# API de Fotos de Pesquisa (int)

A **API de Fotos de Pesquisa** permite o consumo programático das imagens coletadas durante o preenchimento de formulários no Involves Stage.

[Link do documento INTERNO](https://docs.google.com/document/d/1aqnGqACnWPa7jb-wiD4TO1PTpM1c50tRQ6kz0YQNIQA/edit?tab=t.0)

***

## 🎯 Objetivo

Permitir que sistemas externos acessem fotos de pesquisa de maneira segura e automatizada, com autenticação temporária via cookies.

***

## ⚙️ Funcionamento

O consumo ocorre em **3 passos**:

1. Obter as URLs das fotos de uma pesquisa
2. Solicitar as **credenciais de acesso temporário** (cookies)
3. Realizar o **download** das fotos com os cookies aplicados

***

## ✅ Pré-requisitos

*   👤 O usuário deve ser um **colaborador com privilégios de Administrador**

    > Super Administradores **não podem consumir** fotos pela API
* 🧪 A `feature.toggle.fotos.pesquisa` precisa estar habilitada no ambiente

### 🛠️ Habilitar o Feature Toggle

```http
PUT /api/v2/featuretoggle/feature.toggle.fotos.pesquisa
```

#### Corpo da requisição (JSON)

```json
{
  "featureKey": "feature.toggle.fotos.pesquisa",
  "toggleValue": true
}
```

***

## 🔗 Passo 1 – Obter URLs das fotos

```http
GET /api/v2/environments/{environmentId}/survey/{surveyId}/surveydata/photos
```

### Parâmetros obrigatórios

| Nome          | Tipo    | Descrição      |
| ------------- | ------- | -------------- |
| environmentId | integer | ID do ambiente |
| surveyId      | integer | ID da pesquisa |

### Exemplo de resposta

```json
{
  "items": [
    {
      "surveyName": "Nome da pesquisa",
      "surveyLabel": "Rótulo da pesquisa",
      "surveyPhotoUrl": "https://example.com/fotos/123.jpg"
    }
  ]
}
```

***

## 🔐 Passo 2 – Obter credenciais (cookies de acesso)

```http
GET /api/v1/{environmentId}/survey/photo/cookie/sign
```

### Parâmetros opcionais

| Nome               | Tipo     | Descrição                                                                  |
| ------------------ | -------- | -------------------------------------------------------------------------- |
| expirationDateTime | datetime | Data/hora ISO-8601. Máximo: 30 dias à frente. Padrão: +1 dia da requisição |

> A resposta vem **sem corpo**, apenas com os cookies HTTP nos **headers da resposta**.

### Exemplo de cookies retornados:

```
CloudFront-Policy=...
CloudFront-Key-Pair-Id=...
CloudFront-Signature=...
```

Em caso de erro, a resposta será:

```json
{
  "code": 400,
  "message": "Data de expiração muito distante"
}
```

***

## ⬇️ Passo 3 – Fazer download das imagens

Utilize os **cookies obtidos no passo 2** para autenticar o acesso às URLs das fotos do passo 1.

### 🌐 Exemplo com cURL

```bash
curl -X GET "https://example.com/fotos/123.jpg" \
  -H 'cookie: CloudFront-Key-Pair-Id=...; CloudFront-Policy=...; CloudFront-Signature=...'
```

### 💻 Exemplo com JavaScript (Fetch)

```javascript
fetch("https://example.com/fotos/123.jpg", {
  headers: {
    cookie: "CloudFront-Key-Pair-Id=...; CloudFront-Policy=...; CloudFront-Signature=..."
  },
  credentials: "include"
})
.then(res => res.blob())
.then(image => {
  const url = URL.createObjectURL(image);
  window.open(url);
});
```

### 🐍 Exemplo com Python (requests)

```python
import requests

cookies = {
  "CloudFront-Key-Pair-Id": "...",
  "CloudFront-Policy": "...",
  "CloudFront-Signature": "..."
}

response = requests.get("https://example.com/fotos/123.jpg", cookies=cookies)
if response.ok:
    with open("foto.jpg", "wb") as f:
        f.write(response.content)
```

### 🧩 Exemplo com Node.js (axios)

```javascript
const axios = require("axios");
const fs = require("fs");

axios.get("https://example.com/fotos/123.jpg", {
  responseType: "stream",
  headers: {
    Cookie: "CloudFront-Key-Pair-Id=...; CloudFront-Policy=...; CloudFront-Signature=..."
  }
})
.then(response => {
  response.data.pipe(fs.createWriteStream("foto.jpg"));
});
```

***

## 🧪 Dica: Usando no Postman

* Use a **aplicação desktop** do Postman para manipular cookies
* Adicione o domínio das fotos na aba **Cookies**
* Adicione os 3 cookies manualmente:
  * `CloudFront-Key-Pair-Id`
  * `CloudFront-Policy`
  * `CloudFront-Signature`

Após configurar, envie uma requisição `GET` para a URL da imagem e visualize ou salve o conteúdo como `.jpg`.

***

## 🚫 Limitações conhecidas

* Não aplica filtros por **regionais** ou **campos customizados**
* Não permite filtros avançados por data, usuário, ponto de venda, etc.
