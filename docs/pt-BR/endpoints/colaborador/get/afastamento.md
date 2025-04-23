---
description: Retorna uma lista paginada de afastamentos dos colaboradores.
---

# Afastamento

`GET /v1/{environmentId}/employeeabsence`

***

## 📥 Parâmetros

| Nome                    | Tipo          | Local | Obrigatório | Descrição                                                    |
| ----------------------- | ------------- | ----- | ----------- | ------------------------------------------------------------ |
| `environmentId`         | integer       | path  | ✅ sim       | ID do ambiente                                               |
| `page`                  | integer       | query | ❌ não       | Número da página. Valor padrão: `1`                          |
| `size`                  | integer       | query | ❌ não       | Quantidade de itens por página. Valor padrão: `100`          |
| `employeeEnvironmentId` | integer       | query | ❌ não       | ID do colaborador                                            |
| `startDate`             | string (date) | query | ❌ não       | Filtra por data de início do afastamento (>= data informada) |
| `endDate`               | string (date) | query | ❌ não       | Filtra por data final do afastamento (<= data informada)     |

***

## ✅ Respostas

### `200 OK` – Lista de afastamentos retornada com sucesso

```json
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

***

## 🧬 Esquema de Resposta

### EmployeeAbsence V1

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

***

### Employee Mini V1

Utilizado nos campos `employeeEnvironmentSuspended`, `employeeEnvironmentRegisteredBy`, `employeeEnvironmentSubstitute`.

| Campo  | Tipo    | Descrição           |
| ------ | ------- | ------------------- |
| `id`   | integer | ID do colaborador   |
| `name` | string  | Nome do colaborador |

***

> 💡 **Dica:** selecione a linguagem desejada nas abas abaixo para visualizar o exemplo de requisição.

````tabs
```bash [🟢 cURL]
curl --request GET \
  --url 'https://api.involves.com/v1/123/employeeabsence?page=1&size=10' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript (Fetch)]
fetch('https://api.involves.com/v1/123/employeeabsence?page=1&size=10', {
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
  "https://api.involves.com/v1/123/employeeabsence",
  params={"page": 1, "size": 10},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js (axios)]
const axios = require('axios');

axios.get('https://api.involves.com/v1/123/employeeabsence', {
  params: { page: 1, size: 10 },
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log(response.data);
});
`Use the Fetch API to retrieve employee absence data with this sample code:'  
````
