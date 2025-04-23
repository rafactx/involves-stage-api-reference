---
description: Retorna o endereço de um ponto de venda de acordo com o ID do ponto de venda.
---

# Buscar Endereço do Ponto de Venda

`GET /v3/environments/{environmentId}/pointofsales/{pointOfSaleId}/address`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `pointOfSaleId` | integer | path  | ✅ sim       | ID do ponto de venda |

***

## ✅ Respostas

### `200 OK` – Endereço do ponto de venda retornado com sucesso

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

| Campo          | Tipo    | Descrição               |
| -------------- | ------- | ----------------------- |
| `id`           | integer | ID do endereço          |
| `address`      | string  | Endereço principal      |
| `number`       | string  | Número                  |
| `neighborhood` | string  | Bairro                  |
| `zipCode`      | string  | CEP                     |
| `complement`   | string  | Complemento             |
| `latitude`     | number  | Latitude geográfica     |
| `longitude`    | number  | Longitude geográfica    |
| `cityName`     | string  | Nome da cidade          |
| `stateName`    | string  | Nome do estado          |
| `countryCode`  | string  | Código do país (ex: BR) |

### 📘 Exemplo de requisição

````tabs
tabsCopiarEditar```bash [🟢 cURL]
curl --request GET \\
  --url 'https://api.involves.com/v3/environments/123/pointofsales/456/address' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/pointofsales/456/address', {
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
  "https://api.involves.com/v3/environments/123/pointofsales/456/address",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/pointofsales/456/address', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
