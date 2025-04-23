---
description: Desativa um colaborador de acordo com o ID do colaborador especificado.
---

# Desativar Colaborador

`PUT /v1/{environmentId}/employeeenvironment/inactivate/{id}`

***

### 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `id`            | integer | path  | ✅ sim       | ID do colaborador |

***

### ✅ Respostas

#### `200 OK` – Colaborador desativado com sucesso

```json
{}
```

***

### 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request PUT \\
  --url 'https://api.involves.com/v1/123/employeeenvironment/inactivate/456' \\
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/employeeenvironment/inactivate/456', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python (requests)]
import requests

response = requests.put(
  "https://api.involves.com/v1/123/employeeenvironment/inactivate/456",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print('Status:', response.status_code)
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.put('https://api.involves.com/v1/123/employeeenvironment/inactivate/456', null, {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log('Status:', response.status);
});
```
````
