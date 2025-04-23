# Cadastrar Visitas Agendadas

Cadastra múltiplas visitas agendadas no roteiro do colaborador especificado.

`POST /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`

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
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
]
```

***

## ✅ Respostas

### `201 Created` – Visitas agendadas cadastradas com sucesso

```json
[]
```

***

## 🧬 Esquema da Requisição

### New Scheduled Visit

| Campo           | Tipo    | Obrigatório | Descrição                   |
| --------------- | ------- | ----------- | --------------------------- |
| `pointOfSaleId` | integer | ✅ sim       | ID do ponto de venda        |
| `visitDate`     | string  | ✅ sim       | Data da visita (YYYY-MM-DD) |
| `visitOrder`    | integer | ✅ sim       | Ordem da visita (mínimo: 1) |
| `expectedStart` | string  | ❌ não       | Início previsto da visita   |
| `expectedEnd`   | string  | ❌ não       | Fim previsto da visita      |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
])
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/environments/123/employees/456/scheduledvisits",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json=[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
]
)

print('Status:', response.status_code)
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.post('https://api.involves.com/v3/environments/123/employees/456/scheduledvisits', [
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
], {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log('Status:', response.status);
});
```
````
