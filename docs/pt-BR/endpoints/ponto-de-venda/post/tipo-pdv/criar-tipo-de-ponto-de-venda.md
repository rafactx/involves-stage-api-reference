---
description: Salva um novo tipo de ponto de venda.
---

# Criar Tipo de Ponto de Venda

`POST /v3/pointofsaletypes`

***

## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.

***

## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Supermercado"
}
```

### Esquema – New Point of Sale Type

| Campo  | Tipo   | Obrigatório | Descrição                      |
| ------ | ------ | ----------- | ------------------------------ |
| `name` | string | ✅ sim       | Nome do tipo de ponto de venda |

***

## ✅ Respostas

### `201 Created` – ID do tipo salvo com sucesso

```json
0
```

***

## 📘 Exemplo de requisição

````tabs
```bash [🟢 cURL]
curl --request POST \
  --url 'https://api.involves.com/v3/pointofsaletypes' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Supermercado"
  }'
```

```python [🔵 Python (requests)]
import requests

response = requests.post(
  "https://api.involves.com/v3/pointofsaletypes",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Supermercado"
  }
)

print(response.status_code)
```
````
