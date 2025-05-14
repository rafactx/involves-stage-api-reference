---
description: >-
  Retorna os pontos de venda modificados após uma data especificada em
  milissegundos.
---

# Pontos de Venda

**Endpoint:**

&#x20;`GET /v1/{environmentId}/pointofsale/sync/timestamp/{timestamp}`

***

## 🔧 Parâmetros

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
GET /v1/123/pointofsale/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false
```

***

## ✅ Exemplo de Resposta (200 OK)

**MediaType:** `application/json`

```json
[
    {
        "id": 0,
        "name": "string",
        "enabled": true,
        "chain": {
            "id": 0,
            "name": "string",
            "chainGroup": {
                "id": 0,
                "name": "string",
                "chainCode": "string"
            }
        },
        "pointOfSaleChannel": {
            "id": 0,
            "name": "string"
        },
        "code": "string",
        "companyRegistrationNumber": "string",
        "companyName": "string",
        "phone": "string",
        "shoppingCenter": {
            "id": 0,
            "name": "string",
            "environment": {
                "id": 0,
                "name": "string"
            }
        },
        "address": {
            "id": 0,
            "city": {
                "id": 0,
                "name": "string",
                "state": {
                    "id": 0,
                    "country": {
                        "countryCode": "string",
                        "name": "string",
                        "keyName": "string"
                    },
                    "name": "string",
                    "stateIsoCode": "string"
                }
            },
            "neighborhood": "string",
            "address": "string",
            "number": "string",
            "complement": "string",
            "latitude": 0,
            "longitude": 0,
            "zipCode": "string"
        },
        "region": {
            "id": 0,
            "name": "string",
            "macroRegion": {
                "id": 0,
                "name": "string"
            }
        },
        "pointOfSaleType": {
            "id": 0,
            "name": "string"
        },
        "pointOfSaleProfile": {
            "id": 0,
            "name": "string"
        },
        "customFields": [
            {
                "name": "string",
                "value": "string",
                "index": 0,
                "visibleAtMobile": true,
                "searchable": true
            }
        ],
        "deleted": true,
        "productLineMixMini": {
            "id": 0,
            "name": "string",
            "allProductLines": true,
            "updatedAtMillis": 0,
            "updatedAt": "aaaa-mm-ddThh:mm:ss.fffZ"
        },
        "disabledReason": 0,
        "disabledNote": "string",
        "pointOfSaleBaseId": 0
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
curl -X GET "https://SeuDominio.involves.com/v1/123/pointofsale/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false" \
  -H "Authorization: Bearer {seu_token_aqui}"
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/pointofsale/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false", {
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

url = "https://SeuDominio.involves.com/v1/123/pointofsale/sync/timestamp/1713800000000"
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

const url = "https://SeuDominio.involves.com/v1/123/pointofsale/sync/timestamp/1713800000000";
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
