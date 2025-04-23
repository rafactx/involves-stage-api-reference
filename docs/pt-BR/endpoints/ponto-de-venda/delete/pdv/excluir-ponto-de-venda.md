---
description: Exclui um ponto de venda de acordo com o ID informado.
---

# Excluir Ponto de Venda

`DELETE /v1/{environmentId}/pointofsale/{id}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |

***

## ✅ Respostas

### `200 OK` – Ponto de venda excluído com sucesso

```json
{
  "message": "Ponto de venda excluído com sucesso"
}
```

***

## 📘 Exemplo de requisição

### 🟢 cURL

```bash
curl --request DELETE \
  --url 'https://api.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

***

### 🟡 JavaScript (Fetch)

```javascript
fetch('https://api.involves.com/v1/123/pointofsale/456', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(console.log);
```

***

### 🔵 Python (requests)

```python
import requests

response = requests.delete(
  "https://api.involves.com/v1/123/pointofsale/456",
  headers={
    "Authorization": "Bearer {{seu_token}}"
  }
)

print(response.status_code)
```

***

### 🟣 Node.js (axios)

```javascript
const axios = require('axios');

axios.delete('https://api.involves.com/v1/123/pointofsale/456', {
  headers: {
    Authorization: "Bearer {{seu_token}}"
  }
}).then(response => {
  console.log(response.status);
});
```
