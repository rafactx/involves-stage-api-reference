---
description: Retorna os formulários ativos em um ambiente.
---

# 📄 Formulários Ativos

Retorna todos os formulários ativos do ambiente especificado.

> 🔗 `GET /v1/{environmentId}/form/formsActivated`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |


## ✅ Respostas

### `200 OK` – Lista de formulários retornada com sucesso

::: details Clique para ver o código
```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```
:::


## 🧬 Esquema de Resposta

::: details Form Mini V1

| Campo  | Tipo    | Descrição          |
| ------ | ------- | ------------------ |
| `id`   | integer | ID do formulário   |
| `name` | string  | Nome do formulário |
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/form/formsActivated' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/form/formsActivated', {
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
  "https://{dominio}.involves.com/v1/123/form/formsActivated",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/form/formsActivated', {
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

| Código     | Descrição                      |
|------------|--------------------------------|
| 🔴 `400`   | Requisição inválida            |
| 🔐 `401`   | **Não autenticado**            |
| 🚫 `403`   | Acesso negado                  |
| 🔍 `404`   | Ambiente não encontrado        |
| 💥 `500`   | Erro interno no servidor       |
