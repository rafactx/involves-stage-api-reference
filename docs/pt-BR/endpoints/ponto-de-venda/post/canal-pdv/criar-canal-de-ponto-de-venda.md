---
description: Salva um novo canal de ponto de venda.
---

# Criar Canal de Ponto de Venda

`POST /v3/pointofsalechannels`

***

## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Canal de Vendas Diretas"
}
```

### Esquema - New Point of Sale Channel

| Campo  | Tipo   | Obrigatório | Descrição                       |
| ------ | ------ | ----------- | ------------------------------- |
| `name` | string | ✅ sim       | Nome do canal de ponto de venda |

***

## ✅ Respostas

### `201 Created` – ID do novo canal salvo com sucesso

```json
0
```

### Esquema de Resposta

| Tipo de Dado | Descrição                            |
| ------------ | ------------------------------------ |
| `integer`    | ID do canal de ponto de venda criado |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/pointofsalechannels' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Canal de Vendas Diretas"
  }'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/pointofsalechannels', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Canal de Vendas Diretas"
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/pointofsalechannels",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={"name": "Canal de Vendas Diretas"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.post('https://api.involves.com/v3/pointofsalechannels', {
  name: "Canal de Vendas Diretas"
}, {
  headers: {
    Authorization: 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
});
```
````
