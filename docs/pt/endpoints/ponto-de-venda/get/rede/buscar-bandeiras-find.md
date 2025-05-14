---
description: >-
  Retorna uma lista de bandeiras de acordo com o parâmetro name. O retorno é
  limitado a no máximo 100 resultados.
---

# Buscar Bandeiras (Find) ⚠️

⚠️ Este endpoint está descontinuado. Utilize a versão paginada `GET /v1/{environmentId}/chain` sempre que possível.

> 🔗 `GET /v1/{environmentId}/chain/find`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                    |
| --------------- | ------- | ----- | ----------- | ---------------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente               |
| `name`          | string  | query | ❌ não       | Nome da bandeira para filtro |


## ✅ Respostas

### `200 OK` – Lista de bandeiras retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "chainGroup": {
    "id": 0,
    "name": "string",
    "chainCode": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Banner V1

| Campo        | Tipo    | Descrição               |
| ------------ | ------- | ----------------------- |
| `id`         | integer | ID da bandeira          |
| `name`       | string  | Nome da bandeira        |
| `chainGroup` | objeto  | Dados da rede associada |

### Chain V1

| Campo       | Tipo    | Descrição      |
| ----------- | ------- | -------------- |
| `id`        | integer | ID da rede     |
| `name`      | string  | Nome da rede   |
| `chainCode` | string  | Código da rede |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/chain/find?name=Super' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/chain/find?name=Super', {
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
  "https://{dominio}.involves.com/v1/123/chain/find",
  params={"name": "Super"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/chain/find', {
  params: { name: "Super" },
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
| 🔍 `404`  | Nenhuma bandeira encontrada          |
| 💥 `500`  | Erro interno no servidor             |
