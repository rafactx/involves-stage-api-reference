---
description: Retorna um afastamento de acordo com o seu ID.
---

# 📄 Afastamento por ID

Retorna os dados completos de um afastamento específico, identificado pelo `leaveId`, dentro de um ambiente.

> 🔗 `GET /v3/environments/{environmentId}/leaves/{leaveId}`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição             |
| --------------- | ------- | ----- | ----------- | --------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente        |
| `leaveId`       | integer | path  | ✅ sim       | ID do afastamento     |


## ✅ Respostas

### `200 OK` – Afastamento retornado com sucesso

::: details Clique para ver o código
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
:::


## 🧬 Esquema de Resposta

::: details Absence

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
:::


## 📘 Exemplo de Requisição

Abaixo estão exemplos de como fazer uma requisição GET utilizando diferentes linguagens:

::: code-group

```bash [🟢 cURL]
curl --request GET \\
  --url 'https://{dominio}.involves.com/v3/environments/123/leaves/456' \\
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/leaves/456', {
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
  "https://{dominio}.involves.com/v3/environments/123/leaves/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/leaves/456', {
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

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |