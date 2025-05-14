---
description: Atualiza propriedades específicas de um SKU no ambiente informado.
---

# 🔄 Atualizar SKU

> Altera o status de um SKU existente.

> 🔗 `PATCH /v1/{environmentId}/sku/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
|-----------------|---------|-------|-------------|------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `id`            | integer | path  | ✅ sim       | ID do SKU        |


## 📨 Corpo da Requisição (application/json)

```json
{
  "active": true
}
```


## 🧬 Esquema da Requisição

::: details Patch SKU V1

| Campo    | Tipo    | Obrigatório | Descrição                |
|----------|---------|-------------|--------------------------|
| `active` | boolean | ✅ sim       | Define se o SKU está ativo |

:::


## ✅ Respostas

### `200 OK` – SKU atualizado com sucesso

::: details Clique para ver o código de resposta
```json
{
  "id": 0,
  "name": "string",
  "productLine": {
    "id": 0,
    "name": "string"
  },
  "active": true,
  "deleted": true,
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ],
  "updatedAt": "2025-04-22T21:05:46.729Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T21:05:46.729Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PATCH \
  --url 'https://{dominio}.involves.com/v1/123/sku/456' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "active": true
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/sku/456', {
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
  "https://{dominio}.involves.com/v1/123/sku/456",
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

axios.patch('https://{dominio}.involves.com/v1/123/sku/456', {
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
| 🔍 `404`  | SKU não encontrado                   |
| 💥 `500`  | Erro interno no servidor             |
