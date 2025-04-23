---
description: Retorna o tipo de ponto de venda especificado.
---

# Buscar Tipo de Ponto de Venda por ID

`GET /v1/pointofsaletype/{id}`

***

## 📥 Parâmetros

| Nome | Tipo    | Local | Obrigatório | Descrição                               |
| ---- | ------- | ----- | ----------- | --------------------------------------- |
| `id` | integer | path  | ✅ sim       | Identificador do tipo de ponto de venda |

***

## ✅ Respostas

### `200 OK` – Tipo de ponto de venda retornado com sucesso

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
  --url 'https://api.involves.com/v1/pointofsaletype/123' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/pointofsaletype/123', {
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
  "https://api.involves.com/v1/pointofsaletype/123",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/pointofsaletype/123', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
