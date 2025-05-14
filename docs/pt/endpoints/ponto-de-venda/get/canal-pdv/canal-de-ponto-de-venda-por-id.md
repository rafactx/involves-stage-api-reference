---
description: Retorna um canal do ponto de venda de acordo com o ID do canal.
---

# 🔎 Canal de Ponto de Venda por ID

Consulta os detalhes de um canal de ponto de venda a partir do seu identificador.

> 🔗 `GET /v3/pointofsalechannels/{pointOfSaleChannelId}`


## 📥 Parâmetros

| Nome                   | Tipo    | Local | Obrigatório | Descrição                     |
| ---------------------- | ------- | ----- | ----------- | ----------------------------- |
| `pointOfSaleChannelId` | integer | path  | ✅ sim       | ID do canal de ponto de venda |


## ✅ Respostas

### `200 OK` – Canal de ponto do venda retornado com sucesso

```json
{
  "id": 0,
  "name": "string"
}
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
  --url 'https://{dominio}.involves.com/v3/pointofsalechannels/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v3/pointofsalechannels/456', {
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
  "https://{dominio}.involves.com/v3/pointofsalechannels/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v3/pointofsalechannels/456', {
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

| Código | Descrição                            |
|--------|----------------------------------------|
| 🔴 `400`  | Requisição inválida                  |
| 🔐 `401`  | **Não autenticado**                  |
| 🚫 `403`  | Acesso negado                        |
| 🔍 `404`  | Canal de ponto de venda não encontrado |
| 💥 `500`  | Erro interno no servidor             |
