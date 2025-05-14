---
description: Salva um perfil de ponto de venda.
---

# Criar Perfil de Ponto de Venda

> 🔗 `POST /v3/environments/{environmentId}/pointofsaleprofiles`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |


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

| Campo                   | Tipo    | Descrição                                                        |
| ----------------------- | ------- | ---------------------------------------------------------------- |
| `id`                    | integer | ID do perfil (opcional)                                          |
| `name`                  | string  | Nome do perfil                                                   |
| `monthlyRequiredVisits` | integer | Quantidade esperada de visitas mensais para PDVs com este perfil |
| `requiredVisitDuration` | string  | Duração da visita no padrão ISO-8601, ex: `PT2H45M`              |


## ✅ Respostas

### `201 Created` – ID do perfil criado

```json
0
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/environments/123/pointofsaleprofiles' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "PDV Perfil Premium",
    "monthlyRequiredVisits": 4,
    "requiredVisitDuration": "PT2H45M"
  }'
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/environments/123/pointofsaleprofiles",
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
