---
description: Retorna todos os países cadastrados no sistema.
---

# Listar Países

`GET /v1/countries`

***

## 📥 Parâmetros

Este endpoint não requer parâmetros.

***

## ✅ Respostas

### `200 OK` – Lista de países retornada com sucesso

```json
{
  "code": "BR",
  "name": "country.brazil",
  "description": "Brasil"
}
```

***

## 🧬 Esquema de Resposta

### Root Country V1

| Campo         | Tipo   | Exemplo        | Descrição              |
| ------------- | ------ | -------------- | ---------------------- |
| `code`        | string | BR             | Código do país         |
| `name`        | string | country.brazil | Nome do país (interno) |
| `description` | string | Brasil         | Descrição do país      |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/countries' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/countries', {
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
  "https://api.involves.com/v1/countries",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/countries', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
