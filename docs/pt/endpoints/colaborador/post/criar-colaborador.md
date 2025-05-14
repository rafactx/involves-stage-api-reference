---
description: Salva um colaborador.
---

# 📄 Criar Colaborador

Cria um novo colaborador no ambiente informado. O corpo da requisição aceita dados pessoais, dados de acesso e configurações específicas de visibilidade e jornada.

> 🔗 `POST /v1/{environmentId}/employeeenvironment`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
|------------------|---------|-------|-------------|----------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |


## 🧬 Esquema da Requisição

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
| `sharedBetweenBrands`              | boolean           | Indica se o colaborador é compartilhado entre marcas                     |
| `brandServed`                      | string            | Marca atendida                                                            |
| `login`                            | string            | Login do colaborador                                                      |
| `password`                         | string            | Senha do colaborador                                                      |
| `nacionalIdCard1`                  | string            | RG do colaborador                                                         |
| `nacionalIdCard2`                  | string (max: 50)  | CPF do colaborador                                                        |
| `pis`                              | string (11 chars) | PIS do colaborador                                                        |
| `email`                            | string            | Email do colaborador                                                      |
| `fatherName`                       | string            | Nome do pai                                                               |
| `motherName`                       | string            | Nome da mãe                                                               |
| `enabled`                          | boolean           | Indica se o colaborador está ativo                                        |
| `workTimetableId`                  | integer           | Jornada de trabalho                                                       |
| `userGroupId`                      | integer           | ID do perfil de acesso                                                    |
| `mobileAccessActive`              | boolean           | Indica se o colaborador possui acesso ao aplicativo                      |
| `profileName`                      | string            | Nome do perfil do colaborador                                             |
| `employeeEnvironmentLeader`        | integer           | ID do colaborador superior                                                |
| `partialOperationalReportFilter`   | string            | Filtro de relatório parcial (`REGIONAL`, `EMPLOYEE_ENVIRONMENT_LEADER`)  |
| `receivePartialOperationalReport`  | boolean           | Receber relatório parcial de operação                                     |
| `fieldTeam`                        | boolean           | Indica se faz parte da equipe de campo                                   |
| `temporary`                        | boolean           | Temporário                                                                |
| `allFlags`                         | boolean           | Acesso a todas as bandeiras                                               |
| `allRegions`                       | boolean           | Acesso a todas as regionais                                               |
| `generatePassword`                 | boolean           | Gera senha automaticamente                                                |
| `contractTimeAlert1`               | integer           | Alerta 1 por tempo de contrato (dias)                                     |
| `contractTimeAlert2`               | integer           | Alerta 2 por tempo de contrato (dias)                                     |
| `contractTimeAlert3`               | integer           | Alerta 3 por tempo de contrato (dias)                                     |
| `locale`                           | string            | Idioma do colaborador (ex: `pt-BR`)                                       |
| `timezoneId`                       | integer           | Fuso horário do colaborador                                               |
| `hiringDate`                       | string (date-time)| Data de contratação                                                       |
| `regionIds`                        | array[integer]    | Lista de IDs de regionais                                                 |
| `visibleChainIds`                  | array[integer]    | Lista de IDs de bandeiras visíveis                                        |
| `streetAddress`                    | string            | Endereço                                                                  |
| `neighborhood`                     | string            | Bairro do endereço                                                        |
| `complement`                       | string            | Complemento do endereço                                                   |
| `cityName`                         | string            | Nome da cidade                                                            |
| `stateIsoCode`                     | string            | Sigla do estado                                                           |
| `zipCode`                          | string            | CEP                                                                        |
| `latitude`                         | number            | Latitude da localização                                                   |
| `longitude`                        | number            | Longitude da localização                                                  |
| `number`                           | string            | Número do endereço                                                        |
| `costCenter`                       | string            | Centro de custo                                                           |
| `birthDate`                        | string (date-time)| Data de nascimento                                                        |
| `register`                         | string            | Matrícula                                                                 |
| `flGenre`                          | string            | Gênero (`MALE` ou `FEMALE`)                                               |

:::

## 📨 Corpo da Requisição

::: details JSON esperado
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
  "hiringDate": "2025-04-22T07:06:08.232Z",
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
  "birthDate": "2025-04-22T07:06:08.232Z",
  "register": "string",
  "flGenre": "MALE"
}
```
:::


## ✅ Respostas

### `200 OK` – Colaborador salvo com sucesso

::: details Clique para ver o código
```json
{
  "id": 0,
  "name": "string"
}
```
:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v1/123/employeeenvironment' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeenvironment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ /* corpo do JSON */ })
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v1/123/employeeenvironment",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={ /* corpo do JSON */ }
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v1/123/employeeenvironment', { /* corpo do JSON */ }, {
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

## 🧬 Esquema de Resposta

::: details Employee Mini V1

| Campo  | Tipo    | Descrição           |
|--------|---------|---------------------|
| `id`   | integer | ID do colaborador   |
| `name` | string  | Nome do colaborador |

:::

## ❌ Erros Comuns

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
