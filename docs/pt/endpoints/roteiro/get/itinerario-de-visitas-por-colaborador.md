---
description: Retorna as visitas agendadas para uma data, agrupadas por colaborador, em ordem de visita.
---

# 🧭 Itinerário de Visitas por Colaborador

> Lista todas as visitas agendadas no ambiente informado, agrupadas por colaborador e ordenadas pela sequência da visita.

> 🔗 `GET /v2/environments/{environment}/itinerary`


## 📥 Parâmetros

| Nome             | Tipo    | Local | Obrigatório | Descrição                                                      |
|------------------|---------|-------|-------------|----------------------------------------------------------------|
| `environment`    | integer | path  | ✅ sim       | ID do ambiente                                                 |
| `date`           | string  | query | ❌ não       | Data da consulta (formato `YYYY-MM-DD`)                        |
| `ignoreInactive` | boolean | query | ❌ não       | Ignora visitas de colaboradores inativos/desligados            |
| `page`           | integer | query | ❌ não       | Número da página (padrão: 1)                                   |
| `size`           | integer | query | ❌ não       | Tamanho da página (padrão: 100, máximo: 200)                   |


## ✅ Respostas

### `200 OK` – Visitas agendadas retornadas com sucesso

```json
[
  {
    "itineraryId": 0,
    "employeeId": 0,
    "employeeName": "string",
    "pointOfSaleId": 0,
    "pointOfSaleName": "string",
    "pointOfSaleTaxPayerCode": "string",
    "visitOrder": 0
  }
]
```


## 🧬 Esquema da Resposta

::: details Itinerary Visit V2

| Campo                    | Tipo     | Descrição                                    |
|---------------------------|----------|----------------------------------------------|
| `itineraryId`            | integer  | ID do itinerário                             |
| `employeeId`             | integer  | ID do colaborador                            |
| `employeeName`           | string   | Nome do colaborador                          |
| `pointOfSaleId`          | integer  | ID do ponto de venda                         |
| `pointOfSaleName`        | string   | Nome do ponto de venda                       |
| `pointOfSaleTaxPayerCode`| string   | CNPJ do ponto de venda                       |
| `visitOrder`             | integer  | Ordem de visita do colaborador no dia        |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://SeuDominio.involves.com/v2/environments/123/itinerary?date=2023-01-01&page=1&size=100' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://SeuDominio.involves.com/v2/environments/123/itinerary?date=2023-01-01&page=1&size=100', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
});
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://SeuDominio.involves.com/v2/environments/123/itinerary",
  params={"date": "2023-01-01", "page": 1, "size": 100},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://SeuDominio.involves.com/v2/environments/123/itinerary', {
  params: {
    date: '2023-01-01',
    page: 1,
    size: 100
  },
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

Exemplo: se a URL que você acessa é `https://involvescorp.involves.com`, use `involvescorp`.
:::


## ❌ Erros Comuns

| Código | Descrição                                  |
|--------|----------------------------------------------|
| 🔴 `400` | Requisição inválida                         |
| 🔐 `401` | Não autorizado – token inválido ou ausente |
| 🔍 `404` | Recurso não encontrado                      |
| 💥 `500` | Erro interno do servidor                    |
