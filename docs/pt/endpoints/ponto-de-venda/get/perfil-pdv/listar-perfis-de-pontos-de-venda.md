---
description: Retorna uma lista de perfis de pontos de venda de acordo com o ambiente.
---

# Listar Perfis de Pontos de Venda

> 🔗 `GET /v1/{environmentId}/pointofsaleprofile/find`


## 📥 Parâmetros

| Nome            | Tipo    | Local | Obrigatório | Descrição                 |
| --------------- | ------- | ----- | ----------- | ------------------------- |
| `environmentId` | integer | path  | ✅ sim       | Identificador do ambiente |


## ✅ Respostas

### `200 OK` – Lista de perfis de pontos de venda retornada com sucesso

```json
{
  "id": 0,
  "name": "string"
}
```


## 🧬 Esquema de Resposta

### Profile Old POS V1

| Campo  | Tipo    | Descrição                        |
| ------ | ------- | -------------------------------- |
| `id`   | integer | ID do perfil do ponto de venda   |
| `name` | string  | Nome do perfil do ponto de venda |


## 📘 Exemplo de Requisição

::: code-group

```bash [🟢 cURL]
curl --request GET \
  --url 'https://{dominio}.involves.com/v1/123/pointofsaleprofile/find' \
  --header 'Authorization: Bearer {{seu_token}}'
```

```js [🟡 JavaScript]
fetch('https://{dominio}.involves.com/v1/123/pointofsaleprofile/find', {
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
  "https://{dominio}.involves.com/v1/123/pointofsaleprofile/find",
  headers={"Authorization": "Bearer {{seu_token}}"}
)

print(response.json())
```

```js [🟣 Node.js]
const axios = require('axios');

axios.get('https://{dominio}.involves.com/v1/123/pointofsaleprofile/find', {
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

| Código | Descrição                          |
|--------|------------------------------------|
| 🔴 `400`  | Requisição inválida                |
| 🔐 `401`  | **Não autenticado**                |
| 🚫 `403`  | Acesso negado                      |
| 🔍 `404`  | Perfis não encontrados             |
| 💥 `500`  | Erro interno no servidor           |
