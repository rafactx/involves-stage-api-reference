---
description: Retorna uma macrorregional de acordo com o seu ID.
---

# Buscar Macrorregional por ID

`GET /v3/environments/{environmentId}/macroregionals/{macroregionalId}`

***

## 📥 Parâmetros

| Nome              | Tipo    | Local | Obrigatório | Descrição            |
| ----------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId`   | integer | path  | ✅ sim       | ID do ambiente       |
| `macroregionalId` | integer | path  | ✅ sim       | ID da macrorregional |

***

## ✅ Respostas

### `200 OK` – Macrorregional retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```

***

## 🧬 Esquema de Resposta

### Macroregional

| Campo  | Tipo    | Descrição              |
| ------ | ------- | ---------------------- |
| `id`   | integer | ID da macrorregional   |
| `name` | string  | Nome da macrorregional |

### 📘 Exemplo de requisição

````tabs
tabsCopiarEditar```bash [🟢 cURL]
curl --request GET \\
  --url 'https://api.involves.com/v3/environments/123/macroregionals/456' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/macroregionals/456', {
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
  "https://api.involves.com/v3/environments/123/macroregionals/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/macroregionals/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
