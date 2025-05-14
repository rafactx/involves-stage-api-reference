---
description: Retorna os dados de uma pesquisa informativa pelo ID.
---

# 📄 Detalhar Pesquisa Informativa

Retorna os dados detalhados de uma pesquisa informativa registrada no ambiente.

> 🔗 `GET /v3/environments/{environmentId}/surveys/{surveyId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
| --------------- | ------- | ----- | ----------- | ---------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `surveyId`      | integer | path  | ✅ sim       | ID da pesquisa   |


## ✅ Respostas

### `200 OK` – Dados da pesquisa retornados com sucesso

::: details Clique para ver o código
```json
{
  "id": 0,
  "label": "string",
  "expirationDate": "2025-04-22",
  "requestDate": "2025-04-22T08:34:41.660Z",
  "responseDate": "2025-04-22T08:34:41.660Z",
  "status": 0,
  "rescheduled": true,
  "deleted": false,
  "updatedAt": "2025-04-22T08:34:41.660Z",
  "projectId": 0,
  "surveyCategoryId": 0,
  "form": {
    "id": 0,
    "topic": "string"
  }
}
```
:::


## 🧬 Esquema de Resposta

::: details SurveyExternalResourceDTO

| Campo              | Tipo    | Descrição                   |
| ------------------ | ------- | --------------------------- |
| `id`               | integer | ID da pesquisa              |
| `label`            | string  | Nome/título da pesquisa     |
| `expirationDate`   | string  | Data de expiração           |
| `requestDate`      | string  | Data de solicitação         |
| `responseDate`     | string  | Data de resposta            |
| `status`           | integer | Status da pesquisa          |
| `rescheduled`      | boolean | Foi reagendada?             |
| `deleted`          | boolean | Indicador de exclusão       |
| `updatedAt`        | string  | Última atualização          |
| `projectId`        | integer | ID do projeto               |
| `surveyCategoryId` | integer | ID da categoria da pesquisa |
| `form`             | objeto  | Formulário associado        |
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/surveys/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/surveys/456', {
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
  "https://{dominio}.involves.com/v3/environments/123/surveys/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/surveys/456', {
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
| 🔍 `404` | Pesquisa não encontrada      |
| 💥 `500` | Erro interno no servidor     |
