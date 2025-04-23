---
description: Retorna uma lista paginada de colaboradores.
---

# Listar Colaboradores

`GET /v1/{environmentId}/employeeenvironment`

***

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

***

## ✅ Respostas

### `200 OK` – Lista de colaboradores retornada com sucesso

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

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/employeeenvironment?page=1&size=10' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/employeeenvironment?page=1&size=10', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.get(
  "https://api.involves.com/v1/123/employeeenvironment",
  params={"page": 1, "size": 10},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/employeeenvironment', {
  params: { page: 1, size: 10 },
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````

***

## 🧬 Esquema de Resposta

### Employee V1

| Campo                       | Tipo    | Descrição                              |
| --------------------------- | ------- | -------------------------------------- |
| `id`                        | integer | ID do colaborador                      |
| `name`                      | string  | Nome do colaborador                    |
| `role`                      | string  | Cargo do colaborador                   |
| `userGroup`                 | object  | Perfil de acesso                       |
| ├─ `id`                     | integer | ID do perfil de acesso                 |
| ├─ `name`                   | string  | Nome do perfil de acesso               |
| └─ `hierarchyLevel`         | integer | Hierarquia de acesso (1 a 9)           |
| `profile`                   | object  | Perfil de colaborador                  |
| ├─ `id`                     | integer | ID do perfil                           |
| └─ `name`                   | string  | Nome do perfil                         |
| `employeeEnvironmentLeader` | object  | Colaborador líder                      |
| ├─ `id`                     | integer | ID do colaborador                      |
| └─ `name`                   | string  | Nome do colaborador                    |
| `workCard`                  | string  | Carteira de trabalho                   |
| `cellPhone`                 | string  | Celular                                |
| `phone`                     | string  | Telefone                               |
| `workPhone`                 | string  | Celular de trabalho                    |
| `login`                     | string  | Login                                  |
| `nationalIdCard1`           | string  | RG                                     |
| `nationalIdCard2`           | string  | CPF                                    |
| `email`                     | string  | E-mail                                 |
| `fatherName`                | string  | Nome do pai                            |
| `motherName`                | string  | Nome da mãe                            |
| `sharedBetweenBrands`       | boolean | Compartilhado entre marcas             |
| `enabled`                   | boolean | Colaborador ativo                      |
| `mobileAccessActive`        | boolean | Acesso ao aplicativo                   |
| `address`                   | object  | Endereço                               |
| ├─ `id`                     | integer | ID do endereço                         |
| ├─ `city`                   | object  | Cidade                                 |
| │ ├─ `id`                   | integer | ID da cidade                           |
| │ ├─ `name`                 | string  | Nome da cidade                         |
| │ └─ `state`                | object  | Estado                                 |
| │ ├─ `id`                   | integer | ID do estado                           |
| │ ├─ `country`              | object  | País                                   |
| │ │ ├─ `countryCode`        | string  | Código do país                         |
| │ │ ├─ `name`               | string  | Nome do país                           |
| │ │ └─ `keyName`            | string  | Nome da chave                          |
| │ ├─ `name`                 | string  | Nome do estado                         |
| │ └─ `stateIsoCode`         | string  | Sigla do estado                        |
| ├─ `neighborhood`           | string  | Bairro                                 |
| ├─ `address`                | string  | Endereço                               |
| ├─ `number`                 | string  | Número                                 |
| ├─ `complement`             | string  | Complemento                            |
| ├─ `latitude`               | number  | Latitude                               |
| └─ `longitude`              | number  | Longitude                              |
| `zipCode`                   | string  | CEP                                    |
| `userId`                    | integer | ID do usuário                          |
| `userUpdatedAt`             | string  | Última atualização                     |
| `userUpdatedAtMillis`       | string  | Última atualização (ms)                |
| `fieldTeam`                 | boolean | Indica se faz parte da equipe de campo |
