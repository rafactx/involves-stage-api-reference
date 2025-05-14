---
description: >-
  Retorna uma lista de pontos de venda com dados resumidos e links para
  detalhes.
---

# Listar Pontos de Venda (v3)

> 🔗 `GET /v3/environments/{environmentId}/pointofsales`


## 📥 Parâmetros

| Nome                        | Tipo    | Local | Obrigatório | Descrição                            |
| --------------------------- | ------- | ----- | ----------- | ------------------------------------ |
| `environmentId`             | integer | path  | ✅ sim       | ID do ambiente                       |
| `page`                      | integer | query | ❌ não       | Página da listagem (default: 1)      |
| `size`                      | integer | query | ❌ não       | Quantidade por página (default: 100) |
| `name`                      | string  | query | ❌ não       | Nome do ponto de venda               |
| `companyRegistrationNumber` | string  | query | ❌ não       | CNPJ do PDV (apenas números)         |
| `active`                    | boolean | query | ❌ não       | Filtrar por PDVs ativos              |
| `regionalId`                | integer | query | ❌ não       | ID da regional                       |


## ✅ Respostas

### `206 Partial Content` – Lista de pontos de venda retornada com sucesso

```json
[
  {
    "id": 0,
    "pointOfSaleBaseId": 0,
    "name": "string",
    "legalBusinessName": "string",
    "tradeName": "string",
    "code": "string",
    "companyRegistrationNumber": "string",
    "active": true,
    "details": {
      "id": 0,
      "_link": "string"
    },
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
]
```

> Os campos retornados incluem nomes, CNPJ, status e links para entidades relacionadas como endereço, canal, perfil, tipo e região.


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/pointofsales?page=1&size=100&active=true' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/pointofsales?page=1&size=100&active=true', {
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
  "https://{dominio}.involves.com/v3/environments/123/pointofsales",
  params={"page": 1, "size": 100, "active": "true"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/pointofsales', {
  params: { page: 1, size: 100, active: true },
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

| Código | Descrição                         |
|--------|-----------------------------------|
| 🔴 `400`  | Requisição inválida               |
| 🔐 `401`  | **Não autenticado**               |
| 🚫 `403`  | Acesso negado                     |
| 🔍 `404`  | Ponto de venda(s) não encontrado(s) |
| 💥 `500`  | Erro interno no servidor          |
