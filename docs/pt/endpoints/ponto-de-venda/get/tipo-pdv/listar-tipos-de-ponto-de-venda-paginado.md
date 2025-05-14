---
description: Retorna uma lista paginada de tipos de pontos de venda.
---

# Listar Tipos de Ponto de Venda (paginado)

> 🔗 `GET /v1/pointofsaletype/find`


## 📥 Parâmetros

| Nome   | Tipo    | Local | Obrigatório | Descrição                                |
| ------ | ------- | ----- | ----------- | ---------------------------------------- |
| `size` | integer | query | ❌ não       | Número de itens por página (default: 50) |
| `page` | integer | query | ❌ não       | Página da listagem (default: 1)          |


## ✅ Respostas

### `200 OK` – Lista paginada de tipos de pontos de venda retornada com sucesso

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
  --url 'https://{dominio}.involves.com/v1/pointofsaletype/find?page=1&size=50' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/pointofsaletype/find?page=1&size=50', {
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
  "https://{dominio}.involves.com/v1/pointofsaletype/find",
  params={"page": 1, "size": 50},
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/pointofsaletype/find', {
  params: { page: 1, size: 50 },
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

| Código | Descrição                              |
|--------|------------------------------------------|
| 🔴 `400`  | Requisição inválida                    |
| 🔐 `401`  | **Não autenticado**                    |
| 🚫 `403`  | Acesso negado                          |
| 🔍 `404`  | Tipo de ponto de venda não encontrado  |
| 💥 `500`  | Erro interno no servidor               |
