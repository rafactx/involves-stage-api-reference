---
description: Retorna uma regional de acordo com o seu ID.
---

# Buscar Regional por ID

`GET /v3/environments/{environmentId}/regionals/{regionalId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `regionalId`    | integer | path  | ✅ sim       | ID da regional |

***

## ✅ Respostas

### `200 OK` – Regional retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "macroregional": {
    "id": 0,
    "_link": "string"
  }
}
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
  --url 'https://api.involves.com/v3/environments/123/regionals/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/regionals/456', {
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
  "https://api.involves.com/v3/environments/123/regionals/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/regionals/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
