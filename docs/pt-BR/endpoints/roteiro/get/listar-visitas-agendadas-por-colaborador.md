---
description: Retorna uma lista paginada de visitas agendadas de um colaborador específico.
---

# Listar Visitas Agendadas por Colaborador

### 🔗 Endpoint

```http
GET /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits
```

### 🧾 Parâmetros

|      Nome     |   Tipo  | Local | Obrigatório |            Descrição            |
| :-----------: | :-----: | :---: | :---------: | :-----------------------------: |
| environmentId | integer |  path |     Sim     |          ID do ambiente         |
|   employeeId  | integer |  path |     Sim     |        ID do colaborador        |
|      page     | integer | query |     Não     | Busca por uma página específica |
|      size     | integer | query |     Não     |  Quantidade de itens por página |
|   startDate   |  string | query |     Não     |     Data de início da busca     |
|    endDate    |  string | query |     Sim     |       Data de fim da busca      |
|    visited    | boolean | query |     Não     |   Indica se a visita aconteceu  |

### 🧠 Corpo da Requisição

_Não se aplica._

### 📦 Esquema da Requisição

_Não se aplica._

### ✅ Respostas

**Código 206** – Lista de visitas agendadas retornada com sucesso.

### 📄 Esquema da Resposta

```json
[
  {
    "pointOfSale": {
      "id": 0,
      "_link": "string"
    },
    "visitDate": "2025-04-22",
    "expectedStart": "2025-04-22T21:24:50.140Z",
    "expectedEnd": "2025-04-22T21:24:50.140Z",
    "visited": true
  }
]
```

### ❌ Respostas de Erro Comuns

| Código |         Descrição        |
| :----: | :----------------------: |
|   400  |    Requisição inválida   |
|   401  |      Não autorizado      |
|   404  |  Recurso não encontrado  |
|   500  | Erro interno do servidor |

### 📘 Exemplo de Requisição

#### \[🟢 cURL]

```bash
curl -X GET 'https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31'
```

#### \[🟡 JavaScript (Fetch)]

```js
fetch('https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31')
  .then(response => response.json())
  .then(data => console.log(data))
```

#### \[🔵 Python (requests)]

```python
import requests

response = requests.get('https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31')
print(response.json())
```

#### \[🟣 Node.js (axios)]

```js
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31')
  .then(response => console.log(response.data));
```
