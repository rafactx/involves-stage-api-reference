---
description: Exclui um colaborador de acordo com o ID do colaborador especificado.
---

# Excluir Colaborador

`DELETE /v1/{environmentId}/employeeenvironment/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `id`            | integer | path  | ✅ sim       | ID do colaborador |

***

## ✅ Respostas

### `200 OK` – Colaborador excluído com sucesso

Este endpoint não retorna conteúdo no corpo da resposta.

```json
{}
```

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://api.involves.com/v1/123/employeeenvironment/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/employeeenvironment/456', {{
  method: 'DELETE',
  headers: {{
    'Authorization': 'Bearer {{seu_token}}'
  }}
}})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python (requests)]
import requests

response = requests.delete(
  "https://api.involves.com/v1/123/employeeenvironment/456",
  headers={{"Authorization": "Bearer {{seu_token}}"}}
)

print('Status:', response.status_code)
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.delete('https://api.involves.com/v1/123/employeeenvironment/456', {{
  headers: {{
    Authorization: 'Bearer {{seu_token}}'
  }}
}}).then(response => {{
  console.log('Status:', response.status);
}});
```
````
