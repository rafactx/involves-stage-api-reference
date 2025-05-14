---
description: Exclui um ponto de venda de acordo com o ID informado.
---

# 🗑️ Excluir Ponto de Venda

Remove permanentemente um ponto de venda do ambiente especificado, com base no ID fornecido.

> 🔗 `DELETE /v1/{environmentId}/pointofsale/{id}`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição            |
| --------------- | ------- | ----- | ----------- | -------------------- |
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente       |
| `id`            | integer | path  | ✅ sim       | ID do ponto de venda |


## ✅ Respostas

### `200 OK` – Ponto de venda excluído com sucesso

```json
{
  "message": "Ponto de venda excluído com sucesso"
}
```


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://{dominio}.involves.com/v1/123/pointofsale/456' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/pointofsale/456', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {{seu_token}}'
  }
})
  .then(res => res.json())
  .then(console.log);
```

```python [🔵 Python]
import requests

response = requests.delete(
  "https://{dominio}.involves.com/v1/123/pointofsale/456",
  headers={
    "Authorization": "Bearer {{seu_token}}"
  }
)

print(response.status_code)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.delete('https://{dominio}.involves.com/v1/123/pointofsale/456', {
  headers: {
    Authorization: "Bearer {{seu_token}}"
  }
}).then(response => {
  console.log(response.status);
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
| 🔍 `404`  | Ponto de venda não encontrado        |
| 💥 `500`  | Erro interno no servidor             |
