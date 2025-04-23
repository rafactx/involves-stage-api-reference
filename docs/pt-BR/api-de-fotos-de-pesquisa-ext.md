---
description: Consumo de Fotos
---

# API de Fotos de Pesquisa (ext)

Esta API permite acessar fotos vinculadas a respostas de pesquisas realizadas no Involves Stage. O processo é composto por **3 passos principais**:

***

## ✅ Passo 1: Obter lista de fotos da pesquisa

**Endpoint:**\
`GET /api/v2/environments/{environmentId}/survey/{surveyId}/surveydata/photos`

### 🔧 Parâmetros obrigatórios

| Nome          | Tipo    | Descrição      |
| ------------- | ------- | -------------- |
| environmentId | integer | ID do ambiente |
| surveyId      | integer | ID da pesquisa |

### 📘 Exemplo de resposta

```json
{
  "page": 1,
  "size": 100,
  "totalPages": 1,
  "totalItems": 2,
  "items": [
    {
      "surveyName": "Nome da pesquisa",
      "surveyLabel": "RÓTULO",
      "surveyPhotoId": 123,
      "surveyPhotoUrl": "https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg"
    },
    {
      "surveyName": "Nome da pesquisa",
      "surveyLabel": "RÓTULO",
      "surveyPhotoId": 124,
      "surveyPhotoUrl": "https://example.com/abc/fotos/coleta/2019/1/123-def34.jpg"
    }
  ]
}
```

***

## 🔐 Passo 2: Obter credenciais para download das fotos

**Endpoint:**\
`GET /api/v1/{environmentId}/survey/photo/cookie/sign?expirationDateTime={dataISO}`

### 🔧 Parâmetros opcionais

| Nome               | Tipo     | Descrição                                                            |
| ------------------ | -------- | -------------------------------------------------------------------- |
| expirationDateTime | datetime | Data/hora de expiração no formato ISO-8601 (máximo 30 dias à frente) |

> Se não informado, o valor padrão é **1 dia após a requisição**.

### ⚠️ Exemplo de resposta em caso de erro

```json
{
  "code": 400,
  "message": "Data de expiração muito distante: deve ser no máximo 30 dias",
  "subCode": 100053,
  "keyMessage": "api.error.fotocoletaaws.expirationdatetime.mustbelessthanxdays"
}
```

### 📥 Cabeçalhos de resposta (sucesso)

As credenciais são retornadas como **Cookies**:

```
CloudFront-Key-Pair-Id=ABC123DEF456GHI789; Secure; HttpOnly; Version=1
CloudFront-Policy=ZXN0ZSDDqSB1bSB0ZXh0byBkZSBleGVtcGxvIGRlIHRhbWFuaG8gbcOpZGlv; Secure; HttpOnly; Version=1
CloudFront-Signature=ZXN0ZSDDqSB1bSB0ZXh0byBleGVtcGxvIGRlIHRhbWFuaG8gZ3JhbmRl...
```

***

## 📥 Passo 3: Fazer download das fotos

As credenciais adquiridas no **Passo 2** devem ser enviadas como **Cookies** ao acessar as URLs de imagem retornadas no **Passo 1**.

**Exemplo de requisição com cURL:**

```bash
curl -X GET "https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg" \
  -H 'cookie: CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD...' \
  -b 'CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD...'
```

> ⚠️ **Importante:** A validade das credenciais deve ser respeitada. Após expirarem, será necessário solicitar novas no Passo 2.

***

## 💻 Exemplos de Requisição para Download

Utilize as credenciais como **cookies** no momento da requisição.

### 🔹 cURL

```bash
curl -X GET "https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg" \
  -H 'cookie: CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD...' \
  -b 'CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD...'
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg", {
  method: "GET",
  credentials: "include",
  headers: {
    "cookie": "CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD..."
  }
})
.then(response => response.blob())
.then(photo => {
  const url = URL.createObjectURL(photo);
  window.open(url);
});
```

### 🔹 Python (requests)

```python
import requests

url = "https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg"
cookies = {
    "CloudFront-Key-Pair-Id": "ABC123DEF456GHI789",
    "CloudFront-Policy": "ZXN0ZSD...",
    "CloudFront-Signature": "ZXN0ZSD..."
}

response = requests.get(url, cookies=cookies)

if response.status_code == 200:
    with open("foto.jpg", "wb") as file:
        file.write(response.content)
else:
    print("Erro ao baixar a foto:", response.status_code)
```

### 🔹 Node.js (axios)

```javascript
const axios = require("axios");
const fs = require("fs");

axios.get("https://example.com/abc/fotos/coleta/2019/1/123-abc12.jpg", {
  responseType: "stream",
  headers: {
    Cookie: "CloudFront-Key-Pair-Id=ABC123DEF456GHI789; CloudFront-Policy=ZXN0ZSD...; CloudFront-Signature=ZXN0ZSD..."
  }
})
.then(response => {
  response.data.pipe(fs.createWriteStream("foto.jpg"));
})
.catch(error => {
  console.error("Erro ao baixar a foto:", error);
});
```

