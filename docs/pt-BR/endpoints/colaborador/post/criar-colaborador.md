---
description: Salva um colaborador.
---

# Criar Colaborador

`POST /v1/{environmentId}/employeeenvironment`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |

***

## 📨 Corpo da Requisição (JSON)

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
  "regionIds": [
    0
  ],
  "visibleChainIds": [
    0
  ],
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

***

## ✅ Respostas

### `200 OK` – Colaborador salvo com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```

***

## 🧬 Esquema de Resposta

### Employee Mini V1

| Campo  | Tipo    | Descrição           |
| ------ | ------- | ------------------- |
| `id`   | integer | ID do colaborador   |
| `name` | string  | Nome do colaborador |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v1/123/employeeenvironment' \
  --header 'Authorization: Bearer {seu_token}' \
  --header 'Content-Type: application/json' \
  --data @body.json
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/employeeenvironment', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
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
  "regionIds": [
    0
  ],
  "visibleChainIds": [
    0
  ],
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
})
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v1/123/employeeenvironment",
  headers={
    "Authorization": "Bearer {seu_token}",
    "Content-Type": "application/json"
  },
  json={
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
  "regionIds": [
    0
  ],
  "visibleChainIds": [
    0
  ],
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
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.post('https://api.involves.com/v1/123/employeeenvironment', {
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
  "regionIds": [
    0
  ],
  "visibleChainIds": [
    0
  ],
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
}, {
  headers: {
    Authorization: 'Bearer {seu_token}',
    'Content-Type': 'application/json'
  }
}).then(response => {
  console.log(response.data);
});
```
````
