---
description: Salva uma nova rede.
---

# Criar Rede

`POST /v3/chains`

***

## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Rede Super Brasil",
  "code": "RSB001"
}
```

### Esquema – New Chain

| Campo  | Tipo   | Obrigatório | Descrição                      |
| ------ | ------ | ----------- | ------------------------------ |
| `name` | string | ✅ sim       | Nome da rede (máx. 150)        |
| `code` | string | ❌ não       | Código identificador (máx. 50) |

***

## ✅ Respostas

### `201 Created` – ID da rede criada

```json
0
```

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/chains' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Rede Super Brasil",
    "code": "RSB001"
  }'
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/chains",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Rede Super Brasil",
    "code": "RSB001"
  }
)

print(response.status_code)
```
````
