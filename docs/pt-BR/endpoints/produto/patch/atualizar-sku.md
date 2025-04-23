---
description: Atualiza propriedades específicas de um SKU no ambiente informado.
---

# Atualizar SKU

### 🔗 Endpoint

`PATCH /v1/{environmentId}/sku/{id}`\


### 📥 Parâmetros de Caminho

| Nome          | Tipo    | Obrigatório | Descrição      |
| ------------- | ------- | ----------- | -------------- |
| environmentId | integer | ✅ Sim       | ID do ambiente |
| id            | integer | ✅ Sim       | ID do SKU      |

***

### 📦 Corpo da Requisição

| Nome   | Tipo    | Obrigatório | Descrição                  |
| ------ | ------- | ----------- | -------------------------- |
| active | boolean | ✅ Sim       | Indica se o SKU está ativo |

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
  "updatedAt": "2025-04-22T21:05:46.729Z",
  "updatedAtMillis": 0,
  "photoUpdatedAt": "2025-04-22T21:05:46.729Z",
  "barCode": "string",
  "externalCode": "string",
  "integrationCode": "string"
}
```

***

### ❌ Erros Comuns

| Código | Mensagem                 | Descrição                              |
| ------ | ------------------------ | -------------------------------------- |
| 400    | Parâmetros inválidos     | O corpo da requisição está malformado  |
| 401    | Não autorizado           | Falta de token ou token inválido       |
| 404    | Recurso não encontrado   | SKU ou ambiente inexistente            |
| 500    | Erro interno do servidor | Ocorreu um erro inesperado no servidor |

***

### 📘 Exemplo de Requisição

#### cURL

```bash
curl -X PATCH https://SeuDominio.involves.com/v1/123/sku/456 \
  -H "Content-Type: application/json" \
  -d '{ "active": true }'
```

#### JavaScript (Fetch)

```js
fetch('https://SeuDominio.involves.com/v1/123/sku/456', {
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

url = "https://SeuDominio.involves.com/v1/123/sku/456"
payload = { "active": True }
response = requests.patch(url, json=payload)
print(response.json())
```

#### Node.js (axios)

```js
const axios = require('axios');

axios.patch('https://SeuDominio.involves.com/v1/123/sku/456', {
  active: true
})
.then(response => {
  console.log(response.data);
});
```
