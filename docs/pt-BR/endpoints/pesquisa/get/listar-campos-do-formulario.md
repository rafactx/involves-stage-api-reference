---
description: Retorna lista dos campos do formulário do ID enviado.
---

# Listar Campos do Formulário

`GET /v1/{environmentId}/form/formFields/{formId}`

***

## 📥 Parâmetros

| Nome     | Tipo    | Local | Obrigatório | Descrição        |
| -------- | ------- | ----- | ----------- | ---------------- |
| `formId` | integer | path  | ✅ sim       | ID do formulário |

***

## ✅ Respostas

### `200 OK` – Lista de campos do formulário retornada com sucesso

```json
{
  "id": 0,
  "question": "string"
}
```

***

## 🧬 Esquema de Resposta

### Form Field Information Mini V1

| Campo      | Tipo    | Descrição                       |
| ---------- | ------- | ------------------------------- |
| `id`       | integer | ID do campo do formulário       |
| `question` | string  | Pergunta do campo do formulário |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/form/formFields/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/form/formFields/456', {
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
  "https://api.involves.com/v1/123/form/formFields/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/form/formFields/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
