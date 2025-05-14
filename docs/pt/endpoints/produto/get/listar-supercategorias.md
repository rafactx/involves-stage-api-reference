---
description: Retorna uma lista paginada de supercategorias cadastradas no ambiente.
---

# 🧾 Listar Supercategorias

> 🔗 `GET /v3/environments/{environmentId}/supercategories`


## 📥 Parâmetros

| Nome           | Tipo    | Local  | Obrigatório | Descrição                   |
|----------------|---------|--------|-------------|-----------------------------|
| `environmentId`| integer | path   | ✅ sim       | ID do ambiente              |
| `name`         | string  | query  | ❌ não       | Nome da supercategoria      |
| `page`         | integer | query  | ❌ não       | Página da listagem          |
| `size`         | integer | query  | ❌ não       | Itens por página (máx: 100) |


## ✅ Respostas

### `206 Partial Content` – Lista de supercategorias retornada com sucesso

::: details Clique para ver o código de resposta
```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```
:::


## 🧬 Esquema de Resposta

::: details Supercategory

| Campo  | Tipo    | Descrição             |
|--------|---------|-----------------------|
| `id`   | integer | ID da supercategoria  |
| `name` | string  | Nome da supercategoria|

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/supercategories?page=1&size=100' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/supercategories?page=1&size=100', {
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
  "https://{dominio}.involves.com/v3/environments/123/supercategories",
  params={"page": 1, "size": 100},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/supercategories', {
  params: { page: 1, size: 100 },
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

| Código | Descrição                                    |
|--------|----------------------------------------------|
| 🔴 `400`  | Requisição inválida ou parâmetros incorretos |
| 🔐 `401`  | **Não autenticado**                         |
| 💥 `500`  | Erro interno no servidor                    |
