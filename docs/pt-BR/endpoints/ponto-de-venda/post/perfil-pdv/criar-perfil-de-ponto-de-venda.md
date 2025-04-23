---
description: Salva um perfil de ponto de venda.
---

# Criar Perfil de Ponto de Venda

`POST /v3/environments/{environmentId}/pointofsaleprofiles`

***

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "id": 0,
  "name": "PDV Perfil Premium",
  "monthlyRequiredVisits": 4,
  "requiredVisitDuration": "PT2H45M"
}
```

### Esquema – New Point of Sale Profile

| Campo                   | Tipo    | Obrigatório | Descrição                                                        |
| ----------------------- | ------- | ----------- | ---------------------------------------------------------------- |
| `id`                    | integer | ❌ não       | ID do perfil (opcional)                                          |
| `name`                  | string  | ✅ sim       | Nome do perfil                                                   |
| `monthlyRequiredVisits` | integer | ❌ não       | Quantidade esperada de visitas mensais para PDVs com este perfil |
| `requiredVisitDuration` | string  | ❌ não       | Duração da visita no padrão ISO-8601, ex: `PT2H45M`              |

***

## ✅ Respostas

### `201 Created` – ID do perfil criado

```json
0
```

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/environments/123/pointofsaleprofiles' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "PDV Perfil Premium",
    "monthlyRequiredVisits": 4,
    "requiredVisitDuration": "PT2H45M"
  }'
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/environments/123/pointofsaleprofiles",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "PDV Perfil Premium",
    "monthlyRequiredVisits": 4,
    "requiredVisitDuration": "PT2H45M"
  }
)

print(response.status_code)
```
````
