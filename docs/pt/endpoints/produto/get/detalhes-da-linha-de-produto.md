---
description: Retorna os dados de uma linha de produto específica com base em seu ID.
---

# Detalhes da Linha de Produto

> 🔗 `GET /v3/environments/{environmentId}/productlines/{productLineId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição              |
|-----------------|---------|--------|--------------|------------------------|
| `environmentId` | integer | path   | ✅ sim       | ID do ambiente         |
| `productLineId` | integer | path   | ✅ sim       | ID da linha de produto |


## ✅ Respostas

### `200 OK` – Linha de produto retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "barCode": "string",
  "externalCode": "string",
  "active": true,
  "approved": true,
  "origin": "OWN",
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0
    }
  ],
  "brand": {
    "id": 0,
    "_link": "string"
  },
  "category": {
    "id": 0,
    "_link": "string"
  },
  "skus": {
    "id": 0,
    "_link": "string"
  },
  "regionals": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Product Line

| Campo           | Tipo         | Descrição                                                    |
|------------------|--------------|----------------------------------------------------------------|
| `id`             | integer      | ID da linha de produto                                        |
| `name`           | string       | Nome da linha de produto                                      |
| `barCode`        | string       | Código de barras                                              |
| `externalCode`   | string       | Código externo                                                |
| `active`         | boolean      | Indica se a linha está ativa                                  |
| `approved`       | boolean      | Indica se está homologada                                     |
| `origin`         | string       | Origem: `OWN` ou `COMPETITOR`                                 |
| `customFields[]` | array        | Lista de campos customizados (`name`, `value`, `index`)       |
| `brand`          | object (Link)| Marca vinculada                                               |
| `category`       | object (Link)| Categoria vinculada                                           |
| `skus`           | object (Link)| Referência ao conjunto de SKUs                                |
| `regionals`      | object (Link)| Referência ao conjunto de regionais onde está disponível      |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/productlines/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/productlines/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v3/environments/123/productlines/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/productlines/456', {
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
| 🔐 `401` | Não autorizado – token inválido ou ausente |
| 🔍 `404` | Linha de produto não encontrada            |
| 💥 `500` | Erro interno no servidor                   |
