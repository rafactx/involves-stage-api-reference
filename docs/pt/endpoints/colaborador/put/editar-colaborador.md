---
description: Edita as informações do colaborador especificado.
---

# 📄 Editar Colaborador

Edita os dados completos de um colaborador no ambiente indicado, incluindo dados pessoais, endereço, permissões e perfil de acesso.

> 🔗 `PUT /v1/{environmentId}/employeeenvironment/{id}`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
|------------------|---------|-------|-------------|-------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `id`            | integer | path  | ✅ sim       | ID do colaborador |

## 📨 Corpo da Requisição (JSON)

::: details Exemplo
```json
{
  "id": 0,
  "name": "string",
  "role": "string",
  "workCard": "string",
  "cellPhone": "string",
  "phone": "string",
  "workPhone": "string",
  "sharedBetweenBrands": true,
  "brandServed": "string",
  "login": "string",
  "password": "string",
  "nacionalIdCard1": "string",
  "nacionalIdCard2": "string",
  "pis": "string",
  "email": "string",
  "fatherName": "string",
  "motherName": "string",
  "enabled": true,
  "workTimetableId": 0,
  "userGroupId": 0,
  "mobileAccessActive": true,
  "profileName": "string",
  "employeeEnvironmentLeader": 0,
  "partialOperationalReportFilter": "REGIONAL",
  "receivePartialOperationalReport": true,
  "fieldTeam": true,
  "temporary": true,
  "allFlags": true,
  "allRegions": true,
  "generatePassword": true,
  "contractTimeAlert1": 0,
  "contractTimeAlert2": 0,
  "contractTimeAlert3": 0,
  "locale": "string",
  "timezoneId": 0,
  "hiringDate": "2025-04-22T06:52:10.296Z",
  "regionIds": [0],
  "visibleChainIds": [0],
  "streetAddress": "string",
  "neighborhood": "string",
  "complement": "string",
  "cityName": "string",
  "stateIsoCode": "string",
  "zipCode": "string",
  "latitude": 0,
  "longitude": 0,
  "number": "string",
  "costCenter": "string",
  "birthDate": "2025-04-22T06:52:10.296Z",
  "register": "string",
  "flGenre": "MALE"
}
```
:::

## 🧬 Esquema de Requisição

::: details New Employee V1

| Campo                              | Tipo              | Descrição                                                                 |
|------------------------------------|-------------------|---------------------------------------------------------------------------|
| `id`                               | integer           | ID do colaborador                                                         |
| `name`                             | string            | Nome do colaborador                                                       |
| `role`                             | string            | Cargo do colaborador                                                      |
| `workCard`                         | string            | Carteira de trabalho                                                      |
| `cellPhone`                        | string            | Celular do colaborador                                                    |
| `phone`                            | string            | Telefone do colaborador                                                   |
| `workPhone`                        | string            | Celular de trabalho                                                       |
| `sharedBetweenBrands`              | boolean           | Colaborador é compartilhado entre marcas?                                |
| `brandServed`                      | string            | Marca atendida                                                            |
| `login`                            | string            | Login de acesso                                                           |
| `password`                         | string            | Senha                                                                     |
| `nacionalIdCard1`                  | string            | RG do colaborador                                                         |
| `nacionalIdCard2`                  | string            | CPF do colaborador                                                        |
| `pis`                              | string            | PIS do colaborador                                                        |
| `email`                            | string            | Email do colaborador                                                      |
| `fatherName`                       | string            | Nome do pai                                                               |
| `motherName`                       | string            | Nome da mãe                                                               |
| `enabled`                          | boolean           | Está ativo?                                                               |
| `workTimetableId`                  | integer           | ID da jornada de trabalho                                                 |
| `userGroupId`                      | integer           | ID do perfil de acesso                                                    |
| `mobileAccessActive`              | boolean           | Possui acesso mobile?                                                     |
| `profileName`                      | string            | Nome do perfil                                                            |
| `employeeEnvironmentLeader`        | integer           | ID do líder imediato                                                      |
| `partialOperationalReportFilter`   | string            | Tipo de filtro de relatório parcial (`REGIONAL`, `EMPLOYEE_ENVIRONMENT_LEADER`) |
| `receivePartialOperationalReport`  | boolean           | Recebe relatório de operação parcial?                                     |
| `fieldTeam`                        | boolean           | Faz parte da equipe de campo?                                             |
| `temporary`                        | boolean           | É temporário?                                                             |
| `allFlags`                         | boolean           | Tem acesso a todas as bandeiras?                                          |
| `allRegions`                       | boolean           | Tem acesso a todas as regionais?                                          |
| `generatePassword`                 | boolean           | Gerar senha automaticamente?                                              |
| `contractTimeAlert1`               | integer           | Alerta 1 por tempo de contrato (em dias)                                  |
| `contractTimeAlert2`               | integer           | Alerta 2 por tempo de contrato (em dias)                                  |
| `contractTimeAlert3`               | integer           | Alerta 3 por tempo de contrato (em dias)                                  |
| `locale`                           | string            | Idioma (ex: `pt-BR`)                                                      |
| `timezoneId`                       | integer           | ID do fuso horário                                                        |
| `hiringDate`                       | string (date-time)| Data de contratação                                                       |
| `regionIds`                        | array[integer]    | Lista de IDs de regionais                                                 |
| `visibleChainIds`                  | array[integer]    | Lista de IDs de bandeiras visíveis                                        |
| `streetAddress`                    | string            | Endereço                                                                  |
| `neighborhood`                     | string            | Bairro                                                                    |
| `complement`                       | string            | Complemento                                                               |
| `cityName`                         | string            | Nome da cidade                                                            |
| `stateIsoCode`                     | string            | Sigla do estado                                                           |
| `zipCode`                          | string            | CEP                                                                        |
| `latitude`                         | number            | Latitude                                                                  |
| `longitude`                        | number            | Longitude                                                                 |
| `number`                           | string            | Número                                                                    |
| `costCenter`                       | string            | Centro de custo                                                           |
| `birthDate`                        | string (date-time)| Data de nascimento                                                        |
| `register`                         | string            | Matrícula                                                                 |
| `flGenre`                          | string            | Gênero (`MALE` ou `FEMALE`)                                               |

:::


## ✅ Respostas

### `200 OK` – Colaborador editado com sucesso

::: details Clique para ver o código
```json
{
  "id": 0,
  "name": "string"
}
```
:::

## 🧬 Esquema de Resposta

::: details Employee Mini V1

| Campo  | Tipo    | Descrição           |
|--------|---------|---------------------|
| `id`   | integer | ID do colaborador   |
| `name` | string  | Nome do colaborador |

:::

## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request PUT \
  --url 'https://{dominio}.involves.com/v1/123/employeeenvironment/456' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ /* corpo JSON aqui */ })
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.put(
  "https://{dominio}.involves.com/v1/123/employeeenvironment/456",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={ /* corpo JSON aqui */ }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.put('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
  /* corpo JSON aqui */
}, {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
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

## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
