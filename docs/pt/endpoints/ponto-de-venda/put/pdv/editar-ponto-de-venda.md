---
description: Edita um ponto de venda com base no ID e ambiente informados.
---

# Editar Ponto de Venda

> 🔗 `PUT /v1/{environmentId}/pointofsale/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |


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
|--------|---------|------------------------|
| `id`   | integer | ID do ponto de venda   |
| `name` | string  | Nome do ponto de venda |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PUT \
  --url 'https://{dominio}.involves.com/v1/123/pointofsale/456' \
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
    "longitude": -48.548,
    "customFields": [{"name": "Segmento", "value": "Alimentar"}],
    "homologated": true
  }'
```

```python [🔵 Python]
import requests

response = requests.put(
  "https://{dominio}.involves.com/v1/123/pointofsale/456",
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

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/pointofsale/456', {
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
    customFields: [{ name: "Segmento", value: "Alimentar" }],
    homologated: true
  })
})
  .then(res => res.json())
  .then(console.log)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.put('https://{dominio}.involves.com/v1/123/pointofsale/456', {
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

:::


::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                                |
|--------|--------------------------------------------|
| 🔴 `400` | Requisição malformada ou campo inválido     |
| 🔐 `401` | **Token inválido ou não informado**         |
| 🚫 `403` | Sem permissão para editar ponto de venda   |
| 🔍 `404` | Ponto de venda não encontrado              |
| 💥 `500` | Erro inesperado no servidor                |
