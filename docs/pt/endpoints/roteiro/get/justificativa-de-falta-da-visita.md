---
description: Este endpoint retorna os dados da justificativa de ausência de um colaborador em uma visita previamente agendada.
---

# ❌ Justificativa de Falta da Visita

> Retorna a justificativa de ausência associada a uma visita agendada de um colaborador.

> 🔗 `GET /v3/environments/{environmentId}/visits/{visitId}/noshow`


## 📥 Parâmetros

| Nome           | Tipo     | Local | Obrigatório | Descrição        |
|----------------|----------|-------|-------------|------------------|
| `environmentId`| integer  | path  | ✅ sim       | ID do ambiente   |
| `visitId`      | integer  | path  | ✅ sim       | ID da visita     |


## ✅ Respostas

### `200 OK` – Justificativa de ausência retornada com sucesso

```json
{
  "id": 0,
  "excuseId": 0,
  "date": "2025-04-22T21:25:41.717Z",
  "excuse": "string",
  "note": "string",
  "status": "PENDING",
  "employee": {
    "id": 0,
    "_link": "string"
  }
}
```


## 🧬 Esquema da Resposta

::: details Visit NoShow

| Campo     | Tipo     | Descrição                                                    |
|-----------|----------|--------------------------------------------------------------|
| `id`      | integer  | ID da justificativa                                          |
| `excuseId`| integer  | ID do motivo da ausência                                     |
| `date`    | datetime | Data e hora da justificativa                                 |
| `excuse`  | string   | Texto explicativo do motivo                                  |
| `note`    | string   | Observação adicional                                         |
| `status`  | string   | Status: `PENDING`, `VISITED`, ou `JUSTIFIED`                 |
| `employee`| objeto   | Objeto com referência ao colaborador                         |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow', {
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
  "https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v3/environments/123/visits/456/noshow', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```

:::

::: tip 🌐 Domínio da API
Substitua `SeuDominio` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`**.
:::


## ❌ Erros Comuns

| Código | Descrição                                    |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição inválida                         |
| 🔐 `401` | Não autorizado – token inválido ou ausente |
| 🔍 `404` | Recurso não encontrado                      |
| 💥 `500` | Erro interno do servidor                    |
