---
description: Salva uma regional no ambiente informado.
---

# Criar Regional

> 🔗 `POST /v1/{environmentId}/region`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
|-----------------|---------|-------|-------------|----------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Regional Sul",
  "macroRegionId": 1
}
```

### Esquema – New Regional V1

| Campo           | Tipo    | Descrição                      |
|-----------------|---------|--------------------------------|
| `name`          | string  | Nome da regional               |
| `macroRegionId` | integer | ID da macrorregional associada |


## ✅ Respostas

### `200 OK` – ID da nova regional criada com sucesso

```json
42
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v1/123/region' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Regional Sul",
    "macroRegionId": 1
  }'
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v1/123/region",
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

:::


::: tip 🌐 Domínio da API
Substitua `{dominio}` pelo subdomínio da sua empresa no Involves Stage — ou seja, a parte que aparece **antes de `.involves.com`** na barra de endereço do navegador.

Exemplo: se a URL que você acessa é `https://suaempresa.involves.com`, então use `suaempresa` como valor de `{dominio}`.

A chamada final deve ficar assim:

`https://{dominio}.involves.com/v1/...`
:::


## ❌ Erros Comuns

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição malformada ou campo inválido |
| 🔐 `401`  | **Token inválido ou ausente**         |
| 🚫 `403`  | Sem permissão para criar regional     |
| 💥 `500`  | Erro inesperado no servidor           |
