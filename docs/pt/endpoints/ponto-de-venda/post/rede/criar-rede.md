---
description: Salva uma nova rede.
---

# Criar Rede

> 🔗 `POST /v3/chains`


## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Rede Super Brasil",
  "code": "RSB001"
}
```

### Esquema – New Chain

| Campo  | Tipo   | Descrição                      |
|--------|--------|--------------------------------|
| `name` | string | Nome da rede (máx. 150)        |
| `code` | string | Código identificador (máx. 50) |


## ✅ Respostas

### `201 Created` – ID da rede criada

```json
0
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/chains' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Rede Super Brasil",
    "code": "RSB001"
  }'
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/chains",
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
| 🔴 `400`  | Requisição inválida ou malformada     |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Permissão negada                     |
| 💥 `500`  | Erro interno do servidor             |
