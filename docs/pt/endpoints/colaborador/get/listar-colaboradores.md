---
description: Retorna uma lista paginada de colaboradores.
---

# 📄 Listar Colaboradores

Retorna uma lista paginada de todos os colaboradores do ambiente, com possibilidade de filtros por nome, CPF, RG, regional, email, ativo, excluído, etc.

> 🔗 `GET /v1/{environmentId}/employeeenvironment`

## 📥 Parâmetros

| Nome              | Tipo    | Local | Obrigatório | Descrição                                                                |
| ----------------- | ------- | ----- | ----------- | ------------------------------------------------------------------------ |
| `environmentId`   | integer | path  | ✅ sim       | ID do ambiente                                                           |
| `page`            | integer | query | ❌ não       | Número da página. Valor padrão: `1`                                      |
| `size`            | integer | query | ❌ não       | Quantidade de itens por página. Valor padrão: `100`                      |
| `regionId`        | integer | query | ❌ não       | ID de regional. Filtra por regional                                      |
| `formId`          | integer | query | ❌ não       | ID de formulário. Filtra por acesso a formulário                         |
| `name`            | string  | query | ❌ não       | Nome do colaborador                                                      |
| `email`           | string  | query | ❌ não       | Email do colaborador                                                     |
| `nationalIdCard1` | string  | query | ❌ não       | RG do colaborador                                                        |
| `nationalIdCard2` | string  | query | ❌ não       | CPF do colaborador                                                       |
| `imei`            | string  | query | ❌ não       | IMEI do colaborador                                                      |
| `fieldTeam`       | boolean | query | ❌ não       | Filtra por colaboradores da equipe de campo                              |
| `active`          | boolean | query | ❌ não       | Filtra por colaboradores ativos                                          |
| `excluded`        | boolean | query | ❌ não       | Filtra por colaboradores excluídos                                       |
| `updatedAtDate`   | string  | query | ❌ não       | Data de atualização >= informada                                         |
| `updatedAtMillis` | string  | query | ❌ não       | Data de atualização em ms >= informada (tem prioridade sobre a anterior) |


## ✅ Respostas

### `200 OK` – Lista de colaboradores retornada com sucesso

::: details Clique para ver o código
```json
[
  {
    "id": 0,
    "name": "string",
    "role": "string",
    "userGroup": {
      "id": 0,
      "name": "string",
      "hierarchyLevel": 0
    },
    "profile": {
      "id": 0,
      "name": "string"
    },
    "employeeEnvironmentLeader": {
      "id": 0,
      "name": "string"
    },
    "workCard": "string",
    "cellPhone": "string",
    "phone": "string",
    "workPhone": "string",
    "login": "string",
    "nationalIdCard1": "string",
    "nationalIdCard2": "string",
    "email": "string",
    "fatherName": "string",
    "motherName": "string",
    "sharedBetweenBrands": true,
    "enabled": true,
    "mobileAccessActive": true,
    "address": {
      "id": 0,
      "city": {
        "id": 0,
        "name": "string",
        "state": {
          "id": 0,
          "country": {
            "countryCode": "BR",
            "name": "Brasil",
            "keyName": "country.brazil"
          },
          "name": "string",
          "stateIsoCode": "string"
        }
      },
      "neighborhood": "string",
      "address": "string",
      "number": "string",
      "complement": "string",
      "latitude": 0,
      "longitude": 0,
      "zipCode": "string"
    },
    "userId": 0,
    "userUpdatedAt": "2025-04-22T07:03:21.235Z",
    "userUpdatedAtMillis": "2025-04-22T07:03:21.235Z",
    "fieldTeam": true
  }
]
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \\
  --url 'https://{dominio}.involves.com/v1/123/employeeenvironment?page=1&size=10' \\
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeenvironment?page=1&size=10', {
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
  "https://{dominio}.involves.com/v1/123/employeeenvironment",
  params={"page": 1, "size": 10},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/employeeenvironment', {
  params: { page: 1, size: 10 },
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

`https://{dominio}.involves.com/v1/...`
:::


## 🧬 Esquema de Resposta

### Employee V1

## 🧬 Esquema de Resposta

::: details 🧾 Informações Básicas

| Campo              | Tipo    | Descrição                   |
|--------------------|---------|-----------------------------|
| `id`               | integer | ID do colaborador           |
| `name`             | string  | Nome do colaborador         |
| `role`             | string  | Cargo do colaborador        |
| `workCard`         | string  | Carteira de trabalho        |
| `cellPhone`        | string  | Celular                     |
| `phone`            | string  | Telefone                    |
| `workPhone`        | string  | Celular de trabalho         |
| `login`            | string  | Login                       |
| `nationalIdCard1`  | string  | RG                          |
| `nationalIdCard2`  | string  | CPF                         |
| `email`            | string  | E-mail                      |
| `fatherName`       | string  | Nome do pai                 |
| `motherName`       | string  | Nome da mãe                 |
| `fieldTeam`        | boolean | Indica se é equipe de campo |
| `sharedBetweenBrands` | boolean | Compartilhado entre marcas |

:::

::: details 🔐 Acesso e Perfis

| Campo                        | Tipo    | Descrição                       |
|-----------------------------|---------|---------------------------------|
| `enabled`                   | boolean | Colaborador ativo               |
| `mobileAccessActive`        | boolean | Acesso ao aplicativo            |
| `userId`                    | integer | ID do usuário                   |
| `userUpdatedAt`             | string  | Última atualização              |
| `userUpdatedAtMillis`       | string  | Última atualização (ms)         |
| `userGroup`                 | object  | Perfil de acesso                |
| ├─ `id`                     | integer | ID do perfil de acesso          |
| ├─ `name`                   | string  | Nome do perfil de acesso        |
| └─ `hierarchyLevel`         | integer | Hierarquia de acesso (1 a 9)    |
| `profile`                   | object  | Perfil de colaborador           |
| ├─ `id`                     | integer | ID do perfil                    |
| └─ `name`                   | string  | Nome do perfil                  |
| `employeeEnvironmentLeader` | object  | Colaborador líder               |
| ├─ `id`                     | integer | ID do colaborador               |
| └─ `name`                   | string  | Nome do colaborador             |

:::

::: details 🏠 Endereço

| Campo             | Tipo    | Descrição             |
|-------------------|---------|-----------------------|
| `zipCode`         | string  | CEP                   |
| `address`         | object  | Endereço completo     |
| ├─ `id`           | integer | ID do endereço        |
| ├─ `address`      | string  | Endereço              |
| ├─ `number`       | string  | Número                |
| ├─ `complement`   | string  | Complemento           |
| ├─ `neighborhood` | string  | Bairro                |
| ├─ `latitude`     | number  | Latitude              |
| └─ `longitude`    | number  | Longitude             |

:::

::: details 🗺️ Cidade, Estado e País

| Campo               | Tipo    | Descrição              |
|---------------------|---------|------------------------|
| `city`              | object  | Cidade                 |
| ├─ `id`             | integer | ID da cidade           |
| ├─ `name`           | string  | Nome da cidade         |
| └─ `state`          | object  | Estado                 |
| &nbsp;&nbsp;├─ `id`           | integer | ID do estado   |
| &nbsp;&nbsp;├─ `name`         | string  | Nome do estado |
| &nbsp;&nbsp;├─ `stateIsoCode` | string  | Sigla do estado|
| &nbsp;&nbsp;└─ `country`      | object  | País            |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ `countryCode` | string | Código do país   |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ `name`        | string | Nome do país     |
| &nbsp;&nbsp;&nbsp;&nbsp;└─ `keyName`     | string | Nome da chave    |

:::



## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
