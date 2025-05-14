---
description: Retorna uma lista paginada de canais de ponto de venda.
---

# 📚 Listar Canais de Ponto de Venda

Lista os canais de ponto de venda registrados no sistema com suporte à paginação e filtro por nome.

> 🔗 `GET /v3/pointofsalechannels`


## 📥 Parâmetros

| Nome   | Tipo    | Local | Obrigatório | Descrição                                     |
| ------ | ------- | ----- | ----------- | --------------------------------------------- |
| `page` | integer | query | ❌ não       | Página da listagem (default: 1)               |
| `size` | integer | query | ❌ não       | Quantidade de itens por página (default: 100) |
| `name` | string  | query | ❌ não       | Nome do canal de ponto de venda               |


## ✅ Respostas

### `206 Partial Content` – Lista de canais de ponto de venda retornada com sucesso

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```


## 🧬 Esquema de Resposta

::: details Channel V1

| Campo  | Tipo    | Descrição                       |
| ------ | ------- | ------------------------------- |
| `id`   | integer | ID do canal de ponto de venda   |
| `name` | string  | Nome do canal de ponto de venda |

:::


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v3/pointofsalechannels?page=1&size=100&name=Atacado' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/pointofsalechannels?page=1&size=100&name=Atacado', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.get(
  "https://{dominio}.involves.com/v3/pointofsalechannels",
  params={"page": 1, "size": 100, "name": "Atacado"},
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/pointofsalechannels', {
  params: { page: 1, size: 100, name: "Atacado" },
  headers: {
    Authorization: 'Bearer {seu_token}'
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

`https://{dominio}.involves.com/v3/...`
:::


## ❌ Erros Comuns

| Código | Descrição                              |
|--------|------------------------------------------|
| 🔴 `400`  | Requisição inválida                    |
| 🔐 `401`  | **Não autenticado**                    |
| 🚫 `403`  | Acesso negado                          |
| 🔍 `404`  | Nenhum canal encontrado                |
| 💥 `500`  | Erro interno no servidor               |
