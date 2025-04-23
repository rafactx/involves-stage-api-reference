---
description: Retorna uma lista de perfis de pontos de venda de acordo com o ambiente.
---

# Listar Perfis de Pontos de Venda

`GET /v1/{environmentId}/pointofsaleprofile/find`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                 |
| --------------- | ------- | ----- | ----------- | ------------------------- |
| `environmentId` | integer | path  | ✅ sim       | Identificador do ambiente |

***

## ✅ Respostas

### `200 OK` – Lista de perfis de pontos de venda retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```

***

## 🧬 Esquema de Resposta

### Profile Old POS V1

| Campo  | Tipo    | Descrição                        |
| ------ | ------- | -------------------------------- |
| `id`   | integer | ID do perfil do ponto de venda   |
| `name` | string  | Nome do perfil do ponto de venda |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/pointofsaleprofile/find' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/pointofsaleprofile/find', {
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
  "https://api.involves.com/v1/123/pointofsaleprofile/find",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/pointofsaleprofile/find', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
