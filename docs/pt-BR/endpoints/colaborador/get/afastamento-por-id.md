---
description: Retorna um afastamento de acordo com o seu ID.
---

# Afastamento por ID

`GET /v3/environments/{environmentId}/leaves/{leaveId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `leaveId`       | integer | path  | ✅ sim       | ID do afastamento |

***

## ✅ Respostas

### `200 OK` – Afastamento retornado com sucesso

```json
{
  "id": 0,
  "startDate": "2025-04-22T07:22:37.511Z",
  "endDate": "2025-04-22T07:22:37.511Z",
  "reasonId": 0,
  "reason": "string",
  "note": "string",
  "employee": {
    "id": 0,
    "_link": "string"
  },
  "registeredBy": {
    "id": 0,
    "_link": "string"
  },
  "substitute": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### Absence

| Campo          | Tipo    | Descrição                           |
| -------------- | ------- | ----------------------------------- |
| `id`           | integer | ID do afastamento                   |
| `startDate`    | string  | Data de início                      |
| `endDate`      | string  | Data de término                     |
| `reasonId`     | integer | ID do motivo                        |
| `reason`       | string  | Motivo                              |
| `note`         | string  | Observações                         |
| `employee`     | object  | Colaborador afastado (Link)         |
| `registeredBy` | object  | Quem registrou o afastamento (Link) |
| `substitute`   | object  | Colaborador substituto (Link)       |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/leaves/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/leaves/456', {
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
  "https://api.involves.com/v3/environments/123/leaves/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/leaves/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
