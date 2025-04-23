---
description: >-
  Altera propriedades específicas de uma linha de produto no ambiente
  especificado.
---

# Atualizar Linha de Produto

### 🔗 Endpoint

`PATCH /v1/{environmentId}/productline/{id}`\


### 📥 Parâmetros de Caminho

| Nome          | Tipo    | Obrigatório | Descrição                               |
| ------------- | ------- | ----------- | --------------------------------------- |
| environmentId | integer | ✅ Sim       | Identificador do ambiente               |
| id            | integer | ✅ Sim       | ID da linha de produto a ser atualizada |

***

### 📦 Corpo da Requisição

| Nome   | Tipo    | Obrigatório | Descrição                               |
| ------ | ------- | ----------- | --------------------------------------- |
| active | boolean | ✅ Sim       | Indica se a linha de produto está ativa |

***

### 🧬 Esquema da Requisição

```json
{
  "active": true
}
```

***

### ✅ Exemplo de Resposta

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
  "updatedAt": "2025-04-22T20:25:58.826Z",
  "productLineType": "CUSTOMER_PRODUCTLINE",
  "deleted": true,
  "photoLocation": "string",
  "photoUpdatedAt": "2025-04-22T20:25:58.826Z",
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

### ❌ Erros Comuns

| Código | Mensagem                 | Descrição                              |
| ------ | ------------------------ | -------------------------------------- |
| 400    | Parâmetros inválidos     | O corpo da requisição está malformado  |
| 401    | Não autorizado           | Falta de token ou token inválido       |
| 404    | Recurso não encontrado   | ID de ambiente ou linha inexistente    |
| 500    | Erro interno do servidor | Ocorreu um erro inesperado no servidor |

***

### 📘 Exemplo de Requisição

#### cURL

```bash
curl -X PATCH https://SeuDominio.involves.com/v1/123/productline/456 \
  -H "Content-Type: application/json" \
  -d '{ "active": true }'
```

#### JavaScript (Fetch)

```js
fetch('https://SeuDominio.involves.com/v1/123/productline/456', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    active: true
  })
});
```

#### Python (requests)

```python
import requests

url = "https://SeuDominio.involves.com/v1/123/productline/456"
payload = { "active": True }
response = requests.patch(url, json=payload)
print(response.json())
```

#### Node.js (axios)

```js
const axios = require('axios');

axios.patch('https://SeuDominio.involves.com/v1/123/productline/456', {
  active: true
})
.then(response => {
  console.log(response.data);
});
```
