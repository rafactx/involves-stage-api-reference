---
description: >
  Retorna uma lista de regionais com suporte a filtros por nome, marca, linha de
  produto e colaborador.
---

# Listar Regionais

> 🔗 `GET /v3/environments/{environmentId}/regionals`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                       |
| --------------- | ------- | ----- | ----------- | ------------------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente                  |
| `page`          | integer | query | ❌ não       | Página da listagem (default: 1) |
| `size`          | integer | query | ❌ não       | Itens por página (default: 100) |
| `name`          | string  | query | ❌ não       | Nome da regional                |
| `brandId`       | integer | query | ❌ não       | ID de uma marca                 |
| `productLineId` | integer | query | ❌ não       | ID de uma linha de produto      |
| `employeeId`    | integer | query | ❌ não       | ID de um colaborador            |


## ✅ Respostas

### `206 Partial Content` – Lista de regionais retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string",
    "macroregional": {
      "id": 0,
      "_link": "string"
    }
  }
]
```


## 🧬 Esquema de Resposta

### Regional V1

| Campo           | Tipo    | Descrição                        |
| --------------- | ------- | -------------------------------- |
| `id`            | integer | ID da regional                   |
| `name`          | string  | Nome da regional                 |
| `macroregional` | objeto  | Link da macrorregional associada |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/regionals?page=1&size=100&name=Sul' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/regionals?page=1&size=100&name=Sul', {
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
  "https://{dominio}.involves.com/v3/environments/123/regionals",
  params={"page": 1, "size": 100, "name": "Sul"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/regionals', {
  params: { page: 1, size: 100, name: "Sul" },
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

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 💥 `500`  | Erro interno no servidor             |
