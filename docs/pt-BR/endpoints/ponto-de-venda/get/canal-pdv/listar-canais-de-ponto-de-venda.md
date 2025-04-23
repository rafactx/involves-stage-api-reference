---
description: Retorna uma lista paginada de canais de ponto de venda.
---

# Listar Canais de Ponto de Venda

`GET /v3/pointofsalechannels`

***

## 📥 Parâmetros

| Nome   | Tipo    | Local | Obrigatório | Descrição                                     |
| ------ | ------- | ----- | ----------- | --------------------------------------------- |
| `page` | integer | query | ❌ não       | Página da listagem (default: 1)               |
| `size` | integer | query | ❌ não       | Quantidade de itens por página (default: 100) |
| `name` | string  | query | ❌ não       | Nome do canal de ponto de venda               |

***

## ✅ Respostas

### `206 Partial Content` – Lista de canais de ponto de venda retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

***

## 🧬 Esquema de Resposta

### Channel

| Campo  | Tipo    | Descrição                       |
| ------ | ------- | ------------------------------- |
| `id`   | integer | ID do canal de ponto de venda   |
| `name` | string  | Nome do canal de ponto de venda |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/pointofsalechannels?page=1&size=100&name=Atacado' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/pointofsalechannels?page=1&size=100&name=Atacado', {
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
  "https://api.involves.com/v3/pointofsalechannels",
  params={"page": 1, "size": 100, "name": "Atacado"},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/pointofsalechannels', {
  params: { page: 1, size: 100, name: "Atacado" },
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
