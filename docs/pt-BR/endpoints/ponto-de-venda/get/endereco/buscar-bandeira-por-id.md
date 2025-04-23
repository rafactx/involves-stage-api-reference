---
description: Retorna uma bandeira de acordo com o seu ID.
---

# Buscar Bandeira por ID

`GET /v3/environments/{environmentId}/banners/{bannerId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `bannerId`      | integer | path  | ✅ sim       | ID da bandeira |

***

## ✅ Respostas

### `200 OK` – Bandeira retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "chain": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### Banner

| Campo   | Tipo    | Descrição              |
| ------- | ------- | ---------------------- |
| `id`    | integer | ID da bandeira         |
| `name`  | string  | Nome da bandeira       |
| `chain` | objeto  | Link da rede associada |

### Link (chain)

| Campo   | Tipo    | Descrição               |
| ------- | ------- | ----------------------- |
| `id`    | integer | ID da rede associada    |
| `_link` | string  | Link da rede no sistema |

### 📘 Exemplo de requisição

````tabs
tabsCopiarEditar```bash [🟢 cURL]
curl --request GET \\
  --url 'https://api.involves.com/v3/environments/123/banners/456' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/banners/456', {
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
  "https://api.involves.com/v3/environments/123/banners/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/banners/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
