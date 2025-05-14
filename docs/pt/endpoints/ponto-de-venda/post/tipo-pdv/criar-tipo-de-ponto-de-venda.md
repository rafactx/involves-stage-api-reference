---
description: Salva um novo tipo de ponto de venda.
---

# Criar Tipo de Ponto de Venda

> 🔗 `POST /v3/pointofsaletypes`


## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Supermercado"
}
```

### Esquema – New Point of Sale Type

| Campo  | Tipo   | Descrição                      |
|--------|--------|--------------------------------|
| `name` | string | Nome do tipo de ponto de venda |


## ✅ Respostas

### `201 Created` – ID do tipo salvo com sucesso

```json
0
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/pointofsaletypes' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Supermercado"
  }'
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/pointofsaletypes",
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

:::


::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Campo `name` ausente ou inválido        |
| 🔐 `401`  | **Token inválido ou não informado**     |
| 🚫 `403`  | Sem permissão para criar tipo de PDV    |
| 💥 `500`  | Erro inesperado no servidor             |
