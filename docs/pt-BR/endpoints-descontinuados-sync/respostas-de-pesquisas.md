---
description: >-
  Retorna as pesquisas e suas respostas modificadas após uma data especificada
  em milissegundos.
---

# Respostas de Pesquisas

**Endpoint:**

&#x20;`GET /v1/{environmentId}/survey/sync/timestamp/{timestamp}`\


***

## 🔧 Parâmetros

| Nome                | Descrição                                               | Tipo    | Local | Obrigatório | Valor Padrão |
| ------------------- | ------------------------------------------------------- | ------- | ----- | ----------- | ------------ |
| environmentId       | ID do ambiente                                          | integer | path  | Sim         | -            |
| timestamp           | Data em milissegundos utilizada como início da consulta | integer | path  | Sim         | -            |
| size                | Número de registros a serem listados                    | integer | query | Não         | 50           |
| count               | Indica se deve retornar o número estimado de páginas    | boolean | query | Não         | -            |
| ignoreExclude       | Indica se deve ignorar as marcas excluídas              | boolean | query | Não         | -            |
| status              | Filtro por status das pesquisas                         | string  | query | Não         | -            |
| assignedTo          | Filtro por ID do colaborador responsável                | integer | query | Não         | -            |
| formId              | Filtro por ID do formulário das pesquisas               | integer | query | Não         | -            |
| pointOfSaleId       | Filtro por ID do ponto de venda das pesquisas           | integer | query | Não         | -            |
| ignoreMobileSurveys | Ignorar as pesquisas criadas no aplicativo              | boolean | query | Não         | -            |

***

## 📘 Exemplo de Requisição

```
GET /v1/123/survey/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false
```

***

## ✅ Exemplo de Resposta (200 OK)

**MediaType:** `application/json`

```json
[
  {
    "id": 0,
    "label": "string",
    "alternativeLabel": "string",
    "itemsSelectionEnabled": true,
    "expirationDate": "aaaa-mm-ddThh:mm:ss.fffZ",
    "updatedAt": "aaaa-mm-ddThh:mm:ss.fffZ",
    "updatedAtMillis": 0,
    "repliedAt": "aaaa-mm-ddThh:mm:ss.fffZ",
    "timeSpent": 0,
    "deleted": true,
    "allImagesSynchronized": true,
    "status": "string",
    "source": "string",
    "approvalStatus": "string",
    "surveyCategory": { "id": 0, "name": "string" },
    "form": { "id": 0, "name": "string" },
    "pointOfSale": { "id": 0, "name": "string" },
    "assignedTo": { "id": 0, "name": "string" },
    "filledBy": { "id": 0, "name": "string" },
    "userApproval": { "id": 0, "name": "string" },
    "productLineSuperCategories": [{ "id": 0, "name": "string" }],
    "productLines": [{ "id": 0, "name": "string" }],
    "skus": [{ "id": 0, "name": "string" }],
    "brands": [{ "id": 0, "name": "string" }],
    "productLineCategories": [{ "id": 0, "name": "string" }],
    "surveyData": [
      {
        "id": 0,
        "value": "string",
        "score": 0,
        "hasWarning": true,
        "warningMessage": "string",
        "wasSelectedOnItemsList": true,
        "edited": true,
        "proccessed": true,
        "outOfRangeValue": true,
        "formField": { "id": 0 },
        "brand": { "id": 0, "name": "string" },
        "sku": { "id": 0, "name": "string" },
        "productLine": { "id": 0, "name": "string" },
        "productLineCategory": { "id": 0, "name": "string" },
        "productLineSupercategory": { "id": 0, "name": "string" },
        "surveyDataImageIds": [0]
      }
    ]
  }
]
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
curl -X GET "https://SeuDominio.involves.com/v1/123/survey/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false" \
  -H "Authorization: Bearer {seu_token_aqui}"
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/survey/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false", {
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

url = "https://SeuDominio.involves.com/v1/123/survey/sync/timestamp/1713800000000"
params = {
  "size": 50,
  "count": "true",
  "ignoreExclude": "false"
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

const url = "https://SeuDominio.involves.com/v1/123/survey/sync/timestamp/1713800000000";
const params = {
  size: 50,
  count: true,
  ignoreExclude: false
};
const headers = {
  Authorization: "Bearer {seu_token_aqui}"
};

axios.get(url, { headers, params })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
