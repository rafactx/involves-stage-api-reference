---
description: Altera propriedades específicas de um ponto de venda.
---

# Alterar Propriedades de um PDV

`PATCH /v1/{environmentId}/pointofsale/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "active": true,
  "disabledReason": 1,
  "disabledNote": "PDV fechado temporariamente",
  "invalid": false
}
```

### Esquema – Patch Point of Sale V1

| Campo            | Tipo    | Obrigatório | Descrição                                      |
| ---------------- | ------- | ----------- | ---------------------------------------------- |
| `active`         | boolean | ❌ não       | Ativa ou inativa o ponto de venda              |
| `disabledReason` | integer | ❌ não       | Código do motivo de desativação (1 a 8)        |
| `disabledNote`   | string  | ❌ não       | Texto livre explicando o motivo de desativação |
| `invalid`        | boolean | ❌ não       | Define se o PDV é inválido                     |

***

## ✅ Respostas

### `200 OK` – Ponto de venda alterado com sucesso

```json
{
  "id": 0,
  "name": "Supermercado Padrão",
  "enabled": true,
  "disabledReason": "string",
  "disabledNote": "PDV fechado temporariamente"
}
```

***

## 📘 Exemplo de requisição

### 🟢 cURL

```bash
curl --request PATCH \
  --url 'https://api.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "active": true,
    "disabledReason": 1,
    "disabledNote": "PDV fechado temporariamente",
    "invalid": false
  }'
```

***

### 🟡 JavaScript (Fetch)

```javascript
fetch('https://api.involves.com/v1/123/pointofsale/456', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    active: true,
    disabledReason: 1,
    disabledNote: "PDV fechado temporariamente",
    invalid: false
  })
})
  .then(res => res.json())
  .then(console.log);
```

***

### 🔵 Python (requests)

```python
import requests

response = requests.patch(
  "https://api.involves.com/v1/123/pointofsale/456",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "active": True,
    "disabledReason": 1,
    "disabledNote": "PDV fechado temporariamente",
    "invalid": False
  }
)

print(response.json())
```

***

### 🟣 Node.js (axios)

```javascript
const axios = require('axios');

axios.patch('https://api.involves.com/v1/123/pointofsale/456', {
  active: true,
  disabledReason: 1,
  disabledNote: "PDV fechado temporariamente",
  invalid: false
}, {
  headers: {
    Authorization: "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  }
}).then(response => {
  console.log(response.data);
});
```
