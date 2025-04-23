---
description: >-
  Retorna uma lista de regionais com suporte a filtros por nome, marca, linha de
  produto e colaborador.
---

# Listar Regionais

`GET /v3/environments/{environmentId}/regionals`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                       |
| --------------- | ------- | ----- | ----------- | ------------------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente                  |
| `page`          | integer | query | ❌ não       | Página da listagem (default: 1) |
| `size`          | integer | query | ❌ não       | Itens por página (default: 100) |
| `name`          | string  | query | ❌ não       | Nome da regional                |
| `brandId`       | integer | query | ❌ não       | ID de uma marca                 |
| `productLineId` | integer | query | ❌ não       | ID de uma linha de produto      |
| `employeeId`    | integer | query | ❌ não       | ID de um colaborador            |

***

## ✅ Respostas

### `206 Partial Content` – Lista de regionais retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string",
    "macroregional": {
      "id": 0,
      "_link": "string"
    }
  }
]
```

***

## 🧬 Esquema de Resposta

### Regional

| Campo           | Tipo    | Descrição                        |
| --------------- | ------- | -------------------------------- |
| `id`            | integer | ID da regional                   |
| `name`          | string  | Nome da regional                 |
| `macroregional` | objeto  | Link da macrorregional associada |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/regionals?page=1&size=100&name=Sul' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/regionals?page=1&size=100&name=Sul', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v3/environments/123/regionals",
  params={"page": 1, "size": 100, "name": "Sul"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/regionals', {
  params: { page: 1, size: 100, name: "Sul" },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
