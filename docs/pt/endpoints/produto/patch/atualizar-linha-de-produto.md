---
description: Altera propriedades específicas de uma linha de produto no ambiente especificado.
---

# 🔄 Atualizar Linha de Produto

> Altera o status de uma linha de produto existente.

> 🔗 `PATCH /v1/{environmentId}/productline/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                               |
|-----------------|---------|-------|-------------|-----------------------------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente                          |
| `id`            | integer | path  | ✅ sim       | ID da linha de produto a ser atualizada |


## 📨 Corpo da Requisição (application/json)

```json
{
  "active": true
}
```


## 🧬 Esquema da Requisição

::: details Patch Productline V1

| Campo    | Tipo    | Obrigatório | Descrição                         |
|----------|---------|-------------|-----------------------------------|
| `active` | boolean | ✅ sim       | Define se a linha de produto está ativa |

:::


## ✅ Respostas

### `200 OK` – Linha de produto atualizada com sucesso

::: details Clique para ver o código de resposta
```json
{
  "id": 0,
  "name": "string",
  "productCategory": {
    "id": 0,
    "name": "string"
  },
  "brand": {
    "id": 0,
    "name": "string"
  },
  "barCode": "string",
  "externalCode": "string",
  "active": true,
  "approved": true,
  "updatedAt": "2025-04-22T20:25:58.826Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T20:25:58.826Z",
  "skus": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "availabilityRegions": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ]
}
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PATCH \
  --url 'https://{dominio}.involves.com/v1/123/productline/456' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "active": true
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/productline/456', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    active: true
  })
})
  .then(res => res.json())
  .then(console.log)
```

```python [🔵 Python]
import requests

response = requests.patch(
  "https://{dominio}.involves.com/v1/123/productline/456",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={"active": True}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.patch('https://{dominio}.involves.com/v1/123/productline/456', {
  active: true
}, {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
});
```

:::

::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

```text
https://{dominio}.involves.com/v1/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida ou parâmetros malformados |
| 🔐 `401`  | **Não autenticado**                  |
| 🔍 `404`  | Linha de produto não encontrada      |
| 💥 `500`  | Erro interno no servidor             |
