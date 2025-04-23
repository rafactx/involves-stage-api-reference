---
description: Retorna uma rede de acordo com o seu ID.
---

# Buscar Rede por ID

`GET /v3/chains/{chainId}`

***

## 📥 Parâmetros

| Nome      | Tipo    | Local | Obrigatório | Descrição  |
| --------- | ------- | ----- | ----------- | ---------- |
| `chainId` | integer | path  | ✅ sim       | ID da rede |

***

## ✅ Respostas

### `200 OK` – Rede retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "code": "string"
}
```

***

## 🧬 Esquema de Resposta

### Chain

| Campo  | Tipo    | Descrição      |
| ------ | ------- | -------------- |
| `id`   | integer | ID da rede     |
| `name` | string  | Nome da rede   |
| `code` | string  | Código da rede |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/chains/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/chains/456', {
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
  "https://api.involves.com/v3/chains/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/chains/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
