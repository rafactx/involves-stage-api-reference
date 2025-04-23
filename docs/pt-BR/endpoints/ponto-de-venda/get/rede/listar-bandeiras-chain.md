# Listar Bandeiras (Chain)

Retorna uma lista paginada de bandeiras, com possibilidade de filtro por nome.

`GET /v1/{environmentId}/chain`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                       |
| --------------- | ------- | ----- | ----------- | ------------------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente                  |
| `page`          | integer | query | ❌ não       | Página da listagem (default: 1) |
| `size`          | integer | query | ❌ não       | Itens por página (default: 100) |
| `name`          | string  | query | ❌ não       | Nome da bandeira para filtro    |

***

## ✅ Respostas

### `200 OK` – Lista de bandeiras retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string",
    "chainGroup": {
      "id": 0,
      "name": "string",
      "chainCode": "string"
    }
  }
]
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
  --url 'https://api.involves.com/v1/123/chain?page=1&size=100&name=Super' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/chain?page=1&size=100&name=Super', {
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
  "https://api.involves.com/v1/123/chain",
  params={"page": 1, "size": 100, "name": "Super"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/chain', {
  params: { page: 1, size: 100, name: "Super" },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
