---
description: Salva um novo canal de ponto de venda.
---

# Criar Canal de Ponto de Venda

> 🔗 `POST /v3/pointofsalechannels`


## 📥 Parâmetros

Este endpoint não requer parâmetros na URL.


## 📨 Corpo da Requisição (application/json)

```json
{
  "name": "Canal de Vendas Diretas"
}
```


## 🧬 Esquema da Requisição

### New Point of Sale Channel

| Campo  | Tipo   | Descrição                       |
| ------ | ------ | ------------------------------- |
| `name` | string | Nome do canal de ponto de venda |


## ✅ Respostas

### `201 Created` – ID do novo canal salvo com sucesso

```json
0
```

### Esquema de Resposta

| Tipo de Dado | Descrição                            |
| ------------ | ------------------------------------ |
| `integer`    | ID do canal de ponto de venda criado |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request POST \
  --url 'https://{dominio}.involves.com/v3/pointofsalechannels' \
  --header 'Authorization: Bearer {{seu_token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Canal de Vendas Diretas"
  }'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/pointofsalechannels', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Canal de Vendas Diretas"
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
```

```python [🔵 Python]
import requests

response = requests.post(
  "https://{dominio}.involves.com/v3/pointofsalechannels",
  headers={
    "Authorization": "Bearer {{seu_token}}",
    "Content-Type": "application/json"
  },
  json={"name": "Canal de Vendas Diretas"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.post('https://{dominio}.involves.com/v3/pointofsalechannels', {
  name: "Canal de Vendas Diretas"
}, {
  headers: {
    Authorization: 'Bearer {{seu_token}}',
    'Content-Type': 'application/json'
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

| Código | Descrição                                |
|--------|--------------------------------------------|
| 🔴 `400`  | Requisição malformada ou campo ausente    |
| 🔐 `401`  | **Não autenticado**                      |
| 🚫 `403`  | Acesso negado                            |
| 💥 `500`  | Erro interno no servidor                 |
