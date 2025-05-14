---
description: Retorna os dados de todas as pesquisas cadastradas.
---

# 📄 Listar Pesquisas Informativas

Retorna uma lista compacta com os dados de todas as pesquisas informativas cadastradas no ambiente especificado.

> 🔗 `GET /v3/environments/{environmentId}/surveys`


## 📥 Parâmetros

| Nome             | Tipo            | Local | Obrigatório | Descrição                     |
| ---------------- | --------------- | ----- | ----------- | ----------------------------- |
| `environmentId`  | integer         | path  | ✅ sim       | ID do ambiente                |
| `ownerId`        | integer         | query | ❌ não       | ID do proprietário            |
| `origin`         | array\[string]  | query | ❌ não       | Origem da pesquisa            |
| `status`         | array\[string]  | query | ❌ não       | Status das pesquisas          |
| `formIds`        | array\[integer] | query | ❌ não       | Lista de IDs de formulários   |
| `updatedAtStart` | string          | query | ❌ não       | Data de início de atualização |
| `updatedAtEnd`   | string          | query | ❌ não       | Data final de atualização     |


## ✅ Respostas

### `200 OK` – Dados de todas as pesquisas cadastradas retornadas com sucesso

::: details Clique para ver o código
```json
[
  {
    "id": 0,
    "label": "string",
    "status": "string"
  }
]
```
:::


## 🧬 Esquema de Resposta

::: details CompactSurveyExternalResourceDTO

| Campo    | Tipo    | Descrição                |
| -------- | ------- | ------------------------ |
| `id`     | integer | ID da pesquisa           |
| `label`  | string  | Nome/título da pesquisa  |
| `status` | string  | Status atual da pesquisa |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/surveys' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/surveys', {
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
  "https://{dominio}.involves.com/v3/environments/123/surveys",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/surveys', {
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


## ❌ Erros Comuns

| Código | Descrição                    |
|--------|------------------------------|
| 🔴 `400` | Requisição inválida          |
| 🔐 `401` | **Não autenticado**          |
| 🚫 `403` | Acesso negado                |
| 🔍 `404` | Ambiente ou rota não encontrada |
| 💥 `500` | Erro interno no servidor     |
