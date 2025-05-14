---
description: Exclui um colaborador de acordo com o ID do colaborador especificado.
---

# 📄 Excluir Colaborador

Remove permanentemente o colaborador informado do ambiente.

> 🔗 `DELETE /v1/{environmentId}/employeeenvironment/{id}`

## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição         |
|------------------|---------|-------|-------------|-------------------|
| `environmentId` | integer | path  | ✅ sim       | ID do ambiente    |
| `id`            | integer | path  | ✅ sim       | ID do colaborador |

## ✅ Respostas

### `200 OK` – Colaborador excluído com sucesso

::: details Clique para ver o código
```json
{}
```
:::

## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request DELETE \
  --url 'https://{dominio}.involves.com/v1/123/employeeenvironment/456' \
  --header 'Authorization: Bearer {seu_token}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer {seu_token}'
  }
})
  .then(res => res.status)
  .then(status => console.log('Status:', status));
```

```python [🔵 Python]
import requests

response = requests.delete(
  "https://{dominio}.involves.com/v1/123/employeeenvironment/456",
  headers={"Authorization": "Bearer {seu_token}"}
)

print('Status:', response.status_code)
```

```js [🟣 Node.js]
const axios = require('axios');

axios.delete('https://{dominio}.involves.com/v1/123/employeeenvironment/456', {
  headers: {
    Authorization: 'Bearer {seu_token}'
  }
}).then(response => {
  console.log('Status:', response.status);
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

| Código | Descrição                     |
|--------|-------------------------------|
| 🔴 `400`  | Requisição inválida           |
| 🔐 `401`  | **Não autenticado**           |
| 🚫 `403`  | Acesso negado                 |
| 🔍 `404`  | Recurso não encontrado        |
| 💥 `500`  | Erro interno no servidor      |
