---
description: Este endpoint está descontinuado. Retorna as informações do colaborador de acordo com o ID do colaborador especificado.
---

# 📄 Colaborador por ID

Retorna os dados completos de um colaborador a partir do `id` no ambiente informado.

::: warning Aviso!   
⚠️ Este endpoint está descontinuado.
:::

> 🔗 `GET /v1/{environmentId}/employeeenvironment/{id}`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `id`            | integer | path  | ✅ sim       | ID do colaborador |


## ✅ Respostas

### `200 OK` – Colaborador retornado com sucesso

::: details Clique para ver o código
```json
{
  "id": 0,
  "name": "string",
  "role": "string",
  "userGroup": {
    "id": 0,
    "name": "string",
    "hierarchyLevel": 0
  },
  "profile": {
    "id": 0,
    "name": "string"
  },
  "employeeEnvironmentLeader": {
    "id": 0,
    "name": "string"
  },
  "workCard": "string",
  "cellPhone": "string",
  "phone": "string",
  "workPhone": "string",
  "login": "string",
  "nationalIdCard1": "string",
  "nationalIdCard2": "string",
  "email": "string",
  "fatherName": "string",
  "motherName": "string",
  "sharedBetweenBrands": true,
  "enabled": true,
  "mobileAccessActive": true,
  "address": {
    "id": 0,
    "city": {
      "id": 0,
      "name": "string",
      "state": {
        "id": 0,
        "country": {
          "countryCode": "BR",
          "name": "Brasil",
          "keyName": "country.brazil"
        },
        "name": "string",
        "stateIsoCode": "string"
      }
    },
    "neighborhood": "string",
    "address": "string",
    "number": "string",
    "complement": "string",
    "latitude": 0,
    "longitude": 0,
    "zipCode": "string"
  },
  "userId": 0,
  "userUpdatedAt": "2025-04-22T06:48:45.389Z",
  "userUpdatedAtMillis": "2025-04-22T06:48:45.389Z",
  "fieldTeam": true
}
```
:::


## 📘 Exemplo de Requisição

Abaixo estão exemplos de como fazer uma requisição GET utilizando diferentes linguagens:

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/employeeenvironment/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
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
  "https://{dominio}.involves.com/v1/123/employeeenvironment/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
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

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
