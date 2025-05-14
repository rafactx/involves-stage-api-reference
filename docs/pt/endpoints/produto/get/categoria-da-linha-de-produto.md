---
description: Retorna a categoria da linha de produto de acordo com o ID especificado.
---

# Categoria da Linha de Produto ⚠️

⚠️ _Este endpoint está obsoleto (Deprecated)_

> 🔗 `GET /v1/{environmentId}/productlinecategory/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                           |
|------------------|---------|--------|--------------|--------------------------------------|
| `environmentId` | integer | path   | ✅ sim       | ID do ambiente                       |
| `id`            | integer | path   | ✅ sim       | ID da categoria da linha de produto  |


## ✅ Respostas

### `200 OK` – Categoria da linha de produto retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "supercategory": {
    "id": 0,
    "name": "string"
  },
  "updatedAt": "2025-04-22T19:44:44.837Z",
  "deleted": true
}
```

### `401 Unauthorized` – Não autorizado

```json
{
  "error": "Unauthorized",
  "message": "Token inválido ou ausente."
}
```

### `404 Not Found` – Categoria não encontrada

```json
{
  "error": "Not Found",
  "message": "Categoria de linha de produto não localizada."
}
```


## 🧬 Esquema de Resposta

### Category V1

| Campo         | Tipo      | Descrição                       |
|---------------|-----------|----------------------------------|
| `id`          | integer   | ID da categoria                 |
| `name`        | string    | Nome da categoria               |
| `supercategory` | objeto  | Supercategoria relacionada (id, name) |
| `updatedAt`   | datetime  | Data da última atualização      |
| `deleted`     | boolean   | Foi excluída?                   |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v1/123/productlinecategory/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v1/123/productlinecategory/456', {
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
  "https://SeuDominio.involves.com/v1/123/productlinecategory/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v1/123/productlinecategory/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na URL.

Exemplo: se a URL for `https://suaempresa.involves.com`, utilize `suaempresa`.

A chamada correta seria:

`https://suaempresa.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                                       |
|--------|-------------------------------------------------|
| 🔐 `401` | Token inválido ou ausente                      |
| 🔍 `404` | Categoria de linha de produto não localizada   |
| 💥 `500` | Erro interno no servidor                       |
