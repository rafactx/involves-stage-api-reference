---
description: Exclui visitas agendadas de um colaborador.
---

# Excluir Visitas Agendadas

`DELETE /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador |

***

## 📨 Corpo da Requisição (JSON)

```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
```

***

## ✅ Respostas

### `200 OK` – Visitas agendadas excluídas com sucesso

```json
[]
```

***

## 🧬 Esquema da Requisição

### Scheduled Visit to be deleted

| Campo           | Tipo    | Obrigatório | Descrição                   |
| --------------- | ------- | ----------- | --------------------------- |
| `pointOfSaleId` | integer | ✅ sim       | ID do ponto de venda        |
| `visitDate`     | string  | ✅ sim       | Data da visita (YYYY-MM-DD) |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://api.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
])
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python (requests)]
import requests

response = requests.delete(
  "https://api.involves.com/v3/environments/123/employees/456/scheduledvisits",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json=[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
)

print('Status:', response.status_code)
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.delete('https://api.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  data: [
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
}).then(response => {
  console.log('Status:', response.status);
});
```
````
