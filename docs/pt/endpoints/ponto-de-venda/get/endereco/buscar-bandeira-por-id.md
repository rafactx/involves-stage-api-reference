---
description: Retorna uma bandeira de acordo com o seu ID.
---

# 🏁 Buscar Bandeira por ID

> 🔗 `GET /v3/environments/{environmentId}/banners/{bannerId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `bannerId`      | integer | path  | ✅ sim       | ID da bandeira |


## ✅ Respostas

### `200 OK` – Bandeira retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "chain": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

::: details Banner

| Campo   | Tipo    | Descrição              |
| ------- | ------- | ---------------------- |
| `id`    | integer | ID da bandeira         |
| `name`  | string  | Nome da bandeira       |
| `chain` | objeto  | Link da rede associada |

:::

::: details Chain (link)

| Campo   | Tipo    | Descrição               |
| ------- | ------- | ----------------------- |
| `id`    | integer | ID da rede associada    |
| `_link` | string  | Link da rede no sistema |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/banners/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/banners/456', {
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
  "https://{dominio}.involves.com/v3/environments/123/banners/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/banners/456', {
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

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Bandeira não encontrada       |
| 💥 `500`  | Erro interno no servidor      |
