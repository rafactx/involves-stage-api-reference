---
description: Retorna uma lista paginada de afastamentos dos colaboradores.
---

# 📄 Afastamento

Retorna uma lista paginada com todos os afastamentos de colaboradores registrados no ambiente especificado.

> 🔗 `GET /v1/{environmentId}/employeeabsence`

## 📥 Parâmetros

| Nome                    | Tipo          | Local | Obrigatório | Descrição                                                    |
| ----------------------- | ------------- | ----- | ----------- | ------------------------------------------------------------ |
| `environmentId`         | integer       | path  | ✅ sim       | ID do ambiente                                               |
| `page`                  | integer       | query | ❌ não       | Número da página (inicia em `1`)                          |
| `size`                  | integer       | query | ❌ não       | Quantidade de itens por página (máx recomendado: `100`)          |
| `employeeEnvironmentId` | integer       | query | ❌ não       | ID do colaborador                                            |
| `startDate`             | string (date) | query | ❌ não       | Filtra por data de início do afastamento (>= data informada) |
| `endDate`               | string (date) | query | ❌ não       | Filtra por data final do afastamento (<= data informada)     |

## ✅ Respostas

### `200 OK` – Lista de afastamentos retornada com sucesso

::: details Clique para ver o código
```js
[
  {
    "id": 123,
    "absenceStartDate": "2025-04-22T05:39:46.906Z",
    "absenceEndDate": "2025-04-23T18:00:00.000Z",
    "employeeEnvironmentSuspended": {
      "id": 101,
      "name": "João Silva"
    },
    "employeeEnvironmentRegisteredBy": {
      "id": 88,
      "name": "Ana Costa"
    },
    "employeeEnvironmentSubstitute": {
      "id": 92,
      "name": "Carlos Souza"
    },
    "reasonId": 3,
    "reasonNote": "Atestado médico",
    "absenceNote": "Retorno previsto para o dia 24"
  }
]
```
:::

## 🧬 Esquema de Resposta

::: details EmployeeAbsence V1

| Campo                             | Tipo          | Descrição                     |
| --------------------------------- | ------------- | ----------------------------- |
| `id`                              | integer       | ID do afastamento             |
| `absenceStartDate`                | string (date) | Data de início do afastamento |
| `absenceEndDate`                  | string (date) | Data final do afastamento     |
| `employeeEnvironmentSuspended`    | objeto        | Colaborador afastado          |
| `employeeEnvironmentRegisteredBy` | objeto        | Quem registrou o afastamento  |
| `employeeEnvironmentSubstitute`   | objeto        | Colaborador substituto        |
| `reasonId`                        | integer       | ID do motivo do afastamento   |
| `reasonNote`                      | string        | Motivo do afastamento         |
| `absenceNote`                     | string        | Observações adicionais        |
::: 

::: details Employee Mini V1

Utilizado nos campos `employeeEnvironmentSuspended`, `employeeEnvironmentRegisteredBy`, `employeeEnvironmentSubstitute`.

| Campo  | Tipo    | Descrição           |
| ------ | ------- | ------------------- |
| `id`   | integer | ID do colaborador   |
| `name` | string  | Nome do colaborador |
::: 


## 📘 Exemplo de Requisição

Abaixo estão exemplos de como fazer uma requisição GET utilizando diferentes linguagens:

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/employeeabsence?page=1&size=10' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeabsence?page=1&size=10', {
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
  "https://{dominio}.involves.com/v1/123/employeeabsence",
  params={"page": 1, "size": 10},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/employeeabsence', {
  params: { page: 1, size: 10 },
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```

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