---
description: Retorna os dados de uma marca específica com base no ID.
---

# Detalhes de Marca (ID)

> 🔗 `GET /v3/environments/{environmentId}/brands/{brandId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
|------------------|---------|--------|--------------|----------------|
| `environmentId`  | integer | path   | ✅ sim       | ID do ambiente |
| `brandId`        | integer | path   | ✅ sim       | ID da marca    |


## ✅ Respostas

### `200 OK` – Marca retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "regionals": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Brand

| Campo       | Tipo         | Descrição                       |
|-------------|--------------|---------------------------------|
| `id`        | integer      | ID da marca                     |
| `name`      | string       | Nome da marca                   |
| `regionals` | objeto (Link)| Referência às regionais atreladas |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/brands/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/brands/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
.then(response => response.json())
.then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v3/environments/123/brands/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/brands/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
})
.then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na URL.

Exemplo: se a URL for `https://suaempresa.involves.com`, utilize `suaempresa`.

A chamada correta seria:

`https://suaempresa.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|--------------------------------------------|
| 🔴 `400` | Requisição malformada ou inválida          |
| 🔐 `401` | Token de autenticação ausente ou inválido |
| 🔍 `404` | Marca não encontrada                      |
| 💥 `500` | Erro interno no servidor                   |
