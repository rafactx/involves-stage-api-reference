---
description: Cadastra uma pesquisa informativa.
---

# Cadastrar Pesquisa Informativa

`POST /v3/environments/{environmentId}/surveys`

***

## 📥 Parâmetros

Nenhum parâmetro na URL. O `environmentId` deve ser definido na rota.

***

## 📨 Corpo da Requisição (JSON)

```json
{
  "items": [
    0
  ],
  "label": "string",
  "formId": 0,
  "pointOfSaleId": 0,
  "ownerId": 0,
  "expirationDate": "2025-04-22",
  "surveyCategoryId": 0,
  "allowSelectItems": true,
  "informativeQuestionValues": [
    {
      "questionId": 0,
      "itemId": 0,
      "value": "string"
    }
  ]
}
```

***

## ✅ Respostas

### `200 OK` – Pesquisa informativa cadastrada com sucesso

```json
{
  "status": "success"
}
```

***

## 🧬 Esquema da Requisição

### SurveyCreateInputExternalResourceDTO

| Campo                       | Tipo            | Obrigatório | Descrição                                 |
| --------------------------- | --------------- | ----------- | ----------------------------------------- |
| `items`                     | array\[integer] | ✅ sim       | Lista de IDs dos itens relacionados       |
| `label`                     | string          | ✅ sim       | Título da pesquisa                        |
| `formId`                    | integer         | ✅ sim       | ID do formulário                          |
| `pointOfSaleId`             | integer         | ✅ sim       | ID do ponto de venda                      |
| `ownerId`                   | integer         | ✅ sim       | ID do proprietário                        |
| `expirationDate`            | string          | ✅ sim       | Data de expiração da pesquisa             |
| `surveyCategoryId`          | integer         | ✅ sim       | ID da categoria da pesquisa               |
| `allowSelectItems`          | boolean         | ✅ sim       | Permite seleção de itens?                 |
| `informativeQuestionValues` | array\[object]  | ✅ sim       | Lista de perguntas informativas e valores |

***

### InformativeQuestionValueExternalResourceDTO

| Campo        | Tipo    | Descrição                         |
| ------------ | ------- | --------------------------------- |
| `questionId` | integer | ID da pergunta informativa        |
| `itemId`     | integer | ID do item relacionado à pergunta |
| `value`      | string  | Valor informado                   |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/environments/123/surveys' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/surveys', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  "items": [
    0
  ],
  "label": "string",
  "formId": 0,
  "pointOfSaleId": 0,
  "ownerId": 0,
  "expirationDate": "2025-04-22",
  "surveyCategoryId": 0,
  "allowSelectItems": true,
  "informativeQuestionValues": [
    {
      "questionId": 0,
      "itemId": 0,
      "value": "string"
    }
  ]
})
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/environments/123/surveys",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={
  "items": [
    0
  ],
  "label": "string",
  "formId": 0,
  "pointOfSaleId": 0,
  "ownerId": 0,
  "expirationDate": "2025-04-22",
  "surveyCategoryId": 0,
  "allowSelectItems": true,
  "informativeQuestionValues": [
    {
      "questionId": 0,
      "itemId": 0,
      "value": "string"
    }
  ]
}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.post('https://api.involves.com/v3/environments/123/surveys', {
  "items": [
    0
  ],
  "label": "string",
  "formId": 0,
  "pointOfSaleId": 0,
  "ownerId": 0,
  "expirationDate": "2025-04-22",
  "surveyCategoryId": 0,
  "allowSelectItems": true,
  "informativeQuestionValues": [
    {
      "questionId": 0,
      "itemId": 0,
      "value": "string"
    }
  ]
}, {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
});
```
````
