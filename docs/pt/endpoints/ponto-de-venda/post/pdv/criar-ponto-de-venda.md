---
description: Salva um novo ponto de venda no ambiente informado.
---

# Criar Ponto de Venda

> 🔗 `POST /v1/{environmentId}/pointofsale`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição      |
| --------------- | ------- | ----- | ----------- | -------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente |


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Supermercado Ideal",
  "chainId": 1,
  "regionName": "Sul",
  "taxPayerCode": "65487320001",
  "code": "SP001",
  "enabled": true,
  "phone": "(48) 99999-0000",
  "companyName": "Super Ideal LTDA",
  "tradingName": "Super Ideal",
  "address": "Rua das Laranjeiras",
  "number": "123",
  "neighborhood": "Centro",
  "zipCode": "88000-000",
  "cityId": 10,
  "latitude": -27.5954,
  "longitude": -48.548,
  "customFields": [
    {
      "name": "Segmento",
      "value": "Alimentar"
    }
  ],
  "homologated": true
}
```

> Para criação de bandeiras/regionais via nome, informe apenas `chainName` ou `regionName`.


## ✅ Respostas

### `200 OK` – Ponto de venda salvo com sucesso

```json
{
  "id": 789,
  "name": "Supermercado Ideal"
}
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v1/123/pointofsale' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Supermercado Ideal",
    "chainId": 1,
    "regionName": "Sul",
    "taxPayerCode": "65487320001",
    "code": "SP001",
    "enabled": true,
    "phone": "(48) 99999-0000",
    "companyName": "Super Ideal LTDA",
    "tradingName": "Super Ideal",
    "address": "Rua das Laranjeiras",
    "number": "123",
    "neighborhood": "Centro",
    "zipCode": "88000-000",
    "cityId": 10,
    "latitude": -27.5954,
    "longitude": -48.548,
    "customFields": [{"name": "Segmento", "value": "Alimentar"}],
    "homologated": true
  }'
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v1/123/pointofsale",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={
    "name": "Supermercado Ideal",
    "chainId": 1,
    "regionName": "Sul",
    "taxPayerCode": "65487320001",
    "code": "SP001",
    "enabled": True,
    "phone": "(48) 99999-0000",
    "companyName": "Super Ideal LTDA",
    "tradingName": "Super Ideal",
    "address": "Rua das Laranjeiras",
    "number": "123",
    "neighborhood": "Centro",
    "zipCode": "88000-000",
    "cityId": 10,
    "latitude": -27.5954,
    "longitude": -48.548,
    "customFields": [{"name": "Segmento", "value": "Alimentar"}],
    "homologated": True
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
| 🔴 `400`  | Requisição malformada ou campo ausente |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 💥 `500`  | Erro interno no servidor             |
