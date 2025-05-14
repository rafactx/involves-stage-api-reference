---
description: Retorna uma regional de acordo com o seu ID.
---

# Buscar Regional por ID

> 🔗 `GET /v3/environments/{environmentId}/regionals/{regionalId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `regionalId`    | integer | path  | ✅ sim       | ID da regional |


## ✅ Respostas

### `200 OK` – Regional retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "macroregional": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema de Resposta

### Regional V1

| Campo           | Tipo    | Descrição                        |
| --------------- | ------- | -------------------------------- |
| `id`            | integer | ID da regional                   |
| `name`          | string  | Nome da regional                 |
| `macroregional` | objeto  | Link da macrorregional associada |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/regionals/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/regionals/456', {
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
  "https://{dominio}.involves.com/v3/environments/123/regionals/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/regionals/456', {
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

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Regional não encontrada              |
| 💥 `500`  | Erro interno no servidor             |
