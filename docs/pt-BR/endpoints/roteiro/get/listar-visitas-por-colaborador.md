---
description: >-
  Retorna uma lista com as visitas do usuário logado e que esteja em equipe de
  campo, com base no intervalo de datas informado.
---

# Listar Visitas por Colaborador ⚠️

> ⚠️ **Este endpoint está obsoleto (deprecated)**

***

## 📎 Endpoint

```
GET /v1/{environmentId}/visit/find
```

***

## 📥 Parâmetros

|      Nome     |   Tipo  | Local | Obrigatório |                Descrição               |
| :-----------: | :-----: | :---: | :---------: | :------------------------------------: |
| environmentId | integer |  path |     sim     |             ID do ambiente             |
|     start     |  string | query |     não     | Data de início da busca (`YYYY-MM-DD`) |
|      end      |  string | query |     não     |   Data de fim da busca (`YYYY-MM-DD`)  |

***

## 📦 Respostas

| Código |                   Descrição                   |
| :----: | :-------------------------------------------: |
|   200  | Visitas do colaborador retornadas com sucesso |

### Exemplo de resposta

```json
{
  "id": 0,
  "pointOfSaleItineraryId": 0,
  "visitDate": "2025-04-22T21:12:18.181Z",
  "updatedAt": "2025-04-22T21:12:18.181Z",
  "deleted": true,
  "checkIns": [
    {
      "id": 0,
      "entryDate": "2025-04-22T21:12:18.181Z",
      "syncTimeEntryDate": "2025-04-22T21:12:18.181Z",
      "exitDate": "2025-04-22T21:12:18.181Z",
      "syncTimeExitDate": "2025-04-22T21:12:18.181Z"
    }
  ],
  "visitJustification": {
    "date": "2025-04-22T21:12:18.181Z",
    "reasonId": 0
  },
  "status": "PENDING"
}
```

***

## 🧬 Esquema da Resposta

**Visit V1**

* `id`: integer — ID da visita
* `pointOfSaleItineraryId`: integer — ID do ponto de venda
* `visitDate`: string($date-time) — Data da visita
* `updatedAt`: string($date-time) — Data de atualização
* `deleted`: boolean — Se a visita foi excluída
* `checkIns`: lista de check-ins (entrada, saída, sincronização)
* `visitJustification`: motivo e data da justificativa
* `status`: string (enum: `PENDING`, `VISITED`, `JUSTIFIED`)

***

## ❌ Respostas de Erro Comuns

| Código |         Descrição        |
| :----: | :----------------------: |
|   400  |    Requisição inválida   |
|   401  |      Não autorizado      |
|   404  |  Recurso não encontrado  |
|   500  | Erro interno do servidor |

***

## 📘 Exemplo de Requisição

### \[🟢 cURL]

```bash
curl -X GET 'https://SeuDominio.involves.com/v1/123/visit/find?start=2025-01-01&end=2025-01-31'
```

### \[🟡 JavaScript (Fetch)]

```js
fetch('https://SeuDominio.involves.com/v1/123/visit/find?start=2025-01-01&end=2025-01-31')
  .then(res => res.json())
  .then(console.log)
```

### \[🔵 Python (requests)]

```python
import requests

url = "https://SeuDominio.involves.com/v1/123/visit/find"
params = {"start": "2025-01-01", "end": "2025-01-31"}
response = requests.get(url, params=params)
print(response.json())
```

### \[🟣 Node.js (axios)]

```js
const axios = require('axios')

axios.get('https://SeuDominio.involves.com/v1/123/visit/find', {
  params: { start: '2025-01-01', end: '2025-01-31' }
}).then(res => console.log(res.data))
```
