---
description: Retorna um perfil de acesso de acordo com seu ID.
---

# Perfil de Acesso por ID

`GET /v3/accessprofiles/{id}`

***

## 📥 Parâmetros

| Nome | Tipo    | Local | Obrigatório | Descrição              |
| ---- | ------- | ----- | ----------- | ---------------------- |
| `id` | integer | path  | ✅ sim       | ID do perfil de acesso |

***

## ✅ Respostas

### `200 OK` – Perfil de acesso retornado com sucesso

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "gethierarchyLevel": 0
}
```

***

## 🧬 Esquema de Resposta

### Access Profile

| Campo               | Tipo    | Descrição                                     |
| ------------------- | ------- | --------------------------------------------- |
| `id`                | integer | ID do perfil de acesso                        |
| `name`              | string  | Nome do perfil de acesso                      |
| `description`       | string  | Descrição do perfil de acesso                 |
| `gethierarchyLevel` | integer | Nível de hierarquia (quanto menor, mais alto) |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/accessprofiles/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/accessprofiles/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v3/accessprofiles/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/accessprofiles/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
