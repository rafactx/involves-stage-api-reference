---
description: Retorna as visitas modificadas após uma data especificada em milissegundos.
---

# Visitas Realizadas

**Endpoint:**

&#x20;`GET /v1/{environmentId}/visit/sync/timestamp/{timestamp}`\


***

## 🔧 Parâmetros

| Nome          | Descrição                                               | Tipo    | Local | Obrigatório | Valor Padrão |
| ------------- | ------------------------------------------------------- | ------- | ----- | ----------- | ------------ |
| environmentId | ID do ambiente                                          | integer | path  | Sim         | -            |
| timestamp     | Data em milissegundos utilizada como início da consulta | integer | path  | Sim         | -            |
| size          | Número de registros a serem listados                    | integer | query | Não         | 50           |
| count         | Indica se deve retornar o número estimado de páginas    | boolean | query | Não         | -            |

***

## 📘 Exemplo de Requisição

```
GET /v1/123/visit/sync/timestamp/1713800000000?size=50&count=true
```

***

## ✅ Exemplo de Resposta (200 OK)

**MediaType:** `application/json`

```json
{
  "id": 0,
  "employee": {
    "id": 0,
    "name": "string",
    "leader": {
      "id": 0,
      "name": "string"
    }
  },
  "pointOfSale": {
    "id": 0,
    "name": "string",
    "region": {
      "id": 0,
      "name": "string"
    }
  },
  "visitDate": "aaaa-mm-ddThh:mm:ss.fffZ",
  "type": "string",
  "status": "string",
  "checkins": [
    {
      "id": 0,
      "entryDate": "aaaa-mm-ddThh:mm:ss.fffZ",
      "syncTimeEntryDate": "aaaa-mm-ddThh:mm:ss.fffZ",
      "exitDate": "aaaa-mm-ddThh:mm:ss.fffZ",
      "syncTimeExitDate": "aaaa-mm-ddThh:mm:ss.fffZ",
      "type": 0,
      "automaticCheckoutBySystem": true
    }
  ],
  "absence": {
    "date": "aaaa-mm-ddThh:mm:ss.fffZ",
    "reasonId": 0,
    "id": 0,
    "employeeId": 0,
    "reason": "string",
    "note": "string",
    "status": 0
  },
  "expectedStart": "aaaa-mm-ddThh:mm:ss.fffZ",
  "expectedEnd": "aaaa-mm-ddThh:mm:ss.fffZ",
  "entryDateManualCheckin": "aaaa-mm-ddThh:mm:ss.fffZ",
  "exitDateManualCheckin": "aaaa-mm-ddThh:mm:ss.fffZ",
  "entryDateGPSCheckin": "aaaa-mm-ddThh:mm:ss.fffZ",
  "exitDateGPSCheckin": "aaaa-mm-ddThh:mm:ss.fffZ",
  "surveysInfo": {
    "expected": 0,
    "completed": 0,
    "pending": 0,
    "allSurveysAnswereds": true
  },
  "totalPhotosTaken": 0,
  "visitDurationCheckinManual": 0,
  "visitDurationCheckinGPS": 0,
  "visitDurationPlanned": 0,
  "delayEntryManual": 0,
  "delayEntryGPS": 0,
  "totalSurveyTime": 0,
  "tasksNotCompletedReasons": "string",
  "notCompletedTasksStatus": 0,
  "updatedAt": "aaaa-mm-ddThh:mm:ss.fffZ",
  "updatedAtMillis": 0,
  "deleted": true
}
```

***

## ❗ Códigos de Erro Comuns

| Código | Significado              |
| ------ | ------------------------ |
| 400    | Requisição malformada    |
| 401    | Não autorizado           |
| 404    | Recurso não encontrado   |
| 500    | Erro interno do servidor |

***

## 📦 Exemplos de Requisição

### 🔹 cURL

```bash
curl -X GET "https://SeuDominio.involves.com/v1/123/visit/sync/timestamp/1713800000000?size=50&count=true" \
  -H "Authorization: Bearer {seu_token_aqui}"
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/visit/sync/timestamp/1713800000000?size=50&count=true", {
  method: "GET",
  headers: {
    "Authorization": "Bearer {seu_token_aqui}"
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

### 🔹 Python (requests)

```python
import requests

url = "https://SeuDominio.involves.com/v1/123/visit/sync/timestamp/1713800000000"
params = {
  "size": 50,
  "count": "true"
}
headers = {
  "Authorization": "Bearer {seu_token_aqui}"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### 🔹 Node.js (axios)

```javascript
const axios = require("axios");

const url = "https://SeuDominio.involves.com/v1/123/visit/sync/timestamp/1713800000000";
const params = {
  size: 50,
  count: true
};
const headers = {
  Authorization: "Bearer {seu_token_aqui}"
};

axios.get(url, { headers, params })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
