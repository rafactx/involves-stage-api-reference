---
description: Retorna os dados de uma pesquisa informativa pelo ID.
---

# Detalhar Pesquisa Informativa

`GET /v3/environments/{environmentId}/surveys/{surveyId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |
| `surveyId`      | integer | path  | ✅ sim       | ID da pesquisa |

***

## ✅ Respostas

### `200 OK` – Dados da pesquisa retornados com sucesso

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

> A resposta completa inclui metadados da pesquisa, formulário, itens e respostas associadas com seus respectivos IDs, tópicos e valores.

***

## 🧬 Esquema de Resposta (resumo)

### SurveyExternalResourceDTO

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
| `form`             | object  | Formulário associado        |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/surveys/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/surveys/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v3/environments/123/surveys/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/surveys/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
