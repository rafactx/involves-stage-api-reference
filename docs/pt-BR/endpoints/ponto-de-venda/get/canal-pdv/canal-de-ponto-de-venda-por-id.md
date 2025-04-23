# Canal de Ponto de Venda por ID

Retorna um canal do ponto de venda de acordo com o ID do canal.

`GET /v3/pointofsalechannels/{pointOfSaleChannelId}`

***

## 📥 Parâmetros

| Nome                   | Tipo    | Local | Obrigatório | Descrição                     |
| ---------------------- | ------- | ----- | ----------- | ----------------------------- |
| `pointOfSaleChannelId` | integer | path  | ✅ sim       | ID do canal de ponto de venda |

***

## ✅ Respostas

### `200 OK` – Canal de ponto do venda retornado com sucesso

```json
{
  "id": 0,
  "name": "string"
}
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
  --url 'https://api.involves.com/v3/pointofsalechannels/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/pointofsalechannels/456', {
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
  "https://api.involves.com/v3/pointofsalechannels/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/pointofsalechannels/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
