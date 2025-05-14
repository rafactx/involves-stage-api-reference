---
description: Retorna os dados de uma categoria de produto com base em seu ID.
---

# Detalhes da Categoria

> 🔗 `GET /v3/environments/{environmentId}/categories/{categoryId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição       |
|-----------------|---------|--------|--------------|------------------|
| `environmentId` | integer | path   | ✅ sim       | ID do ambiente   |
| `categoryId`    | integer | path   | ✅ sim       | ID da categoria  |


## ✅ Respostas

### `200 OK` – Categoria retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "supercategory": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Category V1

| Campo          | Tipo    | Descrição                      |
|----------------|---------|--------------------------------|
| `id`           | integer | ID da categoria                |
| `name`         | string  | Nome da categoria              |
| `supercategory`| objeto  | Link da supercategoria associada |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/categories/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/categories/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v3/environments/123/categories/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/categories/456', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
})
.then(response => {
  console.log(response.data);
});
```

:::


::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na URL.

Exemplo: se a URL for `https://suaempresa.involves.com`, utilize `suaempresa`.

A chamada correta seria:

`https://suaempresa.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|--------------------------------------------|
| 🔴 `400` | Requisição malformada ou inválida          |
| 🔐 `401` | Não autorizado – token inválido ou ausente |
| 🔍 `404` | Categoria não encontrada                   |
| 💥 `500` | Erro interno no servidor                   |
