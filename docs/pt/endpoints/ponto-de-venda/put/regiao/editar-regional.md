---
description: Edita os dados de uma regional.
---

# Editar Regional

> 🔗 `PUT /v1/{environmentId}/region/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `id`            | integer | path  | ✅ sim       | ID da regional |


## 📨 Corpo da Requisição (application/json)

```json
{
  "id": 0,
  "name": "Regional Sudeste Atualizada",
  "macroRegionId": 2
}
```

### Esquema – Updated Regional V1

| Campo           | Tipo    | Obrigatório | Descrição                      |
| --------------- | ------- | ----------- | ------------------------------ |
| `id`            | integer | ✅ sim       | ID da regional                 |
| `name`          | string  | ✅ sim       | Nome da regional               |
| `macroRegionId` | integer | ❌ não       | ID da macrorregional associada |


## ✅ Respostas

### `200 OK` – ID da regional editada

```json
0
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PUT \
  --url 'https://{dominio}.involves.com/v1/123/region/456' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": 0,
    "name": "Regional Sudeste Atualizada",
    "macroRegionId": 2
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/region/456', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 0,
    name: "Regional Sudeste Atualizada",
    macroRegionId: 2
  })
})
  .then(res => res.json())
  .then(console.log);
```

```python [🔵 Python]
import requests

response = requests.put(
  "https://{dominio}.involves.com/v1/123/region/456",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "id": 0,
    "name": "Regional Sudeste Atualizada",
    "macroRegionId": 2
  }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.put('https://{dominio}.involves.com/v1/123/region/456', {
  id: 0,
  name: "Regional Sudeste Atualizada",
  macroRegionId: 2
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

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400` | Requisição malformada ou campo inválido |
| 🔐 `401` | **Token inválido ou não informado**     |
| 🚫 `403` | Sem permissão para editar regional     |
| 🔍 `404` | Regional não encontrada                |
| 💥 `500` | Erro inesperado no servidor            |
