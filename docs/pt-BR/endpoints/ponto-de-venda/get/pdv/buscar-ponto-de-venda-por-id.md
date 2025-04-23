---
description: Retorna um ponto de venda de acordo com o ID enviado.
---

# Buscar Ponto de Venda por ID ⚠️

⚠️ Este endpoint está descontinuado. Utilize a versão v3 sempre que possível.

`GET /v1/{environmentId}/pointofsale/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |

***

## ✅ Respostas

### `200 OK` – Ponto de venda retornado com sucesso

```json
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
  "managerBirthday": "2025-04-22T16:59:42.539Z",
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
  "deleted": true
}
```

> A resposta completa inclui endereço, canais, perfis, bandeira, mix de produtos, dados da empresa e campos customizados.

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/pointofsale/456', {
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
  "https://api.involves.com/v1/123/pointofsale/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/pointofsale/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
