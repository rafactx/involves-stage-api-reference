---
description: Retorna um ponto de venda de acordo com o seu ID.
---

# 🏬 Buscar Ponto de Venda por ID

> 🔗 `GET /v3/environments/{environmentId}/pointofsales/{pointOfSaleId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `pointOfSaleId` | integer | path  | ✅ sim       | ID do ponto de venda |


## ✅ Respostas

### `200 OK` – Ponto de venda retornado com sucesso

```json
{
  "id": 0,
  "pointOfSaleBaseId": 0,
  "name": "string",
  "legalBusinessName": "string",
  "tradeName": "string",
  "code": "string",
  "companyRegistrationNumber": "string",
  "phone": "string",
  "fax": "string",
  "storeNumber": "string",
  "billings": 0,
  "salesVolume": 0,
  "managerName": "string",
  "managerBirthday": "2025-04-22",
  "amountCheckouts": 0,
  "active": true,
  "macroregional": {
    "id": 0,
    "_link": "string"
  },
  "regional": {
    "id": 0,
    "_link": "string"
  },
  "banner": {
    "id": 0,
    "_link": "string"
  },
  "type": {
    "id": 0,
    "_link": "string"
  },
  "profile": {
    "id": 0,
    "_link": "string"
  },
  "channel": {
    "id": 0,
    "_link": "string"
  },
  "shoppingCenter": {
    "id": 0,
    "_link": "string"
  },
  "address": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

::: details Point of Sale

Este schema representa um ponto de venda com seus dados principais (nome, CNPJ, gerente, telefone, etc.) e referências para entidades associadas:

- `macroregional`, `regional`, `banner`, `type`, `profile`, `channel`, `shoppingCenter`, `address`

Todos os objetos aninhados são retornados com estrutura `{ id, _link }`, indicando o ID da entidade e o link para sua consulta detalhada.

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/pointofsales/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/pointofsales/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v3/environments/123/pointofsales/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/pointofsales/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
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

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                             |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                   |
| 🔐 `401`  | **Não autenticado**                   |
| 🚫 `403`  | Acesso negado                         |
| 🔍 `404`  | Ponto de venda não encontrado         |
| 💥 `500`  | Erro interno no servidor              |
