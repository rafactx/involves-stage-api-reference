---
description: >-
  Retorna as supercategorias de produto modificadas após uma data especificada
  em milissegundos.
---

# Supercategorias de Produto

**Endpoint:** `GET /v1/{environmentId}/productlinesupercategory/sync/timestamp/{timestamp}`

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
GET /v1/123/productlinesupercategory/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false
```

***

## ✅ Exemplo de Resposta (200 OK)

**MediaType:** `application/json`

```json
[
  {
    "id": 0,
    "name": "string",
    "updatedAt": "aaaa-mm-ddThh:mm:ss.fffZ",
    "deleted": true
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
curl -X GET "https://SeuDominio.involves.com/v1/123/productlinesupercategory/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false" \
  -H "Authorization: Bearer {seu_token_aqui}"
```

### 🔹 JavaScript (Fetch)

```javascript
fetch("https://SeuDominio.involves.com/v1/123/productlinesupercategory/sync/timestamp/1713800000000?size=50&count=true&ignoreExclude=false", {
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

url = "https://SeuDominio.involves.com/v1/123/productlinesupercategory/sync/timestamp/1713800000000"
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

const url = "https://SeuDominio.involves.com/v1/123/productlinesupercategory/sync/timestamp/1713800000000";
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
