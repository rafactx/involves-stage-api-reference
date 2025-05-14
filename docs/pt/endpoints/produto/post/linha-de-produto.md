---
description: Salva uma linha de produto.
---

# ➕ Criar Linha de Produto

> Cria uma nova linha de produto no ambiente especificado.

> 🔗 `POST /v1/{environmentId}/productline`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
|------------------|---------|-------|-------------|----------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "string",
  "type": 0,
  "barCode": "string",
  "erpCode": "string",
  "enabled": true,
  "brandName": "string",
  "superCategoryName": "string",
  "categoryName": "string",
  "customFields": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```


## 🧬 Esquema da Requisição

::: details Create ProductLine V1

| Campo              | Tipo    | Obrigatório | Descrição                           |
|--------------------|---------|-------------|-------------------------------------|
| `name`             | string  | ✅ sim       | Nome da linha de produto            |
| `type`             | integer | ✅ sim       | Tipo da linha (0 = Customer)        |
| `barCode`          | string  | ❌ não       | Código de barras                    |
| `erpCode`          | string  | ❌ não       | Código externo                      |
| `enabled`          | boolean | ❌ não       | Define se está ativa                |
| `brandName`        | string  | ❌ não       | Nome da marca                       |
| `superCategoryName`| string  | ❌ não       | Nome da supercategoria              |
| `categoryName`     | string  | ❌ não       | Nome da categoria                   |
| `customFields`     | array   | ❌ não       | Lista de campos customizados        |

:::


## ✅ Respostas

### `200 OK` – Linha de produto criada com sucesso

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
  "updatedAt": "2025-04-22T20:20:20.592Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T20:20:20.592Z",
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
curl --request POST \
  --url 'https://{dominio}.involves.com/v1/123/productline' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Produto X",
    "type": 0
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/productline', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Produto X",
    type: 0
  })
})
  .then(res => res.json())
  .then(console.log)
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v1/123/productline",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Produto X",
    "type": 0
  }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v1/123/productline', {
  name: "Produto X",
  type: 0
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

```
https://{dominio}.involves.com/v1/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                                |
|--------|--------------------------------------------|
| 🔴 `400`  | Requisição inválida ou campos obrigatórios ausentes |
| 🔐 `401`  | **Não autenticado**                      |
| 🔍 `404`  | Marca, categoria ou ambiente não encontrados |
| 💥 `500`  | Erro interno no servidor                 |
