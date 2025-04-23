---
description: Salva um novo SKU vinculado à linha de produto.
---

# Criar SKU

### 🔗 Endpoint

`POST /v1/{environmentId}/sku`\


### 📥 Parâmetros de Caminho

| Nome          | Tipo    | Obrigatório | Descrição      |
| ------------- | ------- | ----------- | -------------- |
| environmentId | integer | ✅ Sim       | ID do ambiente |

***

### 📦 Corpo da Requisição

| Nome            | Tipo    | Obrigatório | Descrição                     |
| --------------- | ------- | ----------- | ----------------------------- |
| name            | string  | ✅ Sim       | Nome do SKU                   |
| productLineId   | integer | ✅ Sim       | ID da linha de produto        |
| active          | boolean | ❌ Não       | Indica se o SKU está ativo    |
| externalCode    | string  | ❌ Não       | Código externo                |
| barCode         | string  | ❌ Não       | Código de barras              |
| integrationCode | string  | ❌ Não       | Código de integração          |
| customField1-10 | string  | ❌ Não       | Campos customizáveis (até 10) |

***

### 🧬 Esquema da Requisição

```json
{
  "name": "string",
  "productLineId": 0,
  "active": true,
  "externalCode": "string",
  "barCode": "string",
  "integrationCode": "string",
  "customField1": "string",
  "customField2": "string",
  "customField3": "string",
  "customField4": "string",
  "customField5": "string",
  "customField6": "string",
  "customField7": "string",
  "customField8": "string",
  "customField9": "string",
  "customField10": "string"
}
```

***

### ✅ Exemplo de Resposta

```json
{
  "id": 0,
  "name": "string",
  "productLine": {
    "id": 0,
    "name": "string"
  },
  "active": true,
  "deleted": true,
  "customFields": [
    {
      "name": "string",
      "value": "string",
      "index": 0,
      "visibleAtMobile": true,
      "searchable": true
    }
  ],
  "updatedAt": "2025-04-22T20:25:58.829Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T20:25:58.829Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```

***

### ❌ Erros Comuns

| Código | Mensagem                 | Descrição                                |
| ------ | ------------------------ | ---------------------------------------- |
| 400    | Parâmetros inválidos     | O corpo da requisição está malformado    |
| 401    | Não autorizado           | Falta de token ou token inválido         |
| 404    | Recurso não encontrado   | Linha de produto ou ambiente inexistente |
| 500    | Erro interno do servidor | Ocorreu um erro inesperado no servidor   |

***

### 📘 Exemplo de Requisição

#### cURL

```bash
curl -X POST https://SeuDominio.involves.com/v1/123/sku \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Novo SKU",
    "productLineId": 456,
    "active": true
  }'
```

#### JavaScript (Fetch)

```js
fetch('https://SeuDominio.involves.com/v1/123/sku', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Novo SKU",
    productLineId: 456,
    active: true
  })
});
```

#### Python (requests)

```python
import requests

url = "https://SeuDominio.involves.com/v1/123/sku"
payload = {
  "name": "Novo SKU",
  "productLineId": 456,
  "active": True
}
response = requests.post(url, json=payload)
print(response.json())
```

#### Node.js (axios)

```js
const axios = require('axios');

axios.post('https://SeuDominio.involves.com/v1/123/sku', {
  name: "Novo SKU",
  productLineId: 456,
  active: true
})
.then(response => {
  console.log(response.data);
});
```
