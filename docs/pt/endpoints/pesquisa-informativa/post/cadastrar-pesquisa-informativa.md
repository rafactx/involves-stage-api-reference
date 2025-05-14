---
description: Cadastra uma pesquisa informativa.
---

# 📝 Cadastrar Pesquisa Informativa

Realiza o cadastro de uma nova pesquisa informativa no ambiente especificado.

> 🔗 `POST /v3/environments/{environmentId}/surveys`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |


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


## 🧬 Esquema da Requisição

::: details SurveyCreateInputExternalResourceDTO

| Campo                       | Tipo            | Descrição                                 |
| --------------------------- | --------------- | ----------------------------------------- |
| `items`                     | array\[integer] | Lista de IDs dos itens relacionados       |
| `label`                     | string          | Título da pesquisa                        |
| `formId`                    | integer         | ID do formulário                          |
| `pointOfSaleId`             | integer         | ID do ponto de venda                      |
| `ownerId`                   | integer         | ID do proprietário                        |
| `expirationDate`            | string          | Data de expiração da pesquisa             |
| `surveyCategoryId`          | integer         | ID da categoria da pesquisa               |
| `allowSelectItems`          | boolean         | Permite seleção de itens?                 |
| `informativeQuestionValues` | array\[object]  | Lista de perguntas informativas e valores |

:::

::: details InformativeQuestionValueExternalResourceDTO

| Campo        | Tipo    | Descrição                         |
| ------------ | ------- | --------------------------------- |
| `questionId` | integer | ID da pergunta informativa        |
| `itemId`     | integer | ID do item relacionado à pergunta |
| `value`      | string  | Valor informado                   |

:::


## ✅ Respostas

### `200 OK` – Pesquisa informativa cadastrada com sucesso

```json
{
  "status": "success"
}
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/environments/123/surveys' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/surveys', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "items": [0],
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

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/environments/123/surveys",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={
    "items": [0],
    "label": "string",
    "formId": 0,
    "pointOfSaleId": 0,
    "ownerId": 0,
    "expirationDate": "2025-04-22",
    "surveyCategoryId": 0,
    "allowSelectItems": True,
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

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v3/environments/123/surveys', {
  "items": [0],
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

:::


::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                    |
|--------|------------------------------|
| 🔴 `400` | Requisição inválida          |
| 🔐 `401` | **Não autenticado**          |
| 🚫 `403` | Acesso negado                |
| 🔍 `404` | Formulário ou item não encontrado |
| 💥 `500` | Erro interno no servidor     |
