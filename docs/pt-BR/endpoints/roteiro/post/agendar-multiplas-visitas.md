---
description: Cadastra múltiplas visitas agendadas no roteiro do colaborador especificado.
---

# Agendar múltiplas visitas

### 🧩 Endpoint

`POST /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`

### 📥 Parâmetros

#### Path Parameters

|      Nome     |   Tipo  | Obrigatório |     Descrição     |
| :-----------: | :-----: | :---------: | :---------------: |
| environmentId | integer |     sim     |   ID do ambiente  |
|   employeeId  | integer |     sim     | ID do colaborador |

#### Body Parameters

|      Nome     |   Tipo  | Obrigatório |                Descrição               |
| :-----------: | :-----: | :---------: | :------------------------------------: |
| pointOfSaleId | integer |     sim     |          ID do ponto de venda          |
|   visitDate   |  string |     sim     |       Data da visita (yyyy-mm-dd)      |
|   visitOrder  | integer |     sim     |         Ordem da visita no dia         |
| expectedStart |  string |     não     |  Horário de início esperado (ISO-8601) |
|  expectedEnd  |  string |     não     | Horário de término esperado (ISO-8601) |

### ✅ Respostas

#### 🟢 201 – Visitas agendadas cadastradas com sucesso

```json
[ ]
```

### 🧬 Esquema de Requisição

**New Scheduled Visit**

```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T21:30:11.241Z",
    "expectedEnd": "2025-04-22T21:30:11.241Z"
  }
]
```

### 📘 Exemplo de requisição

#### \[🟢 cURL]

```bash
curl -X POST 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits' \
-H 'Content-Type: application/json' \
-d '[{"pointOfSaleId": 1,"visitDate": "2025-04-22","visitOrder": 1}]'
```

#### \[🟡 JavaScript (Fetch)]

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify([{ pointOfSaleId: 1, visitDate: '2025-04-22', visitOrder: 1 }])
});
```

#### \[🔵 Python (requests)]

```python
import requests

url = 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits'
payload = [{"pointOfSaleId": 1, "visitDate": "2025-04-22", "visitOrder": 1}]
headers = {'Content-Type': 'application/json'}
response = requests.post(url, json=payload, headers=headers)
```

#### \[🟣 Node.js (axios)]

```javascript
const axios = require('axios');

axios.post('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', [
  {
    pointOfSaleId: 1,
    visitDate: '2025-04-22',
    visitOrder: 1
  }
]);
```
