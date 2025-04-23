---
description: Retorna um ponto de venda de acordo com o seu ID.
---

# Buscar Ponto de Venda por ID

`GET /v3/environments/{environmentId}/pointofsales/{pointOfSaleId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `pointOfSaleId` | integer | path  | ✅ sim       | ID do ponto de venda |

***

## ✅ Respostas

### `200 OK` – Ponto de venda retornado com sucesso

```json
{
  "id": 0,
  "pointOfSaleBaseId": 0,
  "name": "string",
  "legalBusinessName": "string",
  "tradeName": "string",
  "code": "string",
  "companyRegistrationNumber": "string",
  "phone": "string",
  "fax": "string",
  "storeNumber": "string",
  "billings": 0,
  "salesVolume": 0,
  "managerName": "string",
  "managerBirthday": "2025-04-22",
  "amountCheckouts": 0,
  "active": true,
  "macroregional": {
    "id": 0,
    "_link": "string"
  },
  "regional": {
    "id": 0,
    "_link": "string"
  },
  "banner": {
    "id": 0,
    "_link": "string"
  },
  "type": {
    "id": 0,
    "_link": "string"
  },
  "profile": {
    "id": 0,
    "_link": "string"
  },
  "channel": {
    "id": 0,
    "_link": "string"
  },
  "shoppingCenter": {
    "id": 0,
    "_link": "string"
  },
  "address": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### Point of Sale

(Ver schema completo no JSON acima. Contém dados do PDV, contatos, loja, gestão e links para entidades associadas como banner, canal, tipo, shopping etc.)

### 📘 Exemplo de requisição

````tabs
tabsCopiarEditar```bash [🟢 cURL]
curl --request GET \\
  --url 'https://api.involves.com/v3/environments/123/pointofsales/456' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/pointofsales/456', {
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
  "https://api.involves.com/v3/environments/123/pointofsales/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/pointofsales/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
