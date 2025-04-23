---
description: >-
  Remove visitas previamente agendadas para um colaborador no ambiente
  especificado.
---

# Excluir Visitas Agendadas de um Colaborador

***

#### 📥 Parâmetros

|      Nome     |   Tipo  | Obrigatório |     Descrição     |
| :-----------: | :-----: | :---------: | :---------------: |
| environmentId | integer |     sim     |   ID do ambiente  |
|   employeeId  | integer |     sim     | ID do colaborador |

***

#### 📦 Corpo da Requisição

```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
```

***

#### 🧬 Esquema da Requisição

|      Nome     |   Tipo  | Obrigatório |             Descrição             |
| :-----------: | :-----: | :---------: | :-------------------------------: |
| pointOfSaleId | integer |     sim     |        ID do ponto de venda       |
|   visitDate   |  string |     sim     | Data da visita (formato ISO-8601) |

***

#### ✅ Respostas

| Código |                Descrição                |
| :----: | :-------------------------------------: |
|   200  | Visitas agendadas excluídas com sucesso |
|   400  |          Requisição malformada          |
|   401  |              Não autorizado             |
|   404  |          Recurso não encontrado         |
|   500  |         Erro interno no servidor        |

***

#### 📘 Exemplo de Requisição

**\[🟢 cURL]**

```bash
curl -X DELETE 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  -H 'Content-Type: application/json' \
  -d '[{ "pointOfSaleId": 1, "visitDate": "2025-04-22" }]'
```

**\[🟡 JavaScript (Fetch)]**

```javascript
fetch('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify([{ pointOfSaleId: 1, visitDate: '2025-04-22' }])
});
```

**\[🔵 Python (requests)]**

```python
import requests

url = 'https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits'
payload = [{ "pointOfSaleId": 1, "visitDate": "2025-04-22" }]
headers = { 'Content-Type': 'application/json' }

requests.delete(url, json=payload, headers=headers)
```

**\[🟣 Node.js (axios)]**

```javascript
const axios = require('axios');

axios.delete('https://SeuDominio.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  headers: { 'Content-Type': 'application/json' },
  data: [{ pointOfSaleId: 1, visitDate: '2025-04-22' }]
});
```
