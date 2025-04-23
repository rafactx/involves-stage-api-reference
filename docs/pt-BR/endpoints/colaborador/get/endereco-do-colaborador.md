---
description: Retorna o endereço de um colaborador de acordo com o ID do colaborador.
---

# Endereço do Colaborador

`GET /v3/environments/{environmentId}/employees/{employeeId}/address`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador |

***

## ✅ Respostas

### `200 OK` – Endereço do colaborador retornado com sucesso

```json
{
  "id": 0,
  "address": "string",
  "number": "string",
  "neighborhood": "string",
  "zipCode": "string",
  "complement": "string",
  "latitude": 0,
  "longitude": 0,
  "cityName": "string",
  "stateName": "string",
  "countryCode": "string"
}
```

***

## 🧬 Esquema de Resposta

### Address

| Campo          | Tipo    | Descrição          |
| -------------- | ------- | ------------------ |
| `id`           | integer | ID do endereço     |
| `address`      | string  | Endereço           |
| `number`       | string  | Número do endereço |
| `neighborhood` | string  | Bairro             |
| `zipCode`      | string  | CEP                |
| `complement`   | string  | Complemento        |
| `latitude`     | number  | Latitude           |
| `longitude`    | number  | Longitude          |
| `cityName`     | string  | Nome da cidade     |
| `stateName`    | string  | Nome do estado     |
| `countryCode`  | string  | Código do país     |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/employees/456/address' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/employees/456/address', {
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
  "https://api.involves.com/v3/environments/123/employees/456/address",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/employees/456/address', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
