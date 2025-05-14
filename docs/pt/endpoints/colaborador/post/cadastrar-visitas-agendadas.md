---
description: Retorna uma lista paginada de visitas agendadas de um colaborador específico.
---

# 📄 Cadastrar Visitas Agendadas

Cadastra múltiplas visitas agendadas no roteiro do colaborador especificado, definindo ponto de venda, data, ordem e horários esperados.

> 🔗 `POST /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
|------------------|---------|-------|-------------|-------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador |

## 📨 Corpo da Requisição

::: details JSON esperado
```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
]
```
:::


## ✅ Respostas

### `201 Created` – Visitas agendadas cadastradas com sucesso

::: details Clique para ver o código
```json
[]
```
:::

## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      "pointOfSaleId": 0,
      "visitDate": "2025-04-22",
      "visitOrder": 0,
      "expectedStart": "2025-04-22T07:28:35.243Z",
      "expectedEnd": "2025-04-22T07:28:35.243Z"
    }
  ])
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json=[
    {
      "pointOfSaleId": 0,
      "visitDate": "2025-04-22",
      "visitOrder": 0,
      "expectedStart": "2025-04-22T07:28:35.243Z",
      "expectedEnd": "2025-04-22T07:28:35.243Z"
    }
  ]
)

print('Status:', response.status_code)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits', [
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22",
    "visitOrder": 0,
    "expectedStart": "2025-04-22T07:28:35.243Z",
    "expectedEnd": "2025-04-22T07:28:35.243Z"
  }
], {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log('Status:', response.status);
});
```

:::

::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v3/...`
:::

## 🧬 Esquema da Requisição

::: details New Scheduled Visit

| Campo           | Tipo    | Obrigatório | Descrição                   |
|------------------|---------|-------------|-------------------------------|
| `pointOfSaleId` | integer | ✅ sim       | ID do ponto de venda        |
| `visitDate`     | string  | ✅ sim       | Data da visita (YYYY-MM-DD) |
| `visitOrder`    | integer | ✅ sim       | Ordem da visita (mínimo: 1) |
| `expectedStart` | string  | ❌ não       | Início previsto da visita   |
| `expectedEnd`   | string  | ❌ não       | Fim previsto da visita      |

:::

## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
