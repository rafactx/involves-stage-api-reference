---
description: Retorna uma lista de estados com base no código do país.
---

# Listar Estados

`GET /v1/state/find`

***

## 📥 Parâmetros

| Nome          | Tipo   | Local | Obrigatório | Descrição      |
| ------------- | ------ | ----- | ----------- | -------------- |
| `countryCode` | string | query | ✅ sim       | Código do país |

***

## ✅ Respostas

### `200 OK` – Lista de estados retornada com sucesso

```json
{
  "id": 0,
  "country": {
    "countryCode": "BR",
    "name": "Brasil",
    "keyName": "country.brazil"
  },
  "name": "string",
  "stateIsoCode": "string"
}
```

***

## 🧬 Esquema de Resposta

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

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/state/find?countryCode=BR' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/state/find?countryCode=BR', {
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
  "https://api.involves.com/v1/state/find",
  params={"countryCode": "BR"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/state/find', {
  params: { countryCode: "BR" },
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
