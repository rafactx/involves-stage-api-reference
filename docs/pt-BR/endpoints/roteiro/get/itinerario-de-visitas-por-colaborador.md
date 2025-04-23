---
description: >-
  Retorna as visitas agendadas para uma data, agrupadas por colaborador, em
  ordem de visita.
---

# Itinerário de Visitas por Colaborador

### 🔗 Endpoint

```http
GET /v2/environments/{environment}/itinerary
```

### 📦 Parâmetros

|      Nome      |   Tipo  | Local | Obrigatório |                         Descrição                        |
| :------------: | :-----: | :---: | :---------: | :------------------------------------------------------: |
|   environment  | integer |  path |     sim     |                      ID do ambiente                      |
|      date      |  string | query |     não     |            Data para consulta (ex: 2019-06-25)           |
| ignoreInactive | boolean | query |     não     |    Ignora visitas de colaboradores inativos/desligados   |
|      page      | integer | query |     não     |               Página retornada (default: 1)              |
|      size      | integer | query |     não     | Máximo de visitas por página (default: 100, máximo: 200) |

### 🧾 Corpo da Requisição

Não possui corpo. Os dados devem ser enviados via parâmetros.

### 📬 Respostas

| Código |                 Descrição                |
| :----: | :--------------------------------------: |
|   200  | Visitas agendadas retornadas com sucesso |

### 🧬 Esquema da Resposta

```json
[
  {
    "itineraryId": 0,
    "employeeId": 0,
    "employeeName": "string",
    "pointOfSaleId": 0,
    "pointOfSaleName": "string",
    "pointOfSaleTaxPayerCode": "string",
    "visitOrder": 0
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
curl --request GET \
  --url 'https://SeuDominio.involves.com/v2/environments/123/itinerary?date=2023-01-01&page=1&size=100' \
  --header 'Authorization: Bearer SEU_TOKEN'
```

#### \[🟡 JavaScript (Fetch)]

```javascript
fetch('https://SeuDominio.involves.com/v2/environments/123/itinerary?date=2023-01-01&page=1&size=100', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer SEU_TOKEN'
  }
});
```

#### \[🔵 Python (requests)]

```python
import requests

url = 'https://SeuDominio.involves.com/v2/environments/123/itinerary'
params = {
  'date': '2023-01-01',
  'page': 1,
  'size': 100
}
headers = {
  'Authorization': 'Bearer SEU_TOKEN'
}

response = requests.get(url, headers=headers, params=params)
```

#### \[🟣 Node.js (axios)]

```javascript
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v2/environments/123/itinerary', {
  params: {
    date: '2023-01-01',
    page: 1,
    size: 100
  },
  headers: {
    Authorization: 'Bearer SEU_TOKEN'
  }
});
```
