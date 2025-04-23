---
description: Retorna uma cidade de acordo com o ID informado.
---

# Buscar Cidade por ID

`GET /v1/city/{id}`

***

## 📥 Parâmetros

| Nome | Tipo    | Local | Obrigatório | Descrição    |
| ---- | ------- | ----- | ----------- | ------------ |
| `id` | integer | path  | ✅ sim       | ID da cidade |

***

## ✅ Respostas

### `200 OK` – Cidade retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "state": {
    "id": 0,
    "country": {
      "countryCode": "BR",
      "name": "Brasil",
      "keyName": "country.brazil"
    },
    "name": "string",
    "stateIsoCode": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### City V1

| Campo   | Tipo    | Descrição        |
| ------- | ------- | ---------------- |
| `id`    | integer | ID da cidade     |
| `name`  | string  | Nome da cidade   |
| `state` | objeto  | Estado associado |

### State V1

| Campo          | Tipo    | Descrição       |
| -------------- | ------- | --------------- |
| `id`           | integer | ID do estado    |
| `name`         | string  | Nome do estado  |
| `stateIsoCode` | string  | Sigla do estado |
| `country`      | objeto  | País associado  |

### Country V1

| Campo         | Tipo   | Exemplo        | Descrição      |
| ------------- | ------ | -------------- | -------------- |
| `countryCode` | string | BR             | Código do país |
| `name`        | string | Brasil         | Nome do país   |
| `keyName`     | string | country.brazil | Nome da chave  |

### 📘 Exemplo de requisição

````tabs
tabsCopiarEditar```bash [🟢 cURL]
curl --request GET \\
  --url 'https://api.involves.com/v1/city/123' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/city/123', {
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
  "https://api.involves.com/v1/city/123",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/city/123', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
