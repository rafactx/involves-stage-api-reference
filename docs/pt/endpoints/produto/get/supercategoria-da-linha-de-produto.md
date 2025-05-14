---
description: Retorna os dados da supercategoria de uma linha de produto com base no ID.
---

# 🧾 Supercategoria da Linha de Produto ⚠️

> ⚠️ Este endpoint está obsoleto. Utilize a versão atualizada se disponível.

> 🔗 `GET /v1/{environmentId}/productlinesupercategory/{id}`


## 📥 Parâmetros

| Nome           | Tipo    | Local | Obrigatório | Descrição            |
|----------------|---------|--------|-------------|----------------------|
| `environmentId`| integer | path   | ✅ sim       | ID do ambiente       |
| `id`           | integer | path   | ✅ sim       | ID da supercategoria |


## ✅ Respostas

### `200 OK` – Supercategoria retornada com sucesso

::: details Clique para ver o código de resposta
```json
{
  "id": 0,
  "name": "string",
  "updatedAt": "2025-04-22T19:50:01.106Z",
  "deleted": true
}
```
:::


## 🧬 Esquema de Resposta

::: details Supercategory V1

| Campo       | Tipo     | Descrição                        |
|-------------|----------|----------------------------------|
| `id`        | integer  | ID da supercategoria             |
| `name`      | string   | Nome da supercategoria           |
| `updatedAt` | datetime | Data da última atualização       |
| `deleted`   | boolean  | Indica se foi excluída           |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/productlinesupercategory/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/productlinesupercategory/456', {
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
  "https://{dominio}.involves.com/v1/123/productlinesupercategory/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/productlinesupercategory/456', {
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
https://{dominio}.involves.com/v1/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida ou parâmetros incorretos |
| 🔐 `401`  | **Token ausente ou inválido**        |
| 🔍 `404`  | Supercategoria não encontrada        |
| 💥 `500`  | Erro interno no servidor             |
