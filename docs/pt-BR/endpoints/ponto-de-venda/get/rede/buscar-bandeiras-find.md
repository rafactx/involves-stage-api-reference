---
description: >-
  Retorna uma lista de bandeiras de acordo com o parâmetro name. O retorno é
  limitado a no máximo 100 resultados.
---

# Buscar Bandeiras (Find) ⚠️

⚠️ Este endpoint está descontinuado. Utilize a versão paginada `GET /v1/{environmentId}/chain` sempre que possível.

`GET /v1/{environmentId}/chain/find`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                    |
| --------------- | ------- | ----- | ----------- | ---------------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente               |
| `name`          | string  | query | ❌ não       | Nome da bandeira para filtro |

***

## ✅ Respostas

### `200 OK` – Lista de bandeiras retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "chainGroup": {
    "id": 0,
    "name": "string",
    "chainCode": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### Banner V1

| Campo        | Tipo    | Descrição               |
| ------------ | ------- | ----------------------- |
| `id`         | integer | ID da bandeira          |
| `name`       | string  | Nome da bandeira        |
| `chainGroup` | objeto  | Dados da rede associada |

### Chain V1

| Campo       | Tipo    | Descrição      |
| ----------- | ------- | -------------- |
| `id`        | integer | ID da rede     |
| `name`      | string  | Nome da rede   |
| `chainCode` | string  | Código da rede |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/chain/find?name=Super' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/chain/find?name=Super', {
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
  "https://api.involves.com/v1/123/chain/find",
  params={"name": "Super"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/chain/find', {
  params: { name: "Super" },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
