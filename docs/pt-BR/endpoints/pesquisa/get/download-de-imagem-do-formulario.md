---
description: Retorna uma imagem relacionada com o formulário do servidor.
---

# Download de Imagem do Formulário

`GET /v1/{environmentId}/form/{formId}/item/{itemId}/image/download`

***

## 📥 Parâmetros

| Nome                         | Tipo    | Local  | Obrigatório | Descrição                                                                  |
| ---------------------------- | ------- | ------ | ----------- | -------------------------------------------------------------------------- |
| `environmentId`              | integer | path   | ✅ sim       | ID do ambiente                                                             |
| `formId`                     | integer | path   | ✅ sim       | ID do formulário                                                           |
| `itemId`                     | integer | path   | ✅ sim       | ID do campo da pesquisa                                                    |
| `round`                      | boolean | query  | ❌ não       | Retorna a versão arredondada da imagem (default: `false`)                  |
| `thumbnail`                  | boolean | query  | ❌ não       | Retorna a versão thumbnail da imagem (default: `false`)                    |
| `If-Match`                   | string  | header | ❌ não       | Executa a requisição apenas se o arquivo já existir                        |
| `If-None-Match`              | string  | header | ❌ não       | Executa a requisição apenas se o arquivo **não** existir                   |
| `If-Modified-Since`          | string  | header | ❌ não       | Executa a requisição se a imagem **foi modificada** desde esse horário     |
| `If-Unmodified-Since`        | string  | header | ❌ não       | Executa a requisição se a imagem **não foi modificada** desde esse horário |
| `X-AGILE-PROP-FILE-CHECKSUM` | string  | header | ❌ não       | Checksum do arquivo                                                        |

***

## ✅ Respostas

### `200 OK` – Informação retornada com sucesso

> A imagem será retornada como binário (`image/jpeg`, `image/png`, etc.) conforme disponível no servidor.

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/form/456/item/789/image/download' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/form/456/item/789/image/download', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.blob())
  .then(image => console.log('Imagem recebida:', image));
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v1/123/form/456/item/789/image/download",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

with open("imagem.jpg", "wb") as f:
    f.write(response.content)
```

```js [🟣 Node.js (axios)]
const axios = require('axios');
const fs = require('fs');

axios.get('https://api.involves.com/v1/123/form/456/item/789/image/download', {
  responseType: 'stream',
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  response.data.pipe(fs.createWriteStream('imagem.jpg'));
});
```
````
