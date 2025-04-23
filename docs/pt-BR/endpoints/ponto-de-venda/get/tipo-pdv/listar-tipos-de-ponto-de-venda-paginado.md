---
description: Retorna uma lista paginada de tipos de pontos de venda.
---

# Listar Tipos de Ponto de Venda (paginado)

`GET /v1/pointofsaletype/find`

***

## 📥 Parâmetros

| Nome   | Tipo    | Local | Obrigatório | Descrição                                |
| ------ | ------- | ----- | ----------- | ---------------------------------------- |
| `size` | integer | query | ❌ não       | Número de itens por página (default: 50) |
| `page` | integer | query | ❌ não       | Página da listagem (default: 1)          |

***

## ✅ Respostas

### `200 OK` – Lista paginada de tipos de pontos de venda retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```

***

## 🧬 Esquema de Resposta

### Type Old POS V1

| Campo  | Tipo    | Descrição                      |
| ------ | ------- | ------------------------------ |
| `id`   | integer | ID do tipo de ponto de venda   |
| `name` | string  | Nome do tipo de ponto de venda |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/pointofsaletype/find?page=1&size=50' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/pointofsaletype/find?page=1&size=50', {
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
  "https://api.involves.com/v1/pointofsaletype/find",
  params={"page": 1, "size": 50},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/pointofsaletype/find', {
  params: { page: 1, size: 50 },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
