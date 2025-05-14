---
description: >-
  ⚠️ Este endpoint está obsoleto (Deprecated). Retorna a linha de produto de
  acordo com o ID do ambiente e o ID da linha de produto enviados.
---

# Buscar Linha de Produto por ID ⚠️

> 🔗 `GET /v1/{environmentId}/productline/{id}`

⚠️ Este endpoint está **obsoleto**. Para novos desenvolvimentos, utilize a versão v3 da API, se disponível.


## 📥 Parâmetros

| Nome           | Tipo    | Local | Obrigatório | Descrição                                       |
| -------------- | ------- | ----- | ----------- | ----------------------------------------------- |
| `environmentId`| integer | path  | ✅ sim       | ID do ambiente                                  |
| `id`           | integer | path  | ✅ sim       | ID da linha de produto a ser buscada            |


## ✅ Respostas

### `200 OK` – Linha de produto retornada com sucesso

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
  "updatedAt": "2025-04-22T19:37:36.024Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T19:37:36.024Z",
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

| Campo               | Tipo              | Descrição                                        |
|---------------------|-------------------|--------------------------------------------------|
| `id`                | integer           | ID da linha de produto                           |
| `name`              | string            | Nome da linha de produto                         |
| `productCategory`   | objeto            | Categoria (ID e nome)                            |
| `brand`             | objeto            | Marca (ID e nome)                                |
| `barCode`           | string            | Código de barras                                 |
| `externalCode`      | string            | Código externo                                   |
| `active`            | boolean           | Linha ativa?                                     |
| `approved`          | boolean           | Homologada?                                      |
| `productLineType`   | string            | Tipo: `CUSTOMER_PRODUCTLINE`, `COMPETITOR_PRODUCTLINE` |
| `deleted`           | boolean           | Linha excluída?                                  |
| `photoLocation`     | string            | Nome do arquivo de imagem                        |
| `photoUpdatedAt`    | datetime          | Data da última atualização da imagem             |
| `skus[]`            | array de objetos  | Lista de SKUs associadas à linha                 |
| `availabilityRegions[]` | array de objetos | Regionais em que a linha está disponível      |
| `customFields[]`    | array de objetos  | Campos customizados                              |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productline/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v1/123/productline/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v1/123/productline/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productline/456', {
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

Exemplo: se sua URL é `https://exemplo.involves.com`, o domínio é `exemplo`.

A chamada final deve ficar:

`https://exemplo.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                         |
|--------|----------------------------------|
| 🔴 `400` | Requisição inválida              |
| 🔐 `401` | Não autenticado                  |
| 🚫 `403` | Acesso negado                    |
| 🔍 `404` | Linha de produto não encontrada |
| 💥 `500` | Erro interno no servidor         |
