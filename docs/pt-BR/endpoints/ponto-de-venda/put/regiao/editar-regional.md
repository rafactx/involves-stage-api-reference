---
description: Edita os dados de uma regional.
---

# Editar Regional

`PUT /v1/{environmentId}/region/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `id`            | integer | path  | ✅ sim       | ID da regional |

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "id": 0,
  "name": "Regional Sudeste Atualizada",
  "macroRegionId": 2
}
```

### Esquema – Updated Regional V1

| Campo           | Tipo    | Obrigatório | Descrição                      |
| --------------- | ------- | ----------- | ------------------------------ |
| `id`            | integer | ✅ sim       | ID da regional                 |
| `name`          | string  | ✅ sim       | Nome da regional               |
| `macroRegionId` | integer | ❌ não       | ID da macrorregional associada |

***

## ✅ Respostas

### `200 OK` – ID da regional editada

```json
0
```

***

## 📘 Exemplo de requisição

### 🟢 cURL

```bash
curl --request PUT \
  --url 'https://api.involves.com/v1/123/region/456' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": 0,
    "name": "Regional Sudeste Atualizada",
    "macroRegionId": 2
  }'
```

***

### 🟡 JavaScript (Fetch)

```javascript
fetch('https://api.involves.com/v1/123/region/456', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 0,
    name: "Regional Sudeste Atualizada",
    macroRegionId: 2
  })
})
  .then(res => res.json())
  .then(console.log);
```

***

### 🔵 Python (requests)

```python
import requests

response = requests.put(
  "https://api.involves.com/v1/123/region/456",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "id": 0,
    "name": "Regional Sudeste Atualizada",
    "macroRegionId": 2
  }
)

print(response.json())
```

***

### 🟣 Node.js (axios)

```javascript
const axios = require('axios');

axios.put('https://api.involves.com/v1/123/region/456', {
  id: 0,
  name: "Regional Sudeste Atualizada",
  macroRegionId: 2
}, {
  headers: {
    Authorization: "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  }
}).then(response => {
  console.log(response.data);
});
```
