---
description: Retorna os formulários ativos em um ambiente.
---

# Formulários Ativos

`GET /v1/{environmentId}/form/formsActivated`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |

***

## ✅ Respostas

### `200 OK` – Lista de formulários retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```

***

## 🧬 Esquema de Resposta

### Form Mini V1

| Campo  | Tipo    | Descrição          |
| ------ | ------- | ------------------ |
| `id`   | integer | ID do formulário   |
| `name` | string  | Nome do formulário |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/form/formsActivated' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/form/formsActivated', {
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
  "https://api.involves.com/v1/123/form/formsActivated",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/form/formsActivated', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
