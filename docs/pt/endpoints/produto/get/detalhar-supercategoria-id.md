---
description: Retorna uma supercategoria com base no ID especificado para o ambiente.
---

# Detalhar Supercategoria (ID)

> 🔗 `GET /v3/environments/{environmentId}/supercategories/{supercategoryId}`


## 📥 Parâmetros

| Nome              | Tipo    | Local | Obrigatório | Descrição            |
|-------------------|---------|--------|--------------|------------------------|
| `environmentId`   | integer | path   | ✅ sim       | ID do ambiente         |
| `supercategoryId` | integer | path   | ✅ sim       | ID da supercategoria   |


## ✅ Respostas

### `200 OK` – Supercategoria retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```


## 🧬 Esquema de Resposta

### Supercategory V1

| Campo  | Tipo    | Descrição              |
|--------|---------|------------------------|
| `id`   | integer | ID da supercategoria   |
| `name` | string  | Nome da supercategoria |


## 📘 Exemplo de requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/supercategories/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/supercategories/456', {
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
  "https://SeuDominio.involves.com/v3/environments/123/supercategories/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/supercategories/456', {
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

| Código | Descrição                                    |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição inválida ou parâmetros incorretos |
| 🔐 `401` | Token de autenticação ausente ou inválido    |
| 🔍 `404` | Supercategoria não encontrada                |
| 💥 `500` | Erro interno no servidor                     |
