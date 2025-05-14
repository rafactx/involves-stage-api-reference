---
description: >-
  Retorna uma lista com no máximo 100 linhas de produto de acordo com os
  parâmetros enviados.
---

# Buscar Linhas de Produto

> 🔗 `GET /v1/{environmentId}/productline/find`


## 📥 Parâmetros

| Nome           | Tipo    | Local | Obrigatório | Descrição                 |
|----------------|---------|-------|-------------|---------------------------|
| `environmentId`| integer | path  | ✅ sim       | ID do ambiente            |
| `name`         | string  | query | ❌ não       | Nome da linha de produto  |
| `externalCode` | string  | query | ❌ não       | Código externo            |


## ✅ Respostas

### `200 OK` – Lista de linhas de produto retornada com sucesso

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
  "updatedAt": "2025-04-22T18:28:50.044Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T18:28:50.044Z",
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


## 🧬 Esquema de Resposta

### Productline V1

| Campo                 | Tipo             | Descrição                                                |
|-----------------------|------------------|------------------------------------------------------------|
| `id`                  | integer          | ID da linha de produto                                     |
| `name`                | string           | Nome da linha de produto                                   |
| `productCategory`     | objeto           | Categoria relacionada (id e nome)                          |
| `brand`               | objeto           | Marca relacionada (id e nome)                              |
| `barCode`             | string           | Código de barras                                           |
| `externalCode`        | string           | Código externo                                             |
| `active`              | boolean          | Está ativa?                                                |
| `approved`            | boolean          | Está homologada?                                           |
| `updatedAt`           | datetime         | Última atualização                                         |
| `productLineType`     | string           | Tipo da linha: `CUSTOMER_PRODUCTLINE` ou `COMPETITOR_PRODUCTLINE` |
| `deleted`             | boolean          | Foi excluída?                                              |
| `photoLocation`       | string           | Nome do arquivo de imagem                                  |
| `photoUpdatedAt`      | datetime         | Data da última atualização da imagem                       |
| `skus[]`              | array de objetos | Lista de SKUs associadas                                   |
| `availabilityRegions[]`| array de objetos| Regionais onde está disponível                             |
| `customFields[]`      | array de objetos | Campos customizados                                        |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productline/find?name=ProdutoA' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v1/123/productline/find?name=ProdutoA', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v1/123/productline/find",
  params={"name": "ProdutoA"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productline/find', {
  params: { name: 'ProdutoA' },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`**.

Exemplo: se sua URL é `https://exemplo.involves.com`, o domínio correto é `exemplo`.

A URL final será:

`https://exemplo.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                          |
|--------|------------------------------------|
| 🔴 `400` | Requisição mal formatada          |
| 🔐 `401` | Não autenticado                   |
| 🚫 `403` | Acesso negado                     |
| 🔍 `404` | Linha de produto não encontrada   |
| 💥 `500` | Erro interno no servidor          |
