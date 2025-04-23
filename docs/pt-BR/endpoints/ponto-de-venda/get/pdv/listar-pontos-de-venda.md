---
description: Retorna uma lista paginada de pontos de venda.
---

# Listar Pontos de Venda

`GET /v1/{environmentId}/pointofsale`

***

## 📥 Parâmetros

| Nome                        | Tipo    | Local | Obrigatório | Descrição                            |
| --------------------------- | ------- | ----- | ----------- | ------------------------------------ |
| `environmentId`             | integer | path  | ✅ sim       | ID do ambiente                       |
| `page`                      | integer | query | ❌ não       | Página da listagem (default: 1)      |
| `size`                      | integer | query | ❌ não       | Quantidade por página (default: 100) |
| `name`                      | string  | query | ❌ não       | Nome do ponto de venda               |
| `companyRegistrationNumber` | string  | query | ❌ não       | CNPJ do PDV (apenas números)         |
| `updatedAtMillis`           | integer | query | ❌ não       | Filtro por data de atualização em ms |
| `active`                    | boolean | query | ❌ não       | Filtrar apenas ativos                |
| `regionId`                  | integer | query | ❌ não       | ID da regional                       |
| `regionName`                | string  | query | ❌ não       | Nome da regional                     |

***

## ✅ Respostas

### `200 OK` – Lista de pontos de venda retornada com sucesso

```json
[
  {
    "id": 0,
    "pointOfSaleBaseId": 0,
    "name": "string",
    "companyName": "string",
    "companyTradingName": "string",
    "code": "string",
    "companyRegistrationNumber": "65487320001",
    "phone": "string",
    "fax": "string",
    "storeNumber": "string",
    "billings": 0,
    "volume": 0,
    "manager": "string",
    "managerBirthday": "2025-04-22T16:57:12.415Z",
    "amountCheckouts": 0,
    "enabled": true,
    "region": {
      "id": 0,
      "name": "string"
    },
    "chain": {
      "id": 0,
      "name": "string"
    },
    "pointOfSaleType": {
      "id": 0,
      "name": "string"
    },
    "pointOfSaleProfile": {
      "id": 0,
      "name": "string"
    },
    "pointOfSaleChannel": {
      "id": 0,
      "name": "string"
    },
    "deleted": false
  }
]
```

> A resposta completa inclui informações detalhadas como endereço, canais, perfis, bandeira, mix de produtos e campos customizados.

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/pointofsale?page=1&size=100&active=true' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/pointofsale?page=1&size=100&active=true', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v1/123/pointofsale",
  params={"page": 1, "size": 100, "active": "true"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/pointofsale', {
  params: { page: 1, size: 100, active: true },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
