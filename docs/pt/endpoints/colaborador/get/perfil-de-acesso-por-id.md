---
description: Retorna um perfil de acesso de acordo com seu ID.
---

# 📄 Perfil de Acesso por ID

Retorna as informações de um perfil de acesso específico, com nome, descrição e nível de hierarquia associado.

> 🔗 `GET /v3/accessprofiles/{id}`


## 📥 Parâmetros

| Nome | Tipo    | Local | Obrigatório | Descrição              |
|------|---------|-------|-------------|------------------------|
| `id` | integer | path  | ✅ sim       | ID do perfil de acesso |


## ✅ Respostas

### `200 OK` – Perfil de acesso retornado com sucesso

::: details Clique para ver o código
```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "gethierarchyLevel": 0
}
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/accessprofiles/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/accessprofiles/456', {
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
  "https://{dominio}.involves.com/v3/accessprofiles/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/accessprofiles/456', {
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

`https://{dominio}.involves.com/v3/...`
:::


## 🧬 Esquema de Resposta

::: details Access Profile

| Campo               | Tipo    | Descrição                                     |
|---------------------|---------|-----------------------------------------------|
| `id`                | integer | ID do perfil de acesso                        |
| `name`              | string  | Nome do perfil de acesso                      |
| `description`       | string  | Descrição do perfil de acesso                 |
| `gethierarchyLevel` | integer | Nível de hierarquia (quanto menor, mais alto) |

:::


## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
