---
description: Retorna o tipo de ponto de venda especificado.
---

# Buscar Tipo de Ponto de Venda por ID

> 🔗 `GET /v1/pointofsaletype/{id}`


## 📥 Parâmetros

| Nome | Tipo    | Local | Obrigatório | Descrição                               |
| ---- | ------- | ----- | ----------- | --------------------------------------- |
| `id` | integer | path  | ✅ sim       | Identificador do tipo de ponto de venda |


## ✅ Respostas

### `200 OK` – Tipo de ponto de venda retornado com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```


## 🧬 Esquema de Resposta

### Type Old POS V1

| Campo  | Tipo    | Descrição                      |
| ------ | ------- | ------------------------------ |
| `id`   | integer | ID do tipo de ponto de venda   |
| `name` | string  | Nome do tipo de ponto de venda |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/pointofsaletype/123' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/pointofsaletype/123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v1/pointofsaletype/123",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/pointofsaletype/123', {
  headers: {
    Authorization: 'Bearer {{seu_token}}'
  }
}).then(response => {
  console.log(response.data);
});
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
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Tipo de ponto de venda não encontrado |
| 💥 `500`  | Erro interno no servidor             |
