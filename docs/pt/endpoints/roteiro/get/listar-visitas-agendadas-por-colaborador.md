---
description: Retorna uma lista paginada de visitas agendadas de um colaborador específico.
---

# 📅 Listar Visitas Agendadas por Colaborador

> Retorna todas as visitas programadas de um colaborador, com possibilidade de filtro por data e status de visita.

> 🔗 `GET /v3/environments/{environmentId}/employees/{employeeId}/scheduledvisits`


## 📥 Parâmetros

| Nome           | Tipo     | Local | Obrigatório | Descrição                              |
|----------------|----------|-------|-------------|----------------------------------------|
| `environmentId`| integer  | path  | ✅ sim       | ID do ambiente                         |
| `employeeId`   | integer  | path  | ✅ sim       | ID do colaborador                      |
| `page`         | integer  | query | ❌ não       | Página específica                      |
| `size`         | integer  | query | ❌ não       | Quantidade de itens por página         |
| `startDate`    | string   | query | ❌ não       | Data inicial do período                |
| `endDate`      | string   | query | ✅ sim       | Data final do período                  |
| `visited`      | boolean  | query | ❌ não       | Filtrar se a visita foi realizada      |


## ✅ Respostas

### `206 Partial Content` – Lista de visitas retornada com sucesso

```json
[
  {
    "pointOfSale": {
      "id": 0,
      "_link": "string"
    },
    "visitDate": "2025-04-22",
    "expectedStart": "2025-04-22T21:24:50.140Z",
    "expectedEnd": "2025-04-22T21:24:50.140Z",
    "visited": true
  }
]
```


## 🧬 Esquema da Resposta

::: details Visit Scheduled

| Campo           | Tipo     | Descrição                              |
|-----------------|----------|----------------------------------------|
| `pointOfSale`   | objeto   | Referência ao ponto de venda visitado  |
| `visitDate`     | string   | Data da visita (formato: `YYYY-MM-DD`) |
| `expectedStart` | datetime | Horário previsto de início da visita   |
| `expectedEnd`   | datetime | Horário previsto de término da visita  |
| `visited`       | boolean  | Indica se a visita foi realizada       |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

```python [🔵 Python]
import requests

response = requests.get(
  'https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31',
  headers={"Authorization": "Bearer {seu_token}"}
)
print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/1/employees/10/scheduledvisits?endDate=2025-12-31', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
})
.then(response => console.log(response.data));
```

:::

::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage.
:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição malformada ou inválida          |
| 🔐 `401` | Não autorizado – token inválido ou ausente |
| 🔍 `404` | Colaborador ou ambiente não encontrado     |
| 💥 `500` | Erro interno do servidor                   |
