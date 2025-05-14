---
description: Exclui visitas agendadas de um colaborador.
---

# 📄 Excluir Visitas Agendadas

Remove uma ou mais visitas agendadas do roteiro de um colaborador em um ambiente específico.

> 🔗 `DELETE /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
|------------------|---------|-------|-------------|-------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador |


## 📨 Corpo da Requisição (JSON)

::: details Exemplo
```json
[
  {
    "pointOfSaleId": 0,
    "visitDate": "2025-04-22"
  }
]
```
:::


## 🧬 Esquema de Requisição

::: details Scheduled Visit to be deleted

| Campo           | Tipo    | Descrição                   |
|------------------|---------|-----------------------------|
| `pointOfSaleId` | integer | ID do ponto de venda        |
| `visitDate`     | string  | Data da visita (YYYY-MM-DD) |

:::


## ✅ Respostas

### `200 OK` – Visitas agendadas excluídas com sucesso

::: details Clique para ver o código
```json
[]
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
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
      "pointOfSaleId": 0,
      "visitDate": "2025-04-22"
    }
  ])
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
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
      "pointOfSaleId": 0,
      "visitDate": "2025-04-22"
    }
  ]
)

print('Status:', response.status_code)
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
      "pointOfSaleId": 0,
      "visitDate": "2025-04-22"
    }
  ]
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


## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
