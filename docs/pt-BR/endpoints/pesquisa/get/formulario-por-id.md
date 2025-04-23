---
description: Retorna um formulário de acordo com o ID enviado.
---

# Formulário por ID

`GET /v1/{environmentId}/form/{formId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
| --------------- | ------- | ----- | ----------- | ---------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `formId`        | integer | path  | ✅ sim       | ID do formulário |

***

## ✅ Respostas

### `200 OK` – Informação retornada com sucesso

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "formFlow": {
    "id": 0,
    "name": "string",
    "flowType": "POS"
  },
  "active": true,
  "deleted": false,
  "updatedAt": "2025-04-22T08:25:18.994Z"
}
```

> A resposta completa inclui configurações avançadas do formulário, seus campos, validações, dependências, restrições e metadados adicionais.

***

## 🧬 Esquema de Resposta (resumo)

### Form V1

| Campo         | Tipo    | Descrição                      |
| ------------- | ------- | ------------------------------ |
| `id`          | integer | ID do formulário               |
| `name`        | string  | Nome do formulário             |
| `description` | string  | Descrição                      |
| `formFlow`    | object  | Informações do fluxo associado |
| `active`      | boolean | Indica se está ativo           |
| `deleted`     | boolean | Indica se está excluído        |
| `updatedAt`   | string  | Data da última atualização     |

> A resposta inclui também listas de campos (`formFields`), supercategorias, perfis que editam (`userGroupsEdition`) e respondem (`userGroupsAnswer`) o formulário, entre outros.

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/form/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/form/456', {
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
  "https://api.involves.com/v1/123/form/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/form/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
