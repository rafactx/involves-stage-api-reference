---
description: Altera propriedades específicas de um ponto de venda.
---

# Alterar Propriedades de um PDV

> 🔗 `PATCH /v1/{environmentId}/pointofsale/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |


## 📨 Corpo da Requisição (application/json)

```json
{
  "active": true,
  "disabledReason": 1,
  "disabledNote": "PDV fechado temporariamente",
  "invalid": false
}
```


## 🧬 Esquema da Requisição

### Patch Point of Sale V1

| Campo            | Tipo    | Descrição                                      |
| ---------------- | ------- | ---------------------------------------------- |
| `active`         | boolean | Ativa ou inativa o ponto de venda              |
| `disabledReason` | integer | Código do motivo de desativação (1 a 8)        |
| `disabledNote`   | string  | Texto livre explicando o motivo de desativação |
| `invalid`        | boolean | Define se o PDV é inválido                     |


## ✅ Respostas

### `200 OK` – Ponto de venda alterado com sucesso

```json
{
  "id": 0,
  "name": "Supermercado Padrão",
  "enabled": true,
  "disabledReason": "string",
  "disabledNote": "PDV fechado temporariamente"
}
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PATCH \
  --url 'https://{dominio}.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "active": true,
    "disabledReason": 1,
    "disabledNote": "PDV fechado temporariamente",
    "invalid": false
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/pointofsale/456', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    active: true,
    disabledReason: 1,
    disabledNote: "PDV fechado temporariamente",
    invalid: false
  })
})
  .then(res => res.json())
  .then(console.log);
```

```python [🔵 Python]
import requests

response = requests.patch(
  "https://{dominio}.involves.com/v1/123/pointofsale/456",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "active": True,
    "disabledReason": 1,
    "disabledNote": "PDV fechado temporariamente",
    "invalid": False
  }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.patch('https://{dominio}.involves.com/v1/123/pointofsale/456', {
  active: true,
  disabledReason: 1,
  disabledNote: "PDV fechado temporariamente",
  invalid: false
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
| 🔴 `400`  | Requisição inválida                      |
| 🔐 `401`  | **Não autenticado**                      |
| 🚫 `403`  | Acesso negado                            |
| 🔍 `404`  | Ponto de venda não encontrado            |
| 💥 `500`  | Erro interno no servidor                 |
