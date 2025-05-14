---
description: Salva um novo SKU vinculado à linha de produto.
---

# ➕ Criar SKU

> Cria um novo SKU (unidade de manutenção de estoque) em um ambiente específico.

> 🔗 `POST /v1/{environmentId}/sku`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
|-----------------|---------|-------|-------------|------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "string",
  "productLineId": 0,
  "active": true,
  "externalCode": "string",
  "barCode": "string",
  "integrationCode": "string",
  "customField1": "string",
  "customField2": "string",
  "customField3": "string",
  "customField4": "string",
  "customField5": "string",
  "customField6": "string",
  "customField7": "string",
  "customField8": "string",
  "customField9": "string",
  "customField10": "string"
}
```


## 🧬 Esquema da Requisição

::: details Create SKU V1

| Campo            | Tipo    | Obrigatório | Descrição                           |
|------------------|---------|-------------|-------------------------------------|
| `name`           | string  | ✅ sim       | Nome do SKU                         |
| `productLineId`  | integer | ✅ sim       | ID da linha de produto associada    |
| `active`         | boolean | ❌ não       | Define se está ativo                |
| `externalCode`   | string  | ❌ não       | Código externo                      |
| `barCode`        | string  | ❌ não       | Código de barras                    |
| `integrationCode`| string  | ❌ não       | Código de integração                |
| `customField1-10`| string  | ❌ não       | Campos customizados (até 10)        |

:::


## ✅ Respostas

### `200 OK` – SKU criado com sucesso

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
  "updatedAt": "2025-04-22T20:25:58.829Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T20:25:58.829Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v1/123/sku' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Novo SKU",
    "productLineId": 456,
    "active": true
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/sku', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Novo SKU",
    productLineId: 456,
    active: true
  })
})
  .then(res => res.json())
  .then(console.log)
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v1/123/sku",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Novo SKU",
    "productLineId": 456,
    "active": True
  }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v1/123/sku', {
  name: "Novo SKU",
  productLineId: 456,
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

```
https://{dominio}.involves.com/v1/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida ou corpo malformado  |
| 🔐 `401`  | **Não autenticado**                     |
| 🔍 `404`  | Linha de produto ou ambiente não encontrado |
| 💥 `500`  | Erro interno no servidor                |
