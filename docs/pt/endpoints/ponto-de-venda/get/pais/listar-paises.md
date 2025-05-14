---
description: Retorna todos os países cadastrados no sistema.
---

# 🌍 Listar Países

> 🔗 `GET /v1/countries`


## 📥 Parâmetros

Este endpoint não requer parâmetros.


## ✅ Respostas

### `200 OK` – Lista de países retornada com sucesso

```json
[
  {
    "code": "BR",
    "name": "country.brazil",
    "description": "Brasil"
  }
]
```


## 🧬 Esquema de Resposta

::: details Root Country V1

| Campo         | Tipo   | Exemplo        | Descrição              |
| ------------- | ------ | -------------- | ---------------------- |
| `code`        | string | BR             | Código do país         |
| `name`        | string | country.brazil | Nome do país (interno) |
| `description` | string | Brasil         | Descrição do país      |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/countries' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/countries', {
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
  "https://{dominio}.involves.com/v1/countries",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/countries', {
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
| 💥 `500`  | Erro interno no servidor       |
