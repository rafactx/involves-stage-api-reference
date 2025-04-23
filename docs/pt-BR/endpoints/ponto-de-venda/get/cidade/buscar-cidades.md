---
description: >-
  Retorna uma lista de cidades de acordo com o parâmetro enviado (stateId,
  stateIsoCode ou name).
---

# Buscar Cidades

`GET /v1/city/find`

***

## 📥 Parâmetros

| Nome           | Tipo    | Local | Obrigatório | Descrição       |
| -------------- | ------- | ----- | ----------- | --------------- |
| `stateId`      | integer | query | ❌ não       | ID do estado    |
| `stateIsoCode` | string  | query | ❌ não       | Sigla do estado |
| `name`         | string  | query | ❌ não       | Nome da cidade  |

***

## ✅ Respostas

### `200 OK` – Lista de cidades retornada com sucesso

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
  --url 'https://api.involves.com/v1/city/find?name=Florianópolis&stateIsoCode=SC' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/city/find?name=Florianópolis&stateIsoCode=SC', {
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
  "https://api.involves.com/v1/city/find",
  params={"name": "Florianópolis", "stateIsoCode": "SC"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/city/find', {
  params: { name: "Florianópolis", stateIsoCode: "SC" },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
