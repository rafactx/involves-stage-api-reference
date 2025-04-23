---
description: Edita um ponto de venda com base no ID e ambiente informados.
---

# Editar Ponto de Venda

`PUT /v1/{environmentId}/pointofsale/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Supermercado Ideal Atualizado",
  "chainId": 1,
  "regionId": 1,
  "taxPayerCode": "65487320001",
  "enabled": true,
  "phone": "(48) 99999-0001",
  "companyName": "Super Ideal LTDA",
  "tradingName": "Super Ideal Atualizado",
  "address": "Rua das Laranjeiras",
  "number": "456",
  "neighborhood": "Centro",
  "zipCode": "88000-000",
  "cityId": 10,
  "latitude": -27.5954,
  "longitude": -48.548,
  "customFields": [
    {
      "name": "Segmento",
      "value": "Alimentar"
    }
  ],
  "homologated": true
}
```

> Campos como `chainName` e `regionName` podem ser usados para criar novas entidades caso não existam.

***

## ✅ Respostas

### `200 OK` – Ponto de venda editado com sucesso

```json
{
  "id": 0,
  "name": "Supermercado Ideal Atualizado"
}
```

### Esquema – Point of Sale Mini V1

| Campo  | Tipo    | Descrição              |
| ------ | ------- | ---------------------- |
| `id`   | integer | ID do ponto de venda   |
| `name` | string  | Nome do ponto de venda |

***

## 📘 Exemplo de requisição

***

### 🟢 cURL

```bash
curl --request PUT \
  --url 'https://api.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Supermercado Ideal Atualizado",
    "chainId": 1,
    "regionId": 1,
    "taxPayerCode": "65487320001",
    "enabled": true,
    "phone": "(48) 99999-0001",
    "companyName": "Super Ideal LTDA",
    "tradingName": "Super Ideal Atualizado",
    "address": "Rua das Laranjeiras",
    "number": "456",
    "neighborhood": "Centro",
    "zipCode": "88000-000",
    "cityId": 10,
    "latitude": -27.5954,
    "longitude": -48.5480,
    "customFields": [{"name": "Segmento", "value": "Alimentar"}],
    "homologated": true
  }'
```

***

### 🟡 JavaScript (Fetch)

```js
fetch('https://api.involves.com/v1/123/pointofsale/456', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Supermercado Ideal Atualizado",
    chainId: 1,
    regionId: 1,
    taxPayerCode: "65487320001",
    enabled: true,
    phone: "(48) 99999-0001",
    companyName: "Super Ideal LTDA",
    tradingName: "Super Ideal Atualizado",
    address: "Rua das Laranjeiras",
    number: "456",
    neighborhood: "Centro",
    zipCode: "88000-000",
    cityId: 10,
    latitude: -27.5954,
    longitude: -48.548,
    customFields: [{name: "Segmento", value: "Alimentar"}],
    homologated: true
  })
})
  .then(res => res.json())
  .then(console.log)
```

***

### 🔵 Python (requests)

```python
import requests

response = requests.put(
  "https://api.involves.com/v1/123/pointofsale/456",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Supermercado Ideal Atualizado",
    "chainId": 1,
    "regionId": 1,
    "taxPayerCode": "65487320001",
    "enabled": True,
    "phone": "(48) 99999-0001",
    "companyName": "Super Ideal LTDA",
    "tradingName": "Super Ideal Atualizado",
    "address": "Rua das Laranjeiras",
    "number": "456",
    "neighborhood": "Centro",
    "zipCode": "88000-000",
    "cityId": 10,
    "latitude": -27.5954,
    "longitude": -48.548,
    "customFields": [{"name": "Segmento", "value": "Alimentar"}],
    "homologated": True
  }
)

print(response.json())
```

***

### 🟣 Node.js (axios)

```js
const axios = require('axios');

axios.put('https://api.involves.com/v1/123/pointofsale/456', {
  name: "Supermercado Ideal Atualizado",
  chainId: 1,
  regionId: 1,
  taxPayerCode: "65487320001",
  enabled: true,
  phone: "(48) 99999-0001",
  companyName: "Super Ideal LTDA",
  tradingName: "Super Ideal Atualizado",
  address: "Rua das Laranjeiras",
  number: "456",
  neighborhood: "Centro",
  zipCode: "88000-000",
  cityId: 10,
  latitude: -27.5954,
  longitude: -48.548,
  customFields: [{ name: "Segmento", value: "Alimentar" }],
  homologated: true
}, {
  headers: {
    Authorization: "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  }
}).then(response => {
  console.log(response.data);
});
```
