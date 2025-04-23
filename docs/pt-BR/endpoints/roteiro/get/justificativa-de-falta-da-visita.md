---
description: >-
  Este endpoint retorna os dados da justificativa de ausência de um colaborador
  em uma visita previamente agendada.
---

# Justificativa de Falta da Visita

🔗 Endpoint

`GET /v3/environments/{environmentId}/visits/{visitId}/noshow`

### 📥 Parâmetros

|      Nome     |   Tipo  | Obrigatório |    Descrição   |
| :-----------: | :-----: | :---------: | :------------: |
| environmentId | integer |     sim     | ID do ambiente |
|    visitId    | integer |     sim     |  ID da visita  |

### ✅ Respostas

#### ✔️ 200 – Justificativa de falta de visita retornada com sucesso

```json
{
  "id": 0,
  "excuseId": 0,
  "date": "2025-04-22T21:25:41.717Z",
  "excuse": "string",
  "note": "string",
  "status": "PENDING",
  "employee": {
    "id": 0,
    "_link": "string"
  }
}
```

### 🧬 Esquema de Resposta

#### Visit NoShow

|   Campo  |   Tipo   |                       Descrição                       |
| :------: | :------: | :---------------------------------------------------: |
|    id    |  integer |                  ID da justificativa                  |
| excuseId |  integer |                ID do motivo da ausência               |
|   date   | datetime |                 Data da justificativa                 |
|  excuse  |  string  |               Motivo textual da ausência              |
|   note   |  string  |                  Observação adicional                 |
|  status  |  string  | Status da justificativa (PENDING, VISITED, JUSTIFIED) |
| employee |  objeto  |          Objeto de referência ao colaborador          |

### 📘 Exemplo de requisição

#### \[🟢 cURL]

```bash
curl --request GET   --url 'https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow'   --header 'Accept: application/json'
```

#### \[🟡 JavaScript (Fetch)]

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow', {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
})
.then(response => response.json())
.then(data => console.log(data))
```

#### \[🔵 Python (requests)]

```python
import requests

url = "https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow"
headers = { "Accept": "application/json" }

response = requests.get(url, headers=headers)
print(response.json())
```

#### \[🟣 Node.js (axios)]

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow', {
  headers: { 'Accept': 'application/json' }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
