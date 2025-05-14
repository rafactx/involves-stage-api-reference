---
description: Retorna uma lista paginada de visitas agendadas de um colaborador específico.
---

# 📄 Visitas Agendadas por Colaborador

Retorna a lista de visitas programadas para um colaborador dentro de um intervalo de datas, com possibilidade de filtrar por status de realização da visita.

> 🔗 `GET /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                             |
|------------------|---------|-------|-------------|---------------------------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente                        |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador                     |
| `page`          | integer | query | ❌ não       | Página. Valor padrão: `1`             |
| `size`          | integer | query | ❌ não       | Itens por página. Valor padrão: `100` |
| `startDate`     | string  | query | ❌ não       | Data de início da busca               |
| `endDate`       | string  | query | ✅ sim       | Data de fim da busca                  |
| `visited`       | boolean | query | ❌ não       | Indica se a visita foi realizada      |


## ✅ Respostas

### `206 Partial Content` – Lista de visitas agendadas retornada com sucesso

::: details Clique para ver o código
```json
[
  {
    "pointOfSale": {
      "id": 0,
      "_link": "string"
    },
    "visitDate": "2025-04-22",
    "expectedStart": "2025-04-22T07:27:57.922Z",
    "expectedEnd": "2025-04-22T07:27:57.922Z",
    "visited": true
  }
]
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits?endDate=2025-04-30' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits?endDate=2025-04-30', {
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
  "https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits",
  params={"endDate": "2025-04-30"},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/environments/123/employees/456/scheduledvisits', {
  params: { endDate: "2025-04-30" },
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


## 🧬 Esquema de Resposta

::: details Scheduled Visit

| Campo           | Tipo    | Descrição                             |
|------------------|---------|-----------------------------------------|
| `pointOfSale`   | object  | Ponto de venda (objeto com ID e link) |
| `visitDate`     | string  | Data da visita                        |
| `expectedStart` | string  | Início previsto                       |
| `expectedEnd`   | string  | Término previsto                      |
| `visited`       | boolean | Visita realizada?                     |

:::


## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
