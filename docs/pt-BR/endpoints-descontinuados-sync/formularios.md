---
description: >-
  Retorna os formulários modificados após uma data especificada em
  milissegundos.
---

# Formulários

**Endpoint**

&#x20;`GET /v1/{environmentId}/form/sync/timestamp/{timestamp}`\
🔧 Parâmetros

| Nome          | Descrição                                               | Tipo    | Local | Obrigatório | Valor Padrão |
| ------------- | ------------------------------------------------------- | ------- | ----- | ----------- | ------------ |
| environmentId | ID do ambiente                                          | integer | path  | Sim         | -            |
| timestamp     | Data em milissegundos utilizada como início da consulta | integer | path  | Sim         | -            |
| size          | Número de registros a serem listados                    | integer | query | Não         | 50           |
| count         | Indica se deve retornar o número estimado de páginas    | boolean | query | Não         | -            |
| ignoreExclude | Indica se deve ignorar as marcas excluídas              | boolean | query | Não         | -            |

***

## 📘 Exemplo de Requisição

```
GET /v1/123/form/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false
```

***

## ✅ Exemplo de Resposta (200 OK)

**MediaType:** `application/json`

```json
[
  {
    "id": 0,
    "name": "string",
    "formFlow": {
      "id": 0,
      "name": "string",
      "flowType": "string"
    },
    "description": "string",
    "formPurpose": "string",
    "alternativeLabel": "string",
    "brandRestriction": "string",
    "active": true,
    "activeFieldTeam": true,
    "photoRequired": true,
    "checkinRequired": true,
    "maxHoursToApproval": 0,
    "multipleItemSelectionAllowed": true,
    "anyUserGroupCanApprove": true,
    "displayItemPhoto": true,
    "barcodeValidationEnabled": true,
    "informativeFieldsEnabled": true,
    "pointOfSaleRequired": true,
    "updatedAt": 0,
    "updatedAtMillis": 0,
    "deleted": true,
    "version": 0,
    "formFields": [
      {
        "id": 0,
        "information": {
          "id": 0,
          "label": "string",
          "alternativeLabel": "string",
          "informationType": "string",
          "relatedTo": "string",
          "firstItemSelectedByDefault": true,
          "maxSize": 0,
          "minSize": 0,
          "deleted": true,
          "informationOptions": [
            {
              "id": 0,
              "value": "string",
              "score": 0.0,
              "order": 0
            }
          ],
          "fieldTemplate": null
        },
        "order": 0,
        "deleted": true,
        "required": true,
        "hidden": true,
        "system": true,
        "displayItemPhoto": true,
        "informative": true,
        "key": "string",
        "fieldDependencies": [
          {
            "id": 0,
            "targetFormFieldId": 0,
            "actionOnTarget": "string",
            "triggerValue": "string"
          }
        ],
        "fieldValidations": [
          {
            "id": 0,
            "brandRestriction": "string",
            "dateRestriction": null,
            "updatedAt": "aaaa-mm-ddThh:mm:ss",
            "minValue": 0.0,
            "maxValue": 0.0,
            "outRangeValueEnabled": true,
            "brandId": 0,
            "productId": 0,
            "regionId": 0,
            "productLineId": 0,
            "productCategoryId": 0,
            "pointOfSaleChannelId": 0,
            "pointOfSaleTypeId": 0,
            "pointOfSaleProfileId": 0,
            "bannerId": 0,
            "chainId": 0,
            "macroRegionalId": 0
          }
        ]
      }
    ],
    "productLineSupercategories": [
      {
        "id": 0,
        "name": "string",
        "updatedAt": "aaaa-mm-ddThh:mm:ss",
        "deleted": true
      }
    ],
    "userGroupsEdition": [
      {
        "id": 0,
        "name": "string",
        "hierarchyLevel": 0
      }
    ],
    "userGroupsAnswer": [
      {
        "id": 0,
        "name": "string",
        "hierarchyLevel": 0
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
curl -X GET "https://SeuDominio.involves.com/v1/123/form/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false" \
  -H "Authorization: Bearer {seu_token_aqui}"
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/form/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false", {
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

url = "https://SeuDominio.involves.com/v1/123/form/sync/timestamp/1713800000000"
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

const url = "https://SeuDominio.involves.com/v1/123/form/sync/timestamp/1713800000000";
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

***

