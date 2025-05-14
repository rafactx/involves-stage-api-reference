---
description: Retorna uma lista paginada de marcas cadastradas em um ambiente.
---

# 🧾 Listar Marcas

> 🔗 `GET /v3/environments/{environmentId}/brands`


## 📥 Parâmetros

| Nome           | Tipo    | Local  | Obrigatório | Descrição                        |
|----------------|---------|--------|-------------|----------------------------------|
| `environmentId`| integer | path   | ✅ sim       | ID do ambiente                   |
| `page`         | integer | query  | ❌ não       | Número da página (default: 1)    |
| `size`         | integer | query  | ❌ não       | Itens por página (default: 100) |
| `name`         | string  | query  | ❌ não       | Nome da marca                    |


## ✅ Respostas

### `206 Partial Content` – Lista de marcas retornada com sucesso

::: details Clique para ver o código de resposta
```json
[
  {
    "id": 0,
    "name": "string",
    "regionals": {
      "id": 0,
      "_link": "string"
    }
  }
]
```
:::


## 🧬 Esquema de Resposta

::: details Brand

| Campo       | Tipo    | Descrição                        |
|-------------|---------|----------------------------------|
| `id`        | integer | ID da marca                      |
| `name`      | string  | Nome da marca                    |
| `regionals` | objeto  | Link para regionais associadas   |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/brands?page=1&size=50' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/brands?page=1&size=50', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v3/environments/123/brands",
  params={"page": 1, "size": 50},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/brands', {
  params: { page: 1, size: 50 },
  headers: {
    Authorization: 'Bearer {seu_token}'
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

```text
https://{dominio}.involves.com/v3/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Marca não encontrada                 |
| 💥 `500`  | Erro interno no servidor             |
