---
description: Salva uma linha de produto.
---

# Linha de Produto

### Método e Endpoint

`POST /v1/{environmentId}/productline`

***

## 📥 Parâmetros

|      Nome     |   Tipo  | Local | Obrigatório |         Descrição         |
| :-----------: | :-----: | :---: | :---------: | :-----------------------: |
| environmentId | integer |  path |     Sim     | Identificador do ambiente |

***

## 🧾 Corpo da Requisição

```json
{
  "name": "string",
  "type": 0,
  "barCode": "string",
  "erpCode": "string",
  "enabled": true,
  "brandName": "string",
  "superCategoryName": "string",
  "categoryName": "string",
  "customFields": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

***

## ✅ Respostas

### 200 - Linha de produto salva com sucesso

```json
{
  "id": 0,
  "name": "string",
  "productCategory": {
    "id": 0,
    "name": "string"
  },
  "brand": {
    "id": 0,
    "name": "string"
  },
  "barCode": "string",
  "externalCode": "string",
  "active": true,
  "approved": true,
  "updatedAt": "2025-04-22T20:20:20.592Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T20:20:20.592Z",
  "skus": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "availabilityRegions": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ]
}
```

***

## 🧬 Esquema da Resposta

* Productline V1
* Category Mini V1
* Brand Mini V1
* SKU Mini V1
* Regional Mini V1
* Custom Field V1

***

## ❌ Respostas de Erro Comuns

| Código |         Descrição        |
| :----: | :----------------------: |
|   400  |    Requisição inválida   |
|   401  |      Não autorizado      |
|   404  |  Recurso não encontrado  |
|   500  | Erro interno do servidor |

***

## 📘 Exemplo de requisição

### cURL

```bash
curl -X POST https://SeuDominio.involves.com/v1/123/productline \
  -H "Content-Type: application/json" \
  -d '{"name":"Produto X","type":0}'
```

### Python (requests)

```python
import requests

response = requests.post(
  "https://SeuDominio.involves.com/v1/123/productline",
  json={"name": "Produto X", "type": 0}
)
print(response.json())
```

### JavaScript (fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/productline", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({"name": "Produto X", "type": 0})
})
.then(response => response.json())
.then(data => console.log(data))
```

### Node.js (axios)

```javascript
const axios = require("axios");

axios.post("https://SeuDominio.involves.com/v1/123/productline", {
  name: "Produto X",
  type: 0
})
.then(response => {
  console.log(response.data);
});
```
