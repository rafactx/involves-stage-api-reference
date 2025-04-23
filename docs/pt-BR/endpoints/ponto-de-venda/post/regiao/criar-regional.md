---
description: Salva uma regional no ambiente informado.
---

# Criar Regional

`POST /v1/{environmentId}/region`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Regional Sul",
  "macroRegionId": 1
}
```

### Esquema – New Regional V1

| Campo           | Tipo    | Obrigatório | Descrição                      |
| --------------- | ------- | ----------- | ------------------------------ |
| `name`          | string  | ✅ sim       | Nome da regional               |
| `macroRegionId` | integer | ❌ não       | ID da macrorregional associada |

***

## ✅ Respostas

### `200 OK` – ID da nova regional

```json
42
```

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v1/123/region' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Regional Sul",
    "macroRegionId": 1
  }'
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v1/123/region",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Regional Sul",
    "macroRegionId": 1
  }
)

print(response.status_code)
```
````
