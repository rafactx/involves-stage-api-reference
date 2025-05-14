---
description: Retorna uma lista de regionais de acordo com os filtros enviados.
---

# Buscar Regionais (Find) ⚠️

⚠️ Este endpoint está descontinuado. Utilize a versão paginada `GET /v3/environments/{environmentId}/regionals` sempre que possível.

> 🔗 `GET /v1/{environmentId}/region/find`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
| --------------- | ------- | ----- | ----------- | ---------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `name`          | string  | query | ❌ não       | Nome da regional |


## ✅ Respostas

### `200 OK` – Lista de regionais retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "macroRegion": {
    "id": 0,
    "name": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Regional V1

| Campo         | Tipo    | Descrição                |
| ------------- | ------- | ------------------------ |
| `id`          | integer | ID da regional           |
| `name`        | string  | Nome da regional         |
| `macroRegion` | objeto  | Objeto da macrorregional |

### Macroregional V1

| Campo  | Tipo    | Descrição              |
| ------ | ------- | ---------------------- |
| `id`   | integer | ID da macrorregional   |
| `name` | string  | Nome da macrorregional |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/region/find?name=Sul' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/region/find?name=Sul', {
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
  "https://{dominio}.involves.com/v1/123/region/find",
  params={"name": "Sul"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/region/find', {
  params: { name: "Sul" },
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

`https://{dominio}.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Regional não encontrada              |
| 💥 `500`  | Erro interno no servidor             |
