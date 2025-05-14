---
description: Remove visitas previamente agendadas para um colaborador no ambiente especificado.
---

# 🗑️ Excluir Visitas Agendadas de um Colaborador

> Remove visitas de pontos de venda para um colaborador em uma data específica.

> 🔗 `DELETE /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
|------------------|---------|-------|-------------|----------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador    |


## 📨 Corpo da Requisição (application/json)

```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
```


## 🧬 Esquema da Requisição

::: details Scheduled Visit Delete V1

| Campo           | Tipo    | Obrigatório | Descrição                            |
|------------------|---------|-------------|----------------------------------------|
| `pointOfSaleId` | integer | ✅ sim       | ID do ponto de venda a remover         |
| `visitDate`     | string  | ✅ sim       | Data da visita no formato ISO-8601     |

:::


## ✅ Respostas

### `200 OK` – Visitas agendadas excluídas com sucesso


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data '[
    {
      "pointOfSaleId": 1,
      "visitDate": "2025-04-22"
    }
  ]'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      pointOfSaleId: 1,
      visitDate: "2025-04-22"
    }
  ])
});
```

```python [🔵 Python]
import requests

response = requests.delete(
  "https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json=[
    {
      "pointOfSaleId": 1,
      "visitDate": "2025-04-22"
    }
  ]
)

print(response.status_code)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.delete('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  data: [
    {
      pointOfSaleId: 1,
      visitDate: "2025-04-22"
    }
  ]
}).then(response => {
  console.log(response.status);
});
```

:::

::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

```
https://{dominio}.involves.com/v3/...
```
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida ou campos ausentes |
| 🔐 `401`  | **Não autenticado**                  |
| 🔍 `404`  | Colaborador ou ambiente não encontrados |
| 💥 `500`  | Erro interno no servidor             |
