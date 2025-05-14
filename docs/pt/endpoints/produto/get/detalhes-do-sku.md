---
description: >-
  Retorna os dados de um SKU (unidade de manutenção de estoque) com base em seu
  identificador único.
---

# Detalhes do SKU


## 🧾 Resumo

| Método | Endpoint                                      | Autenticação | Descrição             |
|--------|-----------------------------------------------|--------------|-----------------------|
| `GET`  | `/v3/environments/{environmentId}/skus/{skuId}` | ✅ Token      | Retorna um SKU por ID |


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
|------------------|---------|--------|--------------|----------------|
| `environmentId`  | integer | path   | ✅ sim       | ID do ambiente |
| `skuId`          | integer | path   | ✅ sim       | ID do SKU      |


## ✅ Respostas

### `200 OK` – SKU retornado com sucesso

```json
{
  "id": 0,
  "name": "string",
  "active": true,
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string",
  "customFields": [
    {
      "name": "string",
      "index": 0,
      "value": "string"
    }
  ],
  "productLine": {
    "id": 0,
    "_link": "string"
  },
  "brand": {
    "id": 0,
    "_link": "string"
  },
  "category": {
    "id": 0,
    "_link": "string"
  },
  "supercategory": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema da Resposta

### SKU V3

| Campo            | Tipo       | Descrição                            |
|------------------|------------|----------------------------------------|
| `id`             | integer    | ID do SKU                              |
| `name`           | string     | Nome do SKU                            |
| `active`         | boolean    | Indica se o SKU está ativo             |
| `barCode`        | string     | Código de barras                       |
| `externalCode`   | string     | Código externo                         |
| `integrationCode`| string     | Código de integração                   |
| `customFields`   | array      | Lista de campos personalizados         |
| `productLine`    | objeto     | Referência à linha de produto          |
| `brand`          | objeto     | Referência à marca                     |
| `category`       | objeto     | Referência à categoria                 |
| `supercategory`  | objeto     | Referência à supercategoria            |


## 📘 Exemplos de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/skus/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/skus/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
.then(res => res.json())
.then(data => console.log(data));
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v3/environments/123/skus/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/skus/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — a parte que aparece **antes de `.involves.com`** na URL.
:::


## ❌ Erros Comuns

| Código | Descrição                                 |
|--------|-------------------------------------------|
| 🔴 `400` | Requisição inválida ou malformada         |
| 🔐 `401` | Token de autenticação ausente ou inválido |
| 🔍 `404` | SKU não encontrado                        |
| 💥 `500` | Erro interno no servidor                  |
