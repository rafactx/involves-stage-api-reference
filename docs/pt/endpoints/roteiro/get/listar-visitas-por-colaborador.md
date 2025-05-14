---
description: Retorna uma lista com as visitas do usuário logado, com base no intervalo de datas informado.
---

# 👣 Listar Visitas por Colaborador ⚠️

> ⚠️ **Este endpoint está obsoleto (deprecated)**  
> Use preferencialmente a versão `/v3/employees/{employeeId}/scheduledvisits`

> 🔗 `GET /v1/{environmentId}/visit/find`


## 📥 Parâmetros

| Nome           | Tipo     | Local | Obrigatório | Descrição                                 |
|----------------|----------|-------|-------------|-------------------------------------------|
| `environmentId`| integer  | path  | ✅ sim       | ID do ambiente                            |
| `start`        | string   | query | ❌ não       | Data inicial da busca (`YYYY-MM-DD`)      |
| `end`          | string   | query | ❌ não       | Data final da busca (`YYYY-MM-DD`)        |


## ✅ Resposta

### `200 OK` – Visitas retornadas com sucesso

```json
{
  "id": 0,
  "pointOfSaleItineraryId": 0,
  "visitDate": "2025-04-22T21:12:18.181Z",
  "updatedAt": "2025-04-22T21:12:18.181Z",
  "deleted": true,
  "checkIns": [
    {
      "id": 0,
      "entryDate": "2025-04-22T21:12:18.181Z",
      "syncTimeEntryDate": "2025-04-22T21:12:18.181Z",
      "exitDate": "2025-04-22T21:12:18.181Z",
      "syncTimeExitDate": "2025-04-22T21:12:18.181Z"
    }
  ],
  "visitJustification": {
    "date": "2025-04-22T21:12:18.181Z",
    "reasonId": 0
  },
  "status": "PENDING"
}
```


## 🧬 Esquema da Resposta

::: details Visit

| Campo                   | Tipo      | Descrição                                                             |
|-------------------------|-----------|-----------------------------------------------------------------------|
| `id`                   | integer   | ID da visita                                                          |
| `pointOfSaleItineraryId`| integer   | ID do roteiro do ponto de venda                                       |
| `visitDate`            | datetime  | Data da visita                                                        |
| `updatedAt`            | datetime  | Data da última atualização                                            |
| `deleted`              | boolean   | Indica se a visita foi excluída                                       |
| `checkIns[]`           | array     | Lista de check-ins (entrada e saída)                                  |
| `visitJustification`   | objeto    | Objeto com `date` e `reasonId` da justificativa                       |
| `status`               | string    | Status da visita: `PENDING`, `VISITED`, `JUSTIFIED`                   |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl -X GET 'https://SeuDominio.involves.com/v1/123/visit/find?start=2025-01-01&end=2025-01-31' \
  -H 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v1/123/visit/find?start=2025-01-01&end=2025-01-31', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
.then(res => res.json())
.then(console.log)
```

```python [🔵 Python]
import requests

url = "https://SeuDominio.involves.com/v1/123/visit/find"
params = {"start": "2025-01-01", "end": "2025-01-31"}
headers = {"Authorization": "Bearer {seu_token}"}

response = requests.get(url, params=params, headers=headers)
print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios')

axios.get('https://SeuDominio.involves.com/v1/123/visit/find', {
  params: { start: '2025-01-01', end: '2025-01-31' },
  headers: { Authorization: 'Bearer {seu_token}' }
})
.then(res => console.log(res.data))
```

:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição malformada ou inválida          |
| 🔐 `401` | Token ausente ou inválido                  |
| 🔍 `404` | Visitante ou ambiente não encontrado       |
| 💥 `500` | Erro interno no servidor                   |
