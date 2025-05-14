---
description: Cadastra múltiplas visitas agendadas no roteiro do colaborador especificado.
---

# 📅 Agendar Múltiplas Visitas

> 🔗 `POST /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
|-----------------|---------|-------|-------------|------------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente         |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador      |


## 📨 Corpo da Requisição

```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T09:00:00.000Z",
    "expectedEnd": "2025-04-22T11:00:00.000Z"
  }
]
```

::: details Esquema de Requisição

| Campo           | Tipo     | Obrigatório | Descrição                                   |
|-----------------|----------|-------------|---------------------------------------------|
| `pointOfSaleId` | integer  | ✅ sim       | ID do ponto de venda                        |
| `visitDate`     | string   | ✅ sim       | Data da visita (formato `YYYY-MM-DD`)       |
| `visitOrder`    | integer  | ✅ sim       | Ordem da visita no dia                      |
| `expectedStart` | datetime | ❌ não       | Horário esperado de início da visita        |
| `expectedEnd`   | datetime | ❌ não       | Horário esperado de término da visita       |

:::


## ✅ Resposta

### `201 Created` – Visitas agendadas com sucesso

```json
[]
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl -X POST 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  -H 'Content-Type: application/json' \
  -d '[{
    "pointOfSaleId": 1,
    "visitDate": "2025-04-22",
    "visitOrder": 1
  }]'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      pointOfSaleId: 1,
      visitDate: '2025-04-22',
      visitOrder: 1
    }
  ])
});
```

```python [🔵 Python]
import requests

url = 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits'
payload = [{
  "pointOfSaleId": 1,
  "visitDate": "2025-04-22",
  "visitOrder": 1
}]
headers = {'Content-Type': 'application/json'}

response = requests.post(url, json=payload, headers=headers)
print(response.status_code)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', [
  {
    pointOfSaleId: 1,
    visitDate: '2025-04-22',
    visitOrder: 1
  }
]).then(res => console.log(res.status));
```

:::


## ❌ Erros Comuns

| Código | Descrição                                    |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição inválida ou malformada           |
| 🔐 `401` | Token ausente ou inválido                   |
| 🔍 `404` | Colaborador ou ambiente não encontrado      |
| 💥 `500` | Erro interno do servidor                    |