---
description: Retorna lista dos campos do formulário do ID enviado.
---

# 📄 Listar Campos do Formulário

Retorna todos os campos vinculados ao formulário especificado.

> 🔗 `GET /v1/{environmentId}/form/formFields/{formId}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição        |
| --------------- | ------- | ----- | ----------- | ---------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente   |
| `formId`        | integer | path  | ✅ sim       | ID do formulário |


## ✅ Respostas

### `200 OK` – Lista de campos do formulário retornada com sucesso

::: details Clique para ver o código
```json
[
  {
    "id": 0,
    "question": "string"
  }
]
```
:::


## 🧬 Esquema de Resposta

::: details Form Field Information Mini V1

| Campo      | Tipo    | Descrição                       |
| ---------- | ------- | ------------------------------- |
| `id`       | integer | ID do campo do formulário       |
| `question` | string  | Pergunta do campo do formulário |
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/form/formFields/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/form/formFields/456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v1/123/form/formFields/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/form/formFields/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
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

`https://{dominio}.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código     | Descrição                            |
|------------|----------------------------------------|
| 🔴 `400`   | Requisição inválida                    |
| 🔐 `401`   | **Não autenticado**                    |
| 🚫 `403`   | Acesso negado                          |
| 🔍 `404`   | Formulário não encontrado              |
| 💥 `500`   | Erro interno no servidor               |
