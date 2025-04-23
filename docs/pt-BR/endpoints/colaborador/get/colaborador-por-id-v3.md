---
description: Retorna um colaborador de acordo com o seu ID.
---

# Colaborador por ID

`GET /v3/environments/{environmentId}/employees/{employeeId}`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
| --------------- | ------- | ----- | ----------- | ----------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `employeeId`    | integer | path  | ✅ sim       | ID do colaborador |

***

## ✅ Respostas

### `200 OK` – Colaborador retornado com sucesso

```json
{
  "id": 0,
  "name": "string",
  "login": "string",
  "email": "string",
  "enabled": true,
  "fieldTeam": true,
  "mobileAccess": true,
  "allRegionals": true,
  "language": "string",
  "timeZone": "string",
  "gender": "MALE",
  "dateOfBirth": "2025-04-22",
  "landlinePhone": "string",
  "mobilePhone": "string",
  "companyPhone": "string",
  "individualTaxpayerRegistration": "string",
  "idNumber": "string",
  "receivePartialOperationsOnEmail": true,
  "partialOperationsEmailFilter": "REGIONALS",
  "workday": {
    "id": 0,
    "name": "string"
  },
  "accessProfile": {
    "id": 0,
    "_link": "string"
  },
  "supervisor": {
    "id": 0,
    "_link": "string"
  },
  "regionals": {
    "id": 0,
    "_link": "string"
  },
  "address": {
    "id": 0,
    "_link": "string"
  }
}
```

***

## 🧬 Esquema de Resposta

### Employee

| Campo                             | Tipo    | Descrição                                          |
| --------------------------------- | ------- | -------------------------------------------------- |
| `id`                              | integer | ID do colaborador                                  |
| `name`                            | string  | Nome do colaborador                                |
| `login`                           | string  | Login do colaborador                               |
| `email`                           | string  | Email                                              |
| `enabled`                         | boolean | Está ativo?                                        |
| `fieldTeam`                       | boolean | Faz parte da equipe de campo?                      |
| `mobileAccess`                    | boolean | Tem acesso mobile?                                 |
| `allRegionals`                    | boolean | Acesso a todas as regionais?                       |
| `language`                        | string  | Idioma                                             |
| `timeZone`                        | string  | Fuso horário                                       |
| `gender`                          | string  | Gênero (MALE/FEMALE)                               |
| `dateOfBirth`                     | string  | Data de nascimento                                 |
| `landlinePhone`                   | string  | Telefone fixo                                      |
| `mobilePhone`                     | string  | Celular                                            |
| `companyPhone`                    | string  | Telefone corporativo                               |
| `individualTaxpayerRegistration`  | string  | CPF                                                |
| `idNumber`                        | string  | RG                                                 |
| `receivePartialOperationsOnEmail` | boolean | Recebe e-mails de operação parcial?                |
| `partialOperationsEmailFilter`    | string  | Filtro de relatório parcial (REGIONALS/SUPERVISOR) |
| `workday`                         | object  | Jornada de trabalho                                |
| `accessProfile`                   | object  | Perfil de acesso                                   |
| `supervisor`                      | object  | Supervisor                                         |
| `regionals`                       | object  | Regionais                                          |
| `address`                         | object  | Endereço                                           |

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v3/environments/123/employees/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v3/environments/123/employees/456', {
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
  "https://api.involves.com/v3/environments/123/employees/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v3/environments/123/employees/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
```
````
