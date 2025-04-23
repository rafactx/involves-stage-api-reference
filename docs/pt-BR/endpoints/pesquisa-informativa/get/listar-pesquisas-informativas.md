---
description: Retorna os dados de todas as pesquisas cadastradas.
---

# Listar Pesquisas Informativas

`GET /v3/environments/{environmentId}/surveys`

***

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

***

## ✅ Respostas

### `200 OK` – Dados de todas as pesquisas cadastradas retornadas com sucesso

```json
[
  {
    "id": 0,
    "label": "string",
    "status": "string"
  }
]
```

***

## 🧬 Esquema de Resposta

### CompactSurveyExternalResourceDTO

| Campo    | Tipo    | Descrição                |
| -------- | ------- | ------------------------ |
| `id`     | integer | ID da pesquisa           |
| `label`  | string  | Nome/título da pesquisa  |
| `status` | string  | Status atual da pesquisa |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/surveys' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/surveys', {
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
  "https://api.involves.com/v3/environments/123/surveys",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/surveys', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
