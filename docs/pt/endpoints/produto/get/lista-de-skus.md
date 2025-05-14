---
description: Retorna uma lista de SKUs com no máximo 100 elementos, filtrando por nome ou código externo.
---

# 🧾 Lista de SKUs ⚠️

⚠️ Este endpoint está obsoleto. Recomendamos utilizar a versão mais recente na API v3, quando disponível.

> 🔗 `GET /v1/{environmentId}/sku/find`


## 📥 Parâmetros

| Nome           | Tipo    | Local  | Obrigatório | Descrição                    |
|----------------|---------|--------|-------------|------------------------------|
| `environmentId`| integer | path   | ✅ sim       | ID do ambiente               |
| `name`         | string  | query  | ❌ não       | Nome do SKU                  |
| `externalCode` | string  | query  | ❌ não       | Código externo do SKU        |


## ✅ Respostas

### `200 OK` – Lista de SKUs retornada com sucesso

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
  "updatedAt": "2025-04-22T19:55:54.250Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T19:55:54.250Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```
:::


## 🧬 Esquema de Resposta

::: details SKU V1

| Campo               | Tipo      | Descrição                         |
|---------------------|-----------|-----------------------------------|
| `id`                | integer   | ID do SKU                         |
| `name`              | string    | Nome do SKU                       |
| `productLine`       | objeto    | Linha de produto relacionada      |
| `active`            | boolean   | Indica se o SKU está ativo        |
| `deleted`           | boolean   | Indica se o SKU foi excluído      |
| `customFields`      | array     | Lista de campos customizados      |
| `updatedAt`         | datetime  | Data da última atualização        |
| `updatedAtMillis`   | integer   | Data de atualização em milisseg.  |
| `photoUpdatedAt`    | datetime  | Data da última atualização de foto|
| `barCode`           | string    | Código de barras                  |
| `externalCode`      | string    | Código externo                    |
| `integrationCode`   | string    | Código para integração            |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/sku/find?name=ProdutoX' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/sku/find?name=ProdutoX', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v1/123/sku/find",
  params={"name": "ProdutoX"},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/sku/find', {
  params: { name: "ProdutoX" },
  headers: {
    Authorization: 'Bearer {seu_token}'
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
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | SKU não encontrado                   |
| 💥 `500`  | Erro interno no servidor             |
