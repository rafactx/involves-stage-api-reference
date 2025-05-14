---
description: Retorna uma lista de estados com base no código do país.
---

# 🗺️ Listar Estados

> 🔗 `GET /v1/state/find`


## 📥 Parâmetros

| Nome          | Tipo   | Local | Obrigatório | Descrição      |
| ------------- | ------ | ----- | ----------- | -------------- |
| `countryCode` | string | query | ✅ sim       | Código do país |


## ✅ Respostas

### `200 OK` – Lista de estados retornada com sucesso

```json
[
  {
    "id": 0,
    "country": {
      "countryCode": "BR",
      "name": "Brasil",
      "keyName": "country.brazil"
    },
    "name": "string",
    "stateIsoCode": "string"
  }
]
```


## 🧬 Esquema de Resposta

::: details State V1

| Campo          | Tipo    | Descrição       |
| -------------- | ------- | --------------- |
| `id`           | integer | ID do estado    |
| `name`         | string  | Nome do estado  |
| `stateIsoCode` | string  | Sigla do estado |
| `country`      | objeto  | País associado  |

:::

::: details Country V1

| Campo         | Tipo   | Exemplo        | Descrição      |
| ------------- | ------ | -------------- | -------------- |
| `countryCode` | string | BR             | Código do país |
| `name`        | string | Brasil         | Nome do país   |
| `keyName`     | string | country.brazil | Nome da chave  |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/state/find?countryCode=BR' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/state/find?countryCode=BR', {
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
  "https://{dominio}.involves.com/v1/state/find",
  params={"countryCode": "BR"},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/state/find', {
  params: { countryCode: "BR" },
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

| Código | Descrição                      |
|--------|--------------------------------|
| 🔴 `400`  | Requisição inválida            |
| 🔐 `401`  | **Não autenticado**            |
| 🚫 `403`  | Acesso negado                  |
| 🔍 `404`  | Estado não encontrado          |
| 💥 `500`  | Erro interno no servidor       |
